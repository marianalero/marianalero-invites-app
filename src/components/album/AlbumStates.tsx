import { Box, Button, Typography } from "@mui/material";
import type { AlbumIdentity } from "./albumVisualIdentity";
import { onAccent } from "./albumVisualIdentity";

interface EmptyProps {
  identity: AlbumIdentity;
  onUpload: () => void;
}

export function AlbumEmptyState({ identity, onUpload }: EmptyProps) {
  return (
    <Box sx={{ textAlign: "center", px: 3, py: { xs: 4, md: 6 }, maxWidth: 460, mx: "auto" }}>
      <Typography className={identity.titleClass} sx={{ fontSize: { xs: "2rem", md: "2.4rem" }, lineHeight: 1.1, color: identity.text }}>
        Aún no hay momentos compartidos.
      </Typography>
      <Typography className={identity.bodyClass} sx={{ mt: 1.5, color: identity.text }}>
        ¡Sé el primero en subir uno!
      </Typography>
      <Button
        onClick={onUpload}
        variant="contained"
        className={identity.bodyClass}
        sx={{
          mt: 2.5,
          minHeight: 48,
          px: 3,
          borderRadius: "999px",
          textTransform: "none",
          boxShadow: "none",
          bgcolor: identity.accent,
          color: onAccent(identity.accent),
          "&:hover": { bgcolor: identity.accent, filter: "brightness(0.94)", boxShadow: "none" },
        }}
      >
        Subir fotos y videos
      </Button>
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
