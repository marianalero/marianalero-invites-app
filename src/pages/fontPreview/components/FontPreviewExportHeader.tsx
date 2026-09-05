import { Box, Typography } from "@mui/material";
import type { FontPreviewExportHeaderProps } from "../types";

const FontPreviewExportHeader = ({
  page,
  totalPages,
}: FontPreviewExportHeaderProps) => {
  const showPage =
    typeof page === "number" && typeof totalPages === "number" && totalPages > 1;

  return (
    <Box sx={{ textAlign: "center", mb: 4 }}>
      <Typography
        sx={{
          fontFamily: "Montserrat, sans-serif",
          color: "#c8ad78",
          fontSize: ".78rem",
          fontWeight: 700,
          letterSpacing: ".28em",
          textTransform: "uppercase",
          mb: 1.5,
        }}
      >
        Mariana Lero Invitaciones
      </Typography>

      <Typography
        sx={{
          fontFamily: "'DM Serif Display', serif",
          color: "#a41423",
          fontSize: "2.4rem",
          lineHeight: 1.05,
          mb: showPage ? 1 : 2,
        }}
      >
        Opciones de tipografía
      </Typography>

      {showPage && (
        <Typography
          sx={{
            fontFamily: "Montserrat, sans-serif",
            color: "#7d5f55",
            fontSize: ".8rem",
            fontWeight: 600,
            letterSpacing: ".16em",
            textTransform: "uppercase",
            mb: 2,
          }}
        >
          Parte {page} de {totalPages}
        </Typography>
      )}

      <Box
        sx={{
          width: 88,
          height: "1px",
          bgcolor: "rgba(200,173,120,.75)",
          mx: "auto",
        }}
      />
    </Box>
  );
};

export default FontPreviewExportHeader;
