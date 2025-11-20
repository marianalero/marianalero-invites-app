import { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  CircularProgress,
  IconButton,
  Box,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { getAnswers } from "../../../../services/guestApiClient";
import { GuestAnswer } from "../../../../models/question";

type Props = {
  open: boolean;
  onClose: () => void;
  guestId: number;
};

const GuestAnswersModal = ({ open, onClose, guestId }: Props) => {
  const [loading, setLoading] = useState(true);
  const [answers, setAnswers] = useState<GuestAnswer[]>([]);

  useEffect(() => {
    if (!open) return;

    const fetchAnswers = async () => {
      try {
        setLoading(true);
        const res = await getAnswers(guestId);
        
        setAnswers(res);
      } catch (error) {
        console.error("Error loading answers", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnswers();
  }, [open, guestId]);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">Respuestas del invitado</Typography>

        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        {loading ? (
          <Box display="flex" justifyContent="center" py={4}>
            <CircularProgress />
          </Box>
        ) : answers.length === 0 ? (
          <Typography>No hay respuestas registradas.</Typography>
        ) : (
          answers.map((item, index) => (
            <Box key={index} mb={2}>
              <Typography fontWeight="bold">{item.questionText}</Typography>
              <Typography color="text.secondary">{item.response}</Typography>
              {index < answers.length - 1 && <Divider sx={{ mt: 1 }} />}
            </Box>
          ))
        )}
      </DialogContent>
    </Dialog>
  );
};

export default GuestAnswersModal;
