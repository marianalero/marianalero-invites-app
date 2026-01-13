import { ImageList, ImageListItem, useMediaQuery } from "@mui/material";
import "./Gallery.css";
import GalleryImage from "./GalleryImage";

interface GalleryProps {
  photos: string[];
}

const Gallery = ({ photos }: GalleryProps) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const imageWidth = isSmallScreen ? 360 : 600;

  return (
    <ImageList
      variant="masonry"
      cols={isSmallScreen ? 1 : 2}
      gap={8}
      sx={{ px: 2 }}
    >
      {photos.map((src, index) => (
        <ImageListItem key={src}>
          <GalleryImage
            src={src}
            width={imageWidth}
            priority={index === 0}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default Gallery;
