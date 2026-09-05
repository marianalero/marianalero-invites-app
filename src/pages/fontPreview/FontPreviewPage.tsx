import { useEffect, useMemo, useRef, useState } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import HeaderHome from "../../layouts/headerHome";
import CustomButton from "../../components/CustomButton/CustomButton";
import { fonts } from "../../constants/fonts";
import { useSnackbar } from "../../context/snackbarContext";
import FontCategoryFilter from "./components/FontCategoryFilter";
import FontPreviewExportCanvas from "./components/FontPreviewExportCanvas";
import FontPreviewExportFooter from "./components/FontPreviewExportFooter";
import FontPreviewExportHeader from "./components/FontPreviewExportHeader";
import FontPreviewForm from "./components/FontPreviewForm";
import FontPreviewGrid from "./components/FontPreviewGrid";
import { FONTS_PER_WHATSAPP_IMAGE, chunkItems } from "./constants";
import { useFontPreviewExport } from "./hooks/useFontPreviewExport";
import type { FontFilterValue } from "./types";

const DEFAULT_NAME = "Mariana & Héctor";

const FontPreviewPage = () => {
  const { showSnackbar } = useSnackbar();
  const exportRef = useRef<HTMLDivElement>(null);
  const [name, setName] = useState(DEFAULT_NAME);
  const [previewName, setPreviewName] = useState(DEFAULT_NAME);
  const [category, setCategory] = useState<FontFilterValue>("Todas");
  const [exportPageIndex, setExportPageIndex] = useState(0);
  const { isExporting, downloadWhatsAppImages } =
    useFontPreviewExport(exportRef);

  const previewText = previewName.trim() || DEFAULT_NAME;

  const visibleFonts = useMemo(
    () =>
      category === "Todas"
        ? fonts
        : fonts.filter((font) => font.category === category),
    [category],
  );

  const exportPages = useMemo(
    () => chunkItems(visibleFonts, FONTS_PER_WHATSAPP_IMAGE),
    [visibleFonts],
  );

  const exportFonts = exportPages[exportPageIndex] ?? [];
  const exportStartIndex = exportPageIndex * FONTS_PER_WHATSAPP_IMAGE;

  useEffect(() => {
    document.title = "Selector de Tipografías | Mariana Lero Invitaciones";
  }, []);

  useEffect(() => {
    setExportPageIndex(0);
  }, [category]);

  const handleNameChange = (value: string) => {
    setName(value);
    setPreviewName(value);
  };

  const handleSubmit = () => {
    setPreviewName(name);
  };

  const handleDownload = async () => {
    try {
      const count = await downloadWhatsAppImages({
        previewName: previewText,
        pageCount: exportPages.length,
        renderPage: setExportPageIndex,
      });
      showSnackbar(
        count === 1
          ? "Imagen descargada"
          : `Se descargaron ${count} imágenes para WhatsApp`,
        "success",
      );
    } catch {
      showSnackbar("No se pudieron generar las imágenes. Intenta de nuevo.", "error");
    }
  };

  return (
    <>
      <HeaderHome />
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "#f8f4ec",
          background:
            "linear-gradient(180deg, #f8f4ec 0%, #f2eadd 55%, #f8f4ec 100%)",
          py: { xs: 7, md: 11 },
          px: { xs: 2, md: 4 },
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", maxWidth: 720, mx: "auto", mb: 5 }}>
            <Typography
              sx={{
                fontFamily: "'DM Serif Display', serif",
                color: "#a41423",
                fontSize: { xs: "2.4rem", md: "4rem" },
                lineHeight: 0.95,
                mb: 2,
              }}
            >
              Selector de Tipografías
            </Typography>
            <Typography
              sx={{
                fontFamily: "Montserrat, sans-serif",
                color: "#7d5f55",
                fontSize: { xs: "0.98rem", md: "1.08rem" },
                lineHeight: 1.8,
              }}
            >
              Escribe el nombre que deseas visualizar.
            </Typography>
          </Box>

          <Stack spacing={2.5} sx={{ maxWidth: 820, mx: "auto", mb: 5 }}>
            <FontPreviewForm
              name={name}
              onNameChange={handleNameChange}
              onSubmit={handleSubmit}
            />
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              alignItems={{ xs: "stretch", sm: "center" }}
            >
              <Box sx={{ flex: 1, minWidth: { sm: 240 } }}>
                <FontCategoryFilter value={category} onChange={setCategory} />
              </Box>
              <CustomButton
                bgColor="#fff"
                color="#a41423"
                borderColor="#a41423"
                label={isExporting ? "Generando..." : "Descargar para WhatsApp"}
                onClick={() => {
                  void handleDownload();
                }}
                width="240px"
              />
            </Stack>
          </Stack>

          <Box
            sx={{
              bgcolor: "#f8f4ec",
              boxSizing: "border-box",
              width: "100%",
              maxWidth: 1080,
              mx: "auto",
              p: { xs: 3, md: 6 },
              containerType: "inline-size",
              containerName: "font-preview",
            }}
          >
            <FontPreviewExportHeader />
            <FontPreviewGrid fonts={visibleFonts} previewText={previewText} />
            <FontPreviewExportFooter />
          </Box>
        </Container>
      </Box>

      <Box
        aria-hidden
        sx={{
          position: "fixed",
          top: 0,
          left: isExporting ? 0 : -2000,
          zIndex: isExporting ? 14000 : -1,
          width: 1080,
          pointerEvents: "none",
        }}
      >
        <FontPreviewExportCanvas
          ref={exportRef}
          fonts={exportFonts}
          previewText={previewText}
          startIndex={exportStartIndex}
          page={exportPageIndex + 1}
          totalPages={exportPages.length || 1}
        />
      </Box>
    </>
  );
};

export default FontPreviewPage;
