import { FormEvent, useEffect, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  IconButton,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import DragIndicatorRoundedIcon from "@mui/icons-material/DragIndicatorRounded";
import { Question } from "../../../../models/question";
import {
  QUESTION_TYPE_OPTIONS,
  normalizeQuestionType,
  parseOptions,
  requiresOptions,
} from "../../../../models/confirmation";
import { SaveQuestionBody } from "../../../../services/invitationApiClient";
import { burgundyButtonSx } from "./FeaturePageFrame";

interface QuestionDialogProps {
  open: boolean;
  question?: Question | null;
  onClose: () => void;
  onSave: (body: SaveQuestionBody) => Promise<void>;
}

export default function QuestionDialog({ open, question, onClose, onSave }: QuestionDialogProps) {
  const [text, setText] = useState("");
  const [type, setType] = useState("short_text");
  const [isRequired, setIsRequired] = useState(false);
  const [options, setOptions] = useState<string[]>(["", ""]);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [dragIndex, setDragIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!open) return;
    setText(question?.text ?? "");
    setType(normalizeQuestionType(question?.type));
    setIsRequired(Boolean(question?.isRequired));
    const currentOptions = parseOptions(question?.optionsJson);
    setOptions(currentOptions.length > 0 ? currentOptions : ["", ""]);
    setError("");
  }, [open, question]);

  const showOptions = requiresOptions(type);

  const moveOption = (from: number, to: number) => {
    if (from === to || from < 0 || to < 0) return;
    setOptions((current) => {
      const next = [...current];
      const [item] = next.splice(from, 1);
      next.splice(to, 0, item);
      return next;
    });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setSaving(true);
    setError("");
    try {
      await onSave({
        text: text.trim(),
        type,
        isRequired,
        options: showOptions ? options.map((option) => option.trim()).filter(Boolean) : undefined,
      });
      onClose();
    } catch (saveError) {
      setError(saveError instanceof Error ? saveError.message : "No se pudo guardar la pregunta.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <Box component="form" onSubmit={handleSubmit}>
        <DialogTitle sx={{ fontFamily: "'DM Serif Display', serif", color: "#a41423" }}>
          {question ? "Editar pregunta" : "Nueva pregunta"}
        </DialogTitle>
        <DialogContent sx={{ display: "grid", gap: 2, pt: "8px !important" }}>
          <TextField
            required
            label="Pregunta"
            value={text}
            onChange={(event) => setText(event.target.value)}
            fullWidth
          />
          <TextField
            select
            required
            label="Tipo de pregunta"
            value={type}
            onChange={(event) => setType(event.target.value)}
            fullWidth
          >
            {QUESTION_TYPE_OPTIONS.map((option) => (
              <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
            ))}
          </TextField>
          <FormControlLabel
            control={<Checkbox checked={isRequired} onChange={(event) => setIsRequired(event.target.checked)} sx={{ color: "#a41423", "&.Mui-checked": { color: "#a41423" } }} />}
            label={
              <Box>
                <Typography sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}>Pregunta obligatoria</Typography>
                <Typography sx={{ fontFamily: "Montserrat, sans-serif", color: "#7d5f55", fontSize: ".82rem" }}>
                  El invitado deberá responder esta pregunta.
                </Typography>
              </Box>
            }
          />
          {showOptions && (
            <Box>
              <Typography sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, mb: 1 }}>Opciones</Typography>
              <Box sx={{ display: "grid", gap: 1 }}>
                {options.map((option, index) => (
                  <Box
                    key={`${index}-${options.length}`}
                    draggable
                    onDragStart={() => setDragIndex(index)}
                    onDragOver={(event) => event.preventDefault()}
                    onDrop={() => {
                      if (dragIndex == null) return;
                      moveOption(dragIndex, index);
                      setDragIndex(null);
                    }}
                    sx={{ display: "flex", gap: 1, alignItems: "center" }}
                  >
                    <DragIndicatorRoundedIcon sx={{ color: "#c8ad78", cursor: "grab" }} />
                    <TextField
                      fullWidth
                      value={option}
                      placeholder={`Opción ${index + 1}`}
                      onChange={(event) => {
                        const next = [...options];
                        next[index] = event.target.value;
                        setOptions(next);
                      }}
                    />
                    <IconButton
                      aria-label="Eliminar opción"
                      onClick={() => setOptions(options.filter((_, optionIndex) => optionIndex !== index))}
                      disabled={options.length <= 2}
                    >
                      <DeleteOutlineRoundedIcon />
                    </IconButton>
                  </Box>
                ))}
              </Box>
              <Button
                startIcon={<AddRoundedIcon />}
                onClick={() => setOptions([...options, ""])}
                sx={{ mt: 1, textTransform: "none", color: "#a41423", fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}
              >
                Agregar opción
              </Button>
            </Box>
          )}
          {error && (
            <Typography sx={{ color: "#a41423", fontFamily: "Montserrat, sans-serif", fontSize: ".88rem" }}>{error}</Typography>
          )}
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button onClick={onClose} sx={{ textTransform: "none", color: "#7d5f55", fontFamily: "Montserrat, sans-serif" }}>
            Cancelar
          </Button>
          <Button type="submit" variant="contained" disabled={saving} sx={burgundyButtonSx}>
            Guardar pregunta
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
}
