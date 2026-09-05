import { Box } from "@mui/material";
import FontCard from "./FontCard";
import type { FontPreviewGridProps } from "../types";

const FontPreviewGrid = ({
  fonts,
  previewText,
  startIndex = 0,
  columns,
}: FontPreviewGridProps) => {
  return (
    <Box
      className="font-preview-grid"
      sx={{
        display: "grid",
        gridTemplateColumns:
          columns === 2
            ? "1fr 1fr"
            : columns === 1
              ? "1fr"
              : "1fr",
        gap: 2.5,
        ...(columns
          ? {}
          : {
              "@container font-preview (min-width: 640px)": {
                gridTemplateColumns: "1fr 1fr",
                gap: 3.5,
              },
            }),
      }}
    >
      {fonts.map((font, index) => (
        <FontCard
          key={font.id}
          index={startIndex + index + 1}
          font={font}
          previewText={previewText}
        />
      ))}
    </Box>
  );
};

export default FontPreviewGrid;
