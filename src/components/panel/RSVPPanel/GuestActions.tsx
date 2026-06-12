import { Box, Button, IconButton, Tooltip } from "@mui/material";
import { Guest } from "../../../models/guest";
import { useState } from "react";
import CreateGuestDialog from "./Dialog/CreateGuestDialog";
import ModeEditOutlineRoundedIcon from "@mui/icons-material/ModeEditOutlineRounded";
import InsertLinkRoundedIcon from "@mui/icons-material/InsertLinkRounded";
import { Confirm, DeleteGuest } from "../../../services/guestApiClient";
import { RSVPSTATUS } from "../../../constants/rsvpStatus";
import { useSnackbar } from "../../../context/snackbarContext";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import ConfirmModal from "../../ConfirmModal/ConfirmModal";
import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";
import EventBusyRoundedIcon from "@mui/icons-material/EventBusyRounded";
import GuestAnswersModal from "./Dialog/GuestAnswersModal";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";

interface GuestActionsProps {
  guest: Guest;
  link: string;
  refresh: () => void;
  questions: boolean;
}

const actionButtonSx = {
  width: 36,
  height: 36,
  borderRadius: "50%",
  bgcolor: "#fff",
  border: "1px solid rgba(200,173,120,.28)",
  color: "#a41423",
  transition: ".2s ease",
  "&:hover": {
    bgcolor: "rgba(164,20,35,.06)",
    transform: "translateY(-1px)",
  },
  "&.Mui-disabled": {
    bgcolor: "rgba(255,255,255,.45)",
    borderColor: "rgba(200,173,120,.18)",
    color: "#cdbfb5",
  },
};

const GuestActions: React.FC<GuestActionsProps> = ({
  guest,
  link,
  refresh,
  questions,
}) => {
  const [openCreated, setOpenCreated] = useState(false);
  const [openConfirmDelete, setOpenConfirmDelete] = useState(false);
  const [openConfirmStatus, setOpenConfirmStatus] = useState(false);
  const [openRemove, setOpenRemove] = useState(false);
  const [openAnswers, setOpenAnswers] = useState(false);

  const { showSnackbar } = useSnackbar();

  const handleCreated = () => {
    setOpenCreated(false);
    showSnackbar("Invitado actualizado exitosamente", "info");
    refresh();
  };

  const confirmGuest = async (status: RSVPSTATUS) => {
    await Confirm({
      guestId: guest.id,
      rsvpStatus: status,
      totalConfirmed: guest.totalAssigned,
      totalAssigned: guest.totalAssigned,
      invitationId: guest.invitationId,
    });

    showSnackbar("Se confirmó la asistencia correctamente", "success");
    setOpenConfirmStatus(false);
    setOpenRemove(false);
    refresh();
  };

  const deleteGuest = async () => {
    await DeleteGuest(guest.id);
    showSnackbar("Invitado eliminado correctamente", "success");
    setOpenConfirmDelete(false);
    refresh();
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: 0.8,
          width: "100%",
        }}
      >
        <Tooltip title="Copiar link">
          <span>
            <IconButton
              disabled={!link}
              onClick={() => {
                navigator.clipboard.writeText(`${link}?id=${guest.id}`);
                showSnackbar("Link copiado en portapapeles", "success");
              }}
              sx={actionButtonSx}
            >
              <InsertLinkRoundedIcon fontSize="small" />
            </IconButton>
          </span>
        </Tooltip>

        <Tooltip title="Editar invitado">
          <IconButton
            onClick={() => setOpenCreated(true)}
            sx={actionButtonSx}
          >
            <ModeEditOutlineRoundedIcon fontSize="small" />
          </IconButton>
        </Tooltip>

        {guest.rsvpStatus !== RSVPSTATUS.Confirmed ? (
          <Tooltip title="Confirmar asistencia">
            <IconButton
              onClick={() => setOpenConfirmStatus(true)}
              sx={{
                ...actionButtonSx,
                color: "#4d7c57",
                "&:hover": {
                  bgcolor: "#f6fbf7",
                  transform: "translateY(-1px)",
                },
              }}
            >
              <EventAvailableRoundedIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Quitar asistencia">
            <IconButton
              onClick={() => setOpenRemove(true)}
              sx={{
                ...actionButtonSx,
                color: "#b28a3b",
                "&:hover": {
                  bgcolor: "#fffaf0",
                  transform: "translateY(-1px)",
                },
              }}
            >
              <EventBusyRoundedIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        )}

        {questions && (
          <Tooltip title="Ver respuestas">
            <Button
              onClick={() => setOpenAnswers(true)}
              startIcon={<QuestionAnswerRoundedIcon />}
              sx={{
                ml: 0.5,
                borderRadius: "999px",
                px: 1.8,
                height: 36,
                minWidth: "auto",
                border: "1px solid rgba(200,173,120,.28)",
                color: "#a41423",
                bgcolor: "#fff",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 600,
                fontSize: ".78rem",
                textTransform: "none",
                whiteSpace: "nowrap",
                "&:hover": {
                  bgcolor: "rgba(164,20,35,.06)",
                  transform: "translateY(-1px)",
                },
              }}
            >
              Respuestas
            </Button>
          </Tooltip>
        )}

        <Tooltip title="Eliminar invitado">
          <IconButton
            onClick={() => setOpenConfirmDelete(true)}
            sx={{
              ...actionButtonSx,
              color: "#b44d5f",
              "&:hover": {
                bgcolor: "#fdf6f7",
                transform: "translateY(-1px)",
              },
            }}
          >
            <DeleteOutlineRoundedIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>

      {openCreated && (
        <CreateGuestDialog
          open={openCreated}
          onClose={() => setOpenCreated(false)}
          onCreated={handleCreated}
          id={guest.id}
        />
      )}

      <ConfirmModal
        open={openConfirmDelete}
        title="¿Eliminar invitado?"
        description="Esta acción eliminará al invitado de manera permanente."
        confirmText="Eliminar"
        cancelText="Cancelar"
        onClose={() => setOpenConfirmDelete(false)}
        onConfirm={deleteGuest}
      />

      <ConfirmModal
        open={openConfirmStatus}
        title="Confirmar asistencia"
        description="¿Deseas marcar como asistente a este invitado?"
        confirmText="Marcar asistencia"
        cancelText="Cancelar"
        onClose={() => setOpenConfirmStatus(false)}
        onConfirm={() => confirmGuest(RSVPSTATUS.Confirmed)}
      />

      <ConfirmModal
        open={openRemove}
        title="Quitar asistencia"
        description="¿Estás seguro de que deseas quitar la asistencia de este invitado?"
        confirmText="Quitar asistencia"
        cancelText="Cancelar"
        onClose={() => setOpenRemove(false)}
        onConfirm={() => confirmGuest(RSVPSTATUS.NotConfirmed)}
      />

      {openAnswers && (
        <GuestAnswersModal
          open={openAnswers}
          onClose={() => setOpenAnswers(false)}
          guestId={guest.id}
        />
      )}
    </>
  );
};

export default GuestActions;