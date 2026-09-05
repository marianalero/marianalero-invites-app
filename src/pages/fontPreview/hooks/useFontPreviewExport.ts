import { type RefObject, useCallback, useState } from "react";
import { toPng } from "html-to-image";

const EXPORT_WIDTH = 1080;
const EXPORT_PADDING = "48px";
const PIXEL_RATIO = 2;

const waitForLayout = (): Promise<void> =>
  new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => resolve());
    });
  });

const slugify = (value: string): string =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "tipografias";

type UseFontPreviewExportResult = {
  isExporting: boolean;
  downloadImage: (previewName: string) => Promise<void>;
};

export const useFontPreviewExport = (
  containerRef: RefObject<HTMLElement | null>,
): UseFontPreviewExportResult => {
  const [isExporting, setIsExporting] = useState(false);

  const downloadImage = useCallback(
    async (previewName: string) => {
      const node = containerRef.current;
      if (!node) {
        throw new Error("No se encontró el contenedor de tipografías.");
      }

      setIsExporting(true);

      const previous = {
        width: node.style.width,
        maxWidth: node.style.maxWidth,
        padding: node.style.padding,
        boxSizing: node.style.boxSizing,
        margin: node.style.margin,
      };

      try {
        await document.fonts.ready;

        node.style.boxSizing = "border-box";
        node.style.width = `${EXPORT_WIDTH}px`;
        node.style.maxWidth = `${EXPORT_WIDTH}px`;
        node.style.padding = EXPORT_PADDING;
        node.style.margin = "0";
        node.classList.add("is-exporting-fonts");

        await waitForLayout();

        const dataUrl = await toPng(node, {
          cacheBust: true,
          pixelRatio: PIXEL_RATIO,
          backgroundColor: "#f8f4ec",
          width: node.scrollWidth,
          height: node.scrollHeight,
        });

        const link = document.createElement("a");
        link.download = `tipografias-${slugify(previewName)}.png`;
        link.href = dataUrl;
        link.click();
      } finally {
        node.classList.remove("is-exporting-fonts");
        node.style.width = previous.width;
        node.style.maxWidth = previous.maxWidth;
        node.style.padding = previous.padding;
        node.style.boxSizing = previous.boxSizing;
        node.style.margin = previous.margin;
        setIsExporting(false);
      }
    },
    [containerRef],
  );

  return { isExporting, downloadImage };
};
