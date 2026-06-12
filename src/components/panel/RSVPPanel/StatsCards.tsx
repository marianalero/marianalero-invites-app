import React from "react";
import { Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

export interface StatsCardsProps {
  totalAssigned?: number;
  totalConfirmed?: number;
  totalNotConfirmed?: number;
  totalWithoutResponse?: number;
}

const StatsCards: React.FC<StatsCardsProps> = ({
  totalAssigned,
  totalConfirmed,
  totalNotConfirmed,
  totalWithoutResponse,
}) => {
  const cards = [
    {
      label: "Invitados",
      value: totalAssigned,
      color: "#a41423",
      bg: "#ffffff",
    },
    {
      label: "Sí asistirán",
      value: totalConfirmed,
      color: "#4d7c57",
      bg: "#f6fbf7",
    },
    {
      label: "No asistirán",
      value: totalNotConfirmed,
      color: "#b44d5f",
      bg: "#fdf6f7",
    },
    {
      label: "Sin respuesta",
      value: totalWithoutResponse,
      color: "#b28a3b",
      bg: "#fffaf0",
    },
  ];

  return (
    <Grid container spacing={3}>
      {cards.map((card) => (
        <Grid
          key={card.label}
          size={{ xs: 6, md: 3 }}
        >
          <Box
            sx={{
              p: { xs: 2.5, md: 3 },
              borderRadius: "28px",
              bgcolor: card.bg,
              border: "1px solid rgba(200,173,120,.25)",
              boxShadow: "0 16px 40px rgba(75,45,35,.06)",
              transition: ".25s ease",
              height: "100%",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 22px 50px rgba(75,45,35,.10)",
              },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: ".8rem",
                fontWeight: 700,
                color: "#7d5f55",
                textTransform: "uppercase",
                letterSpacing: ".12em",
                mb: 2,
              }}
            >
              {card.label}
            </Typography>

            <Typography
              sx={{
                fontFamily: "'DM Serif Display', serif",
                color: card.color,
                fontSize: { xs: "2.8rem", md: "3.5rem" },
                lineHeight: 1,
              }}
            >
              {card.value ?? 0}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default StatsCards;