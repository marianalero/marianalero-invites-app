import { Box, Button, Typography } from "@mui/material";
import type { AlbumIdentity } from "./albumVisualIdentity";
import { onAccent } from "./albumVisualIdentity";
import { albumHeaderImage } from "./cloudinaryMedia";
import { formatAlbumDate } from "./albumFormat";

interface Props {
  identity: AlbumIdentity;
  names: string;
  quote?: string | null;
  headerImageUrl?: string | null;
  expiresAt?: string | null;
  expired: boolean;
  showUpload: boolean;
  uploadRef?: (node: HTMLButtonElement | null) => void;
  onUpload: () => void;
}

export default function AlbumHeader({
  identity,
  names,
  quote,
  headerImageUrl,
  expiresAt,
  expired,
  showUpload,
  uploadRef,
  onUpload,
}: Props) {
  const dateLabel = expiresAt ? formatAlbumDate(expiresAt) : null;
  const compact = names.length > 24;

  return (
    <Box
      component="header"
      sx={{
        px: { xs: 2.5, sm: 4 },
        pt: { xs: 3.5, md: 6 },
        pb: { xs: 2, md: 3 },
        textAlign: "center",
        maxWidth: 760,
        mx: "auto",
      }}
    >
      {headerImageUrl && (
        <Box
          component="img"
          src={albumHeaderImage(headerImageUrl)}
          alt={names}
          sx={{
            width: { xs: 148, sm: 196 },
            height: { xs: 190, sm: 248 },
            objectFit: "cover",
            borderRadius: "120px 120px 28px 28px",
            border: `1px solid ${identity.accent}33`,
            boxShadow: "0 18px 40px rgba(40, 30, 20, 0.12)",
            mb: { xs: 2, md: 2.5 },
          }}
        />
      )}
      <Typography
        component="h1"
        className={identity.titleClass}
        sx={{
          fontSize: compact
            ? { xs: "2.35rem", sm: "3.1rem", md: "3.6rem" }
            : { xs: "3.15rem", sm: "4rem", md: "4.6rem" },
          lineHeight: 1.02,
          fontWeight: 400,
          color: identity.text,
          overflowWrap: "anywhere",
        }}
      >
        {names}
      </Typography>
      {quote && (
        <Typography
          className={identity.bodyClass}
          sx={{
            mt: 1.5,
            color: identity.text,
            opacity: 0.82,
            fontSize: { xs: "0.95rem", md: "1.05rem" },
            maxWidth: 460,
            mx: "auto",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {quote}
        </Typography>
      )}
      {!expired && (
        <Typography
          className={identity.bodyClass}
          sx={{ mt: quote ? 1.25 : 1.75, color: identity.text, fontSize: { xs: "1.02rem", md: "1.12rem" } }}
        >
          Comparte tus momentos
          <Box component="span" sx={{ display: "block" }}>
            con nosotros
          </Box>
        </Typography>
      )}
      <Typography
        className={identity.bodyClass}
        sx={{ mt: 2.25, letterSpacing: "0.08em", textTransform: "uppercase", fontSize: "0.72rem", opacity: 0.72 }}
      >
        {expired ? "Estuvo disponible hasta" : dateLabel ? "Álbum disponible hasta" : "Álbum disponible durante 1 mes"}
      </Typography>
      {dateLabel && (
        <Typography className={identity.titleClass} sx={{ fontSize: { xs: "1.7rem", md: "2rem" }, lineHeight: 1.1, mt: 0.4 }}>
          {dateLabel}
        </Typography>
      )}
      {showUpload && (
        <Button
          ref={uploadRef}
          onClick={onUpload}
          variant="contained"
          sx={{
            mt: 2.5,
            minHeight: 48,
            px: 3,
            width: { xs: "100%", sm: "auto" },
            maxWidth: 360,
            borderRadius: "999px",
            textTransform: "none",
            boxShadow: "none",
            bgcolor: identity.accent,
            color: onAccent(identity.accent),
            fontWeight: 600,
            "&:hover": { bgcolor: identity.accent, filter: "brightness(0.94)", boxShadow: "none" },
          }}
          className={identity.bodyClass}
        >
          Subir fotos y videos
        </Button>
      )}
    </Box>
  );
}
