import { Box, Typography } from "@mui/material";

interface GalleryProps {
  images: string[];
  bgMain: string;
  titleColor:string;
  bodyColor:string;
  title:string;
  subtitle:string;
  mainTypo:string;
  bodyTypo:string;
}

const Gallery = ({ images,bgMain,titleColor,bodyColor,title,subtitle,mainTypo,bodyTypo }: GalleryProps) => {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: bgMain,
        px: { xs: 2.5, sm: 4 },
        py: 8,
        overflow: "hidden",
      }}
    >
      {/* HEADER */}
      <Box
        sx={{
          textAlign: "center",
          mb: 5,
        }}
      >
        <Typography
          component="h2"
          className={mainTypo}
          sx={{
            
            fontSize:"2rem",
            fontWeight: 400,
            lineHeight: 1,
            color: titleColor,
          }}
        >
          {title}
        </Typography>

        <Typography
        className={bodyTypo}
          sx={{
            mt: 1.5,
           
            color: bodyColor,
          }}
        >
         {subtitle}
        </Typography>
      </Box>

      {/* GALERÍA */}
      <Box
        sx={{
          maxWidth: 430,
          mx: "auto",

          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 1.5,
          alignItems: "start",
        }}
      >
        {/* FOTO 1 */}
        <GalleryImage
          src={images[0]}
          sx={{
            mt: 0,
          }}
        />

        {/* FOTO 2 */}
        <GalleryImage
          src={images[1]}
          sx={{
            mt: 4,
          }}
        />

        {/* FOTO 3 — PROTAGONISTA */}
        {/* <GalleryImage
          src={images[2]}
          sx={{
            gridColumn: "1 / 3",
            width: "68%",
            mx: "auto",
            mt: 1,
          }}
        /> */}

        {/* FOTO 4 */}
        <GalleryImage
          src={images[3]}
          sx={{
            mt: 2,
          }}
        />

        {/* FOTO 5 */}
        <GalleryImage
          src={images[2]}
          sx={{
            mt: -2,
          }}
        />
      </Box>
    </Box>
  );
};

interface GalleryImageProps {
  src?: string;
  sx?: object;
}

const GalleryImage = ({ src, sx }: GalleryImageProps) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        aspectRatio: "3 / 4",
        overflow: "hidden",
        borderRadius: "18px",
        backgroundColor: "#E5DED1",
        ...sx,
      }}
    >
      {src && (
        <Box
          component="img"
          src={src}
          alt=""
          sx={{
            width: "100%",
            height: "100%",
            display: "block",
            objectFit: "cover",
          }}
        />
      )}
    </Box>
  );
};

export default Gallery;