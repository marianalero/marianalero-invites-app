import { useRef, useState, type DragEvent } from "react";
import { Box, Button, Typography } from "@mui/material";
import type { AlbumIdentity } from "./albumVisualIdentity";
import { onAccent } from "./albumVisualIdentity";

interface EmptyProps {
  identity: AlbumIdentity;
  onBrowse: () => void;
  onFiles: (files: FileList | null) => void;
}

export function AlbumEmptyState({ identity, onBrowse, onFiles }: EmptyProps) {
  const [over, setOver] = useState(false);
  const depth = useRef(0);

  const enter = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    depth.current += 1;
    setOver(true);
  };

  const leave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    depth.current = Math.max(0, depth.current - 1);
    if (depth.current === 0) setOver(false);
  };

  const drop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    depth.current = 0;
    setOver(false);
    onFiles(event.dataTransfer.files);
  };

  return (
    <Box sx={{ px: { xs: 2, sm: 3 }, pb: { xs: 6, md: 8 }, maxWidth: 720, mx: "auto" }}>
      <Box
        onClick={onBrowse}
        onDragEnter={enter}
        onDragOver={(event) => {
          event.preventDefault();
          event.dataTransfer.dropEffect = "copy";
        }}
        onDragLeave={leave}
        onDrop={drop}
        sx={{
          textAlign: "center",
          px: { xs: 2.5, sm: 5 },
          py: { xs: 4.5, sm: 6 },
          borderRadius: "28px",
          border: "1px dashed",
          borderColor: over ? identity.accent : `${identity.accent}88`,
          bgcolor: over ? `${identity.accent}14` : `${identity.accent}08`,
          cursor: "pointer",
          transition: "background-color .2s ease, border-color .2s ease",
        }}
      >
        <Typography className={identity.titleClass} sx={{ fontSize: { xs: "2.05rem", md: "2.45rem" }, lineHeight: 1.1, color: identity.text }}>
          Cada recuerdo cuenta
        </Typography>
        <Typography className={identity.bodyClass} sx={{ mt: 1.5, mx: "auto", maxWidth: 420, color: identity.text, opacity: 0.82, lineHeight: 1.5 }}>
          Este espacio está esperando las fotografías de un día inolvidable.
        </Typography>
        <Button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onBrowse();
          }}
          variant="contained"
          className={identity.bodyClass}
          sx={{
            mt: 3,
            minHeight: 48,
            px: 3,
            width: { xs: "100%", sm: "auto" },
            maxWidth: 360,
            borderRadius: "999px",
            textTransform: "none",
            boxShadow: "none",
            bgcolor: identity.accent,
            color: onAccent(identity.accent),
            "&:hover": { bgcolor: identity.accent, filter: "brightness(0.94)", boxShadow: "none" },
          }}
        >
          + Compartir mis fotos
        </Button>
        <Typography className={identity.bodyClass} sx={{ mt: 2, color: identity.text, opacity: 0.7, fontSize: "0.92rem" }}>
          ¡Sé el primero en compartir un recuerdo!
        </Typography>
      </Box>
    </Box>
  );
}

export function AlbumExpiredState({ identity }: { identity: AlbumIdentity }) {
  return (
    <Box sx={{ textAlign: "center", px: 3, py: { xs: 5, md: 7 }, maxWidth: 480, mx: "auto" }}>
      <Typography className={identity.titleClass} sx={{ fontSize: { xs: "2.1rem", md: "2.6rem" }, lineHeight: 1.1, color: identity.text }}>
        Este álbum ya no está disponible.
      </Typography>
    </Box>
  );
}

export function AlbumUnavailable({ identity }: { identity: AlbumIdentity }) {
  return (
    <Box sx={{ minHeight: "100vh", display: "grid", placeItems: "center", px: 3, bgcolor: identity.background, color: identity.text }}>
      <Typography className={identity.titleClass} sx={{ fontSize: { xs: "2.2rem", md: "2.8rem" }, textAlign: "center", lineHeight: 1.1 }}>
        Este álbum no está disponible.
      </Typography>
    </Box>
  );
}
