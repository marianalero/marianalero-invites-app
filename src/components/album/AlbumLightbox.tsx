import { useEffect } from "react";
import { Box, Dialog, IconButton, Typography } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import type { PublicAlbumItem } from "../../models/album";
import { albumLargeImage } from "./cloudinaryMedia";

interface Props {
  items: PublicAlbumItem[];
  index: number | null;
  onClose: () => void;
  onChange: (index: number) => void;
}

export default function AlbumLightbox({ items, index, onClose, onChange }: Props) {
  const item = index == null ? null : items[index];
  const hasMany = items.length > 1;

  useEffect(() => {
    if (index == null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight" && hasMany) onChange((index + 1) % items.length);
      if (event.key === "ArrowLeft" && hasMany) onChange((index - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [hasMany, index, items.length, onChange, onClose]);

  return (
    <Dialog
      fullScreen
      open={item != null}
      onClose={onClose}
      slotProps={{ paper: { sx: { bgcolor: "rgba(14, 11, 10, 0.96)", color: "#fff" } } }}
    >
      {item && index != null && (
        <Box sx={{ minHeight: "100%", display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1.5 }}>
            <IconButton onClick={onClose} aria-label="Cerrar" sx={{ color: "#fff", width: 48, height: 48 }}>
              <CloseRoundedIcon />
            </IconButton>
          </Box>
          <Box sx={{ flex: 1, display: "grid", placeItems: "center", px: { xs: 2, md: 8 }, minHeight: 0 }}>
            {item.resourceType === "video" ? (
              <Box
                key={item.id}
                component="video"
                src={item.secureUrl}
                controls
                playsInline
                sx={{ width: "min(100%, 960px)", maxHeight: "72vh", borderRadius: "16px", bgcolor: "#000" }}
              />
            ) : (
              <Box
                component="img"
                src={albumLargeImage(item.secureUrl)}
                alt=""
                sx={{ width: "auto", maxWidth: "100%", maxHeight: "72vh", objectFit: "contain", borderRadius: "12px" }}
              />
            )}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2, pb: 3, pt: 1 }}>
            {hasMany && (
              <IconButton
                aria-label="Anterior"
                onClick={() => onChange((index - 1 + items.length) % items.length)}
                sx={{ color: "#fff", width: 52, height: 52, bgcolor: "rgba(255,255,255,.08)" }}
              >
                <ChevronLeftRoundedIcon />
              </IconButton>
            )}
            <Typography sx={{ fontFamily: "Manrope, sans-serif", minWidth: 72, textAlign: "center" }}>
              {index + 1} / {items.length}
            </Typography>
            {hasMany && (
              <IconButton
                aria-label="Siguiente"
                onClick={() => onChange((index + 1) % items.length)}
                sx={{ color: "#fff", width: 52, height: 52, bgcolor: "rgba(255,255,255,.08)" }}
              >
                <ChevronRightRoundedIcon />
              </IconButton>
            )}
          </Box>
        </Box>
      )}
    </Dialog>
  );
}
