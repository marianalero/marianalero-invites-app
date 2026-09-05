import { Typography } from "@mui/material";

const FontPreviewExportFooter = () => {
  return (
    <Typography
      sx={{
        mt: { xs: 4, md: 5 },
        textAlign: "center",
        fontFamily: "'DM Serif Display', serif",
        color: "#7d5f55",
        fontSize: { xs: "1rem", md: "1.15rem" },
        fontStyle: "italic",
      }}
    >
      Elige el número de la tipografía que más te guste.
    </Typography>
  );
};

export default FontPreviewExportFooter;
