import { Typography } from "@mui/material";

type FontPreviewExportFooterProps = {
  page?: number;
  totalPages?: number;
};

const FontPreviewExportFooter = ({
  page,
  totalPages,
}: FontPreviewExportFooterProps) => {
  const showPage =
    typeof page === "number" && typeof totalPages === "number" && totalPages > 1;

  return (
    <>
      <Typography
        sx={{
          mt: 4,
          textAlign: "center",
          fontFamily: "'DM Serif Display', serif",
          color: "#7d5f55",
          fontSize: "1.1rem",
          fontStyle: "italic",
        }}
      >
        Elige el número de la tipografía que más te guste.
      </Typography>
      {showPage && (
        <Typography
          sx={{
            mt: 1,
            textAlign: "center",
            fontFamily: "Montserrat, sans-serif",
            color: "#c8ad78",
            fontSize: ".75rem",
            fontWeight: 600,
            letterSpacing: ".12em",
            textTransform: "uppercase",
          }}
        >
          Imagen {page} de {totalPages}
        </Typography>
      )}
    </>
  );
};

export default FontPreviewExportFooter;
