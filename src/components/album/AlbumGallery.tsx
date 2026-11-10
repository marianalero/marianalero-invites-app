import { Box } from "@mui/material";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import type { PublicAlbumItem } from "../../models/album";
import type { AlbumIdentity } from "./albumVisualIdentity";

interface Props {
  items: PublicAlbumItem[];
  identity: AlbumIdentity;
  onOpen: (index: number) => void;
}

export default function AlbumGallery({ items, identity, onOpen }: Props) {
  return (
    <Box
      sx={{
        maxWidth: 1180,
        mx: "auto",
        px: { xs: 1.5, sm: 3 },
        pb: { xs: 12, md: 8 },
        columnCount: { xs: 2, md: 3, lg: 4 },
        columnGap: { xs: "10px", md: "14px" },
      }}
    >
      {items.map((item, index) => {
        const ratio = item.width && item.height ? `${item.width} / ${item.height}` : item.resourceType === "video" ? "3 / 4" : undefined;
        return (
          <Box key={item.id} sx={{ breakInside: "avoid", mb: { xs: "10px", md: "14px" } }}>
            <Box
              component="button"
              type="button"
              onClick={() => onOpen(index)}
              aria-label={item.resourceType === "video" ? "Abrir video" : "Abrir foto"}
              sx={{
                position: "relative",
                display: "block",
                width: "100%",
                p: 0,
                border: 0,
                borderRadius: "18px",
                overflow: "hidden",
                cursor: "pointer",
                bgcolor: `${identity.accent}14`,
                boxShadow: "0 10px 24px rgba(40, 30, 20, 0.08)",
              }}
            >
              {item.resourceType === "video" ? (
                <Box sx={{ width: "100%", aspectRatio: ratio ?? "3 / 4", bgcolor: `${identity.text}14` }} />
              ) : (
                <Box
                  component="img"
                  src={item.secureUrl}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  sx={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    aspectRatio: ratio,
                    objectFit: "cover",
                    backgroundColor: `${identity.text}10`,
                  }}
                />
              )}
              {item.resourceType === "video" && (
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    display: "grid",
                    placeItems: "center",
                    background: "linear-gradient(to top, rgba(20,16,14,.28), rgba(20,16,14,.05))",
                  }}
                >
                  <Box
                    sx={{
                      width: 42,
                      height: 42,
                      borderRadius: "50%",
                      display: "grid",
                      placeItems: "center",
                      bgcolor: "rgba(255,255,255,.88)",
                      color: identity.text,
                    }}
                  >
                    <PlayArrowRoundedIcon />
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
