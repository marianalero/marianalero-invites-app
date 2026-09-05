import { type RefObject, useCallback, useState } from "react";
import { flushSync } from "react-dom";
import { toPng } from "html-to-image";
import { EXPORT_PIXEL_RATIO } from "../constants";

const waitForLayout = (): Promise<void> =>
  new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => resolve());
    });
  });

const delay = (ms: number): Promise<void> =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

const slugify = (value: string): string =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "tipografias";

const triggerDownload = (fileName: string, dataUrl: string): void => {
  const link = document.createElement("a");
  link.download = fileName;
  link.href = dataUrl;
  link.click();
};

type DownloadWhatsAppImagesOptions = {
  previewName: string;
  pageCount: number;
  renderPage: (pageIndex: number) => void;
};

type UseFontPreviewExportResult = {
  isExporting: boolean;
  downloadWhatsAppImages: (
    options: DownloadWhatsAppImagesOptions,
  ) => Promise<number>;
};

export const useFontPreviewExport = (
  containerRef: RefObject<HTMLElement | null>,
): UseFontPreviewExportResult => {
  const [isExporting, setIsExporting] = useState(false);

  const downloadWhatsAppImages = useCallback(
    async ({
      previewName,
      pageCount,
      renderPage,
    }: DownloadWhatsAppImagesOptions): Promise<number> => {
      if (pageCount < 1) {
        throw new Error("No hay tipografías para exportar.");
      }

      const slug = slugify(previewName);
      const files: { fileName: string; dataUrl: string }[] = [];

      try {
        flushSync(() => {
          setIsExporting(true);
          renderPage(0);
        });

        await document.fonts.ready;
        await waitForLayout();

        for (let pageIndex = 0; pageIndex < pageCount; pageIndex += 1) {
          flushSync(() => {
            renderPage(pageIndex);
          });
          await waitForLayout();
          await delay(120);

          const node = containerRef.current;
          if (!node) {
            throw new Error("No se encontró el contenedor de tipografías.");
          }

          if (node.scrollHeight < 80) {
            throw new Error("El lienzo de exportación no se renderizó.");
          }

          const dataUrl = await toPng(node, {
            cacheBust: true,
            pixelRatio: EXPORT_PIXEL_RATIO,
            backgroundColor: "#f8f4ec",
            style: {
              transform: "none",
              left: "0",
              top: "0",
              position: "static",
              opacity: "1",
            },
          });

          const pageNumber = String(pageIndex + 1).padStart(2, "0");
          const total = String(pageCount).padStart(2, "0");
          files.push({
            fileName: `tipografias-${slug}-${pageNumber}-de-${total}.png`,
            dataUrl,
          });
        }

        for (const file of files) {
          triggerDownload(file.fileName, file.dataUrl);
          await delay(250);
        }

        return files.length;
      } finally {
        setIsExporting(false);
      }
    },
    [containerRef],
  );

  return { isExporting, downloadWhatsAppImages };
};
