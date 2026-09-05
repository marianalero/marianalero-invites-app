import { Box, Typography } from "@mui/material";
import type { FontCardProps } from "../types";

const padIndex = (index: number): string => String(index).padStart(2, "0");

const FontCard = ({ index, font, previewText }: FontCardProps) => {
  return (
    <Box
      sx={{
        height: "100%",
        bgcolor: "#fff",
        borderRadius: "28px",
        px: { xs: 2.5, md: 3.5 },
        py: { xs: 3, md: 3 },
        boxShadow: "0 12px 32px rgba(75,45,35,.06)",
        border: "1px solid rgba(200,173,120,.18)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: 2,
      }}
    >
      <Typography
        sx={{
          fontFamily: "Montserrat, sans-serif",
          color: "#c8ad78",
          fontSize: ".72rem",
          fontWeight: 700,
          letterSpacing: ".28em",
        }}
      >
        {padIndex(index)}
      </Typography>

      <Typography
        sx={{
          fontFamily: "Montserrat, sans-serif",
          color: "#7d5f55",
          fontSize: ".78rem",
          fontWeight: 600,
          letterSpacing: ".12em",
          textTransform: "uppercase",
        }}
      >
        {font.name}
      </Typography>

      <Box
        sx={{
          width: 72,
          height: "1px",
          bgcolor: "rgba(200,173,120,.7)",
          position: "relative",
          my: 0.5,
          "&::before": {
            content: '""',
            position: "absolute",
            left: "50%",
            top: "50%",
            width: 5,
            height: 5,
            bgcolor: "#c8ad78",
            borderRadius: "1px",
            transform: "translate(-50%, -50%) rotate(45deg)",
          },
        }}
      />

      <Typography
        className="font-preview-sample"
        sx={{
          fontFamily: font.fontFamily,
          color: "#3a2a25",
          fontSize: { xs: "40px", md: "52px" },
          lineHeight: 1.25,
          fontWeight: 400,
          wordBreak: "break-word",
          minHeight: { xs: 72, md: 88 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {previewText}
      </Typography>
    </Box>
  );
};

export default FontCard;
