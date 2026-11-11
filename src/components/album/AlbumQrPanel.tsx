import { useEffect, useRef, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { burgundyButtonSx } from "../panel/Invitation/features/FeaturePageFrame";
import { downloadAlbumQr, paintAlbumQr } from "./albumQrImage";
import { useSnackbar } from "../../context/snackbarContext";

interface Props {
  albumUrl: string;
  slug: string;
}

export default function AlbumQrPanel({ albumUrl, slug }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { showSnackbar } = useSnackbar();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !albumUrl) {
      setReady(false);
      return;
    }
    paintAlbumQr(canvas, albumUrl);
    setReady(true);
  }, [albumUrl]);

  const copyUrl = async () => {
    try {
      await navigator.clipboard.writeText(albumUrl);
      showSnackbar("Enlace copiado.", "success");
    } catch {
      showSnackbar("No se pudo copiar el enlace.", "error");
    }
  };

  return (
    <Box
      sx={{
        mb: 3,
        p: { xs: 2, md: 2.5 },
        borderRadius: "22px",
        bgcolor: "#fff",
        border: "1px solid rgba(200,173,120,.28)",
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: 2.5,
        alignItems: "center",
      }}
    >
      <Box sx={{ width: 180, height: 180, flex: "0 0 auto", bgcolor: "#fff" }}>
        <canvas
          ref={canvasRef}
          aria-label="Código QR del álbum"
          style={{ width: "100%", height: "100%", display: "block" }}
        />
      </Box>
      <Box sx={{ minWidth: 0, textAlign: { xs: "center", sm: "left" } }}>
        <Typography sx={{ fontFamily: "'DM Serif Display', serif", color: "#a41423", fontSize: "1.45rem", lineHeight: 1.1 }}>
          Código QR del álbum
        </Typography>
        <Typography sx={{ mt: 0.75, fontFamily: "Montserrat, sans-serif", color: "#3a2a25" }}>
          Acceso directo al álbum
        </Typography>
        <Typography sx={{ mt: 0.5, fontFamily: "Montserrat, sans-serif", color: "#7d5f55", fontSize: ".85rem", wordBreak: "break-all" }}>
          {albumUrl}
        </Typography>
        <Box sx={{ mt: 2, display: "flex", flexWrap: "wrap", gap: 1, justifyContent: { xs: "center", sm: "flex-start" } }}>
          <Button
            sx={burgundyButtonSx}
            disabled={!ready}
            onClick={() => {
              if (canvasRef.current) downloadAlbumQr(canvasRef.current, slug);
            }}
          >
            Descargar QR
          </Button>
          <Button
            variant="outlined"
            onClick={copyUrl}
            sx={{
              borderRadius: "999px",
              px: 3,
              textTransform: "none",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 600,
              borderColor: "rgba(164,20,35,.35)",
              color: "#a41423",
            }}
          >
            Copiar enlace
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
