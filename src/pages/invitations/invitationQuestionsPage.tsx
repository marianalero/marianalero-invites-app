import Grid from "@mui/material/Grid2";
import ResponsiveLayout from "../../layouts/headerPanel";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import DragIndicatorRoundedIcon from "@mui/icons-material/DragIndicatorRounded";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import FeaturePageFrame, { burgundyButtonSx } from "../../components/panel/Invitation/features/FeaturePageFrame";
import QuestionDialog from "../../components/panel/Invitation/features/QuestionDialog";
import { Invitation } from "../../models/invitation";
import { Question } from "../../models/question";
import { questionTypeLabel } from "../../models/confirmation";
import {
  SaveQuestionBody,
  createQuestion,
  deleteQuestion,
  getInvitationById,
  getInvitationFeatures,
  getManagedQuestions,
  readApiError,
  reorderQuestions,
  updateQuestion,
} from "../../services/invitationApiClient";
import { useSnackbar } from "../../context/snackbarContext";

function moveItem<T>(items: T[], fromId: number, toId: number, idOf: (item: T) => number) {
  const from = items.findIndex((item) => idOf(item) === fromId);
  const to = items.findIndex((item) => idOf(item) === toId);
  if (from < 0 || to < 0 || from === to) return items;
  const next = [...items];
  const [item] = next.splice(from, 1);
  next.splice(to, 0, item);
  return next;
}

export default function InvitationQuestionsPage() {
  const { id } = useParams();
  const invitationId = Number(id);
  const { showSnackbar } = useSnackbar();
  const [invitation, setInvitation] = useState<Invitation | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [applicable, setApplicable] = useState(true);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState<Question | null>(null);
  const [pendingDelete, setPendingDelete] = useState<Question | null>(null);
  const [dragId, setDragId] = useState<number | null>(null);

  const load = async () => {
    const [invitationData, featureData, questionData] = await Promise.all([
      getInvitationById(invitationId),
      getInvitationFeatures(invitationId),
      getManagedQuestions(invitationId),
    ]);
    setInvitation(invitationData);
    setApplicable(featureData.questionsApplicable ?? (featureData.confirmationMethod === "form" || !featureData.confirmationMethod));
    setQuestions([...questionData].sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0)));
  };

  useEffect(() => {
    if (!invitationId) return;
    let cancelled = false;
    load()
      .catch((error) => {
        if (!cancelled) showSnackbar(readApiError(error, "No se pudieron cargar las preguntas."), "error");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [invitationId]);

  const handleSave = async (body: SaveQuestionBody) => {
    try {
      if (editing) {
        await updateQuestion(invitationId, editing.id, body);
        showSnackbar("Pregunta actualizada.", "success");
      } else {
        await createQuestion(invitationId, body);
        showSnackbar("Pregunta creada.", "success");
      }
      await load();
    } catch (error) {
      throw new Error(readApiError(error, "No se pudo guardar la pregunta."));
    }
  };

  const handleDelete = async () => {
    if (!pendingDelete) return;
    try {
      await deleteQuestion(invitationId, pendingDelete.id);
      setPendingDelete(null);
      showSnackbar("Pregunta eliminada.", "success");
      await load();
    } catch (error) {
      showSnackbar(readApiError(error, "No se pudo eliminar la pregunta."), "error");
    }
  };

  const handleDrop = async (targetId: number) => {
    if (dragId == null || dragId === targetId) return;
    const previous = questions;
    const next = moveItem(questions, dragId, targetId, (question) => question.id);
    setQuestions(next);
    setDragId(null);
    try {
      const saved = await reorderQuestions(invitationId, next.map((question) => question.id));
      setQuestions(saved);
    } catch (error) {
      setQuestions(previous);
      showSnackbar(readApiError(error, "No se pudo guardar el orden."), "error");
    }
  };

  return (
    <ResponsiveLayout>
      <Grid container spacing={2} padding={2}>
        <Grid size={12}>
          {loading ? (
            <Box sx={{ display: "grid", placeItems: "center", minHeight: 240 }}>
              <CircularProgress sx={{ color: "#a41423" }} />
            </Box>
          ) : (
            <FeaturePageFrame
              invitationName={invitation?.name}
              title="Preguntas personalizadas"
              subtitle="Estas preguntas aparecerán en el formulario de confirmación."
              backTo={`/invitations/${invitationId}/features`}
              backLabel="Volver a funcionalidades"
              action={
                <Button
                  variant="contained"
                  startIcon={<AddRoundedIcon />}
                  sx={burgundyButtonSx}
                  onClick={() => {
                    setEditing(null);
                    setDialogOpen(true);
                  }}
                >
                  Agregar pregunta
                </Button>
              }
            >
              {!applicable && (
                <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: "#7d5f55", mb: 2 }}>
                  Estas preguntas están inactivas porque la confirmación no es por formulario. Se conservan y volverán a mostrarse si eliges el formulario.
                </Typography>
              )}
              {questions.length === 0 ? (
                <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: "#7d5f55" }}>
                  Aún no hay preguntas para esta invitación.
                </Typography>
              ) : (
                <Box sx={{ display: "grid", gap: 1.5 }}>
                  {questions.map((question, index) => (
                    <Box
                      key={question.id}
                      draggable
                      onDragStart={() => setDragId(question.id)}
                      onDragOver={(event) => event.preventDefault()}
                      onDrop={() => handleDrop(question.id)}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1.5,
                        p: 2,
                        borderRadius: "20px",
                        bgcolor: "#fff",
                        border: "1px solid rgba(200,173,120,.28)",
                      }}
                    >
                      <DragIndicatorRoundedIcon sx={{ color: "#c8ad78", cursor: "grab" }} />
                      <Typography sx={{ width: 28, fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#a41423" }}>
                        {index + 1}
                      </Typography>
                      <Box sx={{ flex: 1 }}>
                        <Typography sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#3a2a25" }}>
                          {question.text}
                        </Typography>
                        <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: "#7d5f55", fontSize: ".84rem" }}>
                          {questionTypeLabel(question.type)} · {question.isRequired ? "Obligatoria" : "Opcional"}
                        </Typography>
                      </Box>
                      <IconButton
                        aria-label="Editar pregunta"
                        onClick={() => {
                          setEditing(question);
                          setDialogOpen(true);
                        }}
                      >
                        <EditOutlinedIcon sx={{ color: "#a41423" }} />
                      </IconButton>
                      <IconButton aria-label="Eliminar pregunta" onClick={() => setPendingDelete(question)}>
                        <DeleteOutlineRoundedIcon sx={{ color: "#a41423" }} />
                      </IconButton>
                    </Box>
                  ))}
                </Box>
              )}
            </FeaturePageFrame>
          )}
        </Grid>
      </Grid>
      <QuestionDialog
        open={dialogOpen}
        question={editing}
        onClose={() => setDialogOpen(false)}
        onSave={handleSave}
      />
      <Dialog open={Boolean(pendingDelete)} onClose={() => setPendingDelete(null)}>
        <DialogTitle sx={{ fontFamily: "'DM Serif Display', serif", color: "#a41423" }}>Eliminar pregunta</DialogTitle>
        <DialogContent>
          <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: "#3a2a25" }}>
            ¿Eliminar “{pendingDelete?.text}”? Si ya tiene respuestas de invitados, no se borrará.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setPendingDelete(null)} sx={{ textTransform: "none", color: "#7d5f55" }}>Cancelar</Button>
          <Button onClick={handleDelete} variant="contained" sx={burgundyButtonSx}>Eliminar</Button>
        </DialogActions>
      </Dialog>
    </ResponsiveLayout>
  );
}
