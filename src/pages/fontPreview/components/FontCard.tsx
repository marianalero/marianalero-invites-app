import { Box, Typography } from "@mui/material";
import type { FontCardProps } from "../types";

const padIndex = (index: number): string => String(index).padStart(2, "0");

const FontCard = ({ index, font, previewText }: FontCardProps) => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
        bgcolor: "#fff",
        borderRadius: "28px",
        px: { xs: 2.5, md: 3.5 },
        pt: { xs: 4, md: 4.5 },
        pb: { xs: 3, md: 3.5 },
        boxShadow: "0 12px 32px rgba(75,45,35,.06)",
        border: "1px solid rgba(200,173,120,.18)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: 1.5,
      }}
    >
      {font.mostChosen && (
        <Box
          sx={{
            position: "absolute",
            top: 12,
            right: 12,
            display: "inline-flex",
            alignItems: "center",
            gap: 0.4,
            px: 1,
            py: 0.35,
            borderRadius: "999px",
            bgcolor: "rgba(164,20,35,.08)",
            border: "1px solid rgba(164,20,35,.18)",
          }}
        >
          <Typography
            component="span"
            sx={{
              fontFamily: "Montserrat, sans-serif",
              color: "#a41423",
              fontSize: ".58rem",
              fontWeight: 700,
              letterSpacing: ".04em",
              lineHeight: 1.2,
              whiteSpace: "nowrap",
            }}
          >
            ★ Más elegida
          </Typography>
        </Box>
      )}

      <Typography
        sx={{
          fontFamily: "Montserrat, sans-serif",
          color: "#7d5f55",
          fontSize: { xs: ".62rem", md: ".65rem" },
          fontWeight: 600,
          letterSpacing: ".1em",
          textTransform: "uppercase",
        }}
      >
        <Box component="span" sx={{ color: "#c8ad78", fontWeight: 700 }}>
          {padIndex(index)}
        </Box>
        {" · "}
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
          fontSize: { xs: "52px", md: "60px" },
          lineHeight: 1.2,
          fontWeight: 400,
          wordBreak: "break-word",
          minHeight: { xs: 76, md: 92 },
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
