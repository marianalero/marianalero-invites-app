import { forwardRef } from "react";
import { Box } from "@mui/material";
import type { InvitationFont } from "../../../constants/fonts";
import { EXPORT_PADDING_PX, EXPORT_WIDTH } from "../constants";
import FontPreviewExportFooter from "./FontPreviewExportFooter";
import FontPreviewExportHeader from "./FontPreviewExportHeader";
import FontPreviewGrid from "./FontPreviewGrid";

type FontPreviewExportCanvasProps = {
  fonts: InvitationFont[];
  previewText: string;
  startIndex: number;
  page: number;
  totalPages: number;
};

const FontPreviewExportCanvas = forwardRef<
  HTMLDivElement,
  FontPreviewExportCanvasProps
>(({ fonts, previewText, startIndex, page, totalPages }, ref) => {
  return (
    <Box
      ref={ref}
      className="font-preview-export-canvas"
      sx={{
        boxSizing: "border-box",
        width: EXPORT_WIDTH,
        bgcolor: "#fff",
        p: `${EXPORT_PADDING_PX}px`,
        "& .font-preview-sample": {
          fontSize: "56px !important",
          minHeight: "92px !important",
        },
      }}
    >
      <FontPreviewExportHeader page={page} totalPages={totalPages} />
      <FontPreviewGrid
        fonts={fonts}
        previewText={previewText}
        startIndex={startIndex}
        columns={2}
      />
      <FontPreviewExportFooter page={page} totalPages={totalPages} />
    </Box>
  );
});

FontPreviewExportCanvas.displayName = "FontPreviewExportCanvas";

export default FontPreviewExportCanvas;
