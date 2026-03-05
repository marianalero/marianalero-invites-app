import React from "react";
import { Box, Container } from "@mui/material";

interface MiniGalleryProps {
  images: string[]; // exactamente 3 imágenes
  backgroundColor?: string;
  maxWidth?: "lg" | "md" | "xl" | false;
  spacing?: number;
  gap?: number;
  imageHeightDesktop?: number;
  imageHeightMobile?: number;
  enableAnimation?: boolean;
}

const MiniGallery: React.FC<MiniGalleryProps> = ({
  images,
  backgroundColor = "#F7F3EB",
  maxWidth = "lg",
  spacing = 14,
  gap = 4,
  imageHeightDesktop = 560,
  imageHeightMobile = 260,
  enableAnimation = true,
}) => {
  if (!images || images.length !== 3) return null;

  return (
    <Box sx={{ backgroundColor, py: spacing }}>
      <Container maxWidth={maxWidth}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)", // 👈 siempre 3 columnas
            gap: { xs: 2, md: gap },
          }}
        >
          {images.map((img, index) => (
            <Box
              key={index}
              sx={{
                height: {
                  xs: imageHeightMobile,
                  md: imageHeightDesktop,
                },
                overflow: "hidden",
                position: "relative",
                borderRadius: 0, // editorial limpio
                transform: enableAnimation ? "translateY(30px)" : "none",
                opacity: enableAnimation ? 0 : 1,
                animation: enableAnimation
                  ? `fadeUp 0.9s ease forwards ${index * 0.15}s`
                  : "none",
                "@keyframes fadeUp": {
                  to: {
                    transform: "translateY(0)",
                    opacity: 1,
                  },
                },
              }}
            >
              <Box
                component="img"
                src={img}
                alt={`gallery-${index}`}
                loading="lazy"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.8s ease",
                  "&:hover": {
                    transform: "scale(1.03)",
                  },
                }}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default MiniGallery;