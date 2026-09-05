import { Box, Typography } from "@mui/material";

const FontPreviewExportHeader = () => {
  return (
    <Box sx={{ textAlign: "center", mb: { xs: 4, md: 5 } }}>
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
          fontSize: { xs: "2.1rem", md: "2.8rem" },
          lineHeight: 1.05,
          mb: 2,
        }}
      >
        Opciones de tipografía
      </Typography>

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
