import { ImageList, ImageListItem, useMediaQuery } from "@mui/material";

interface GalleryProps {
    photos:string[]
}
const Gallery = (props:GalleryProps)=> {
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    return ( 
    <ImageList variant="masonry" cols={isSmallScreen ? 1: 2} gap={8} sx={{paddingX:2}}>
    {props.photos.map((item) => (
        <ImageListItem key={item}>
              
        <img
            srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item}?w=248&fit=crop&auto=format`}
            alt={item}
            loading="lazy"
        />
    
    </ImageListItem>
  ))}
    </ImageList>
    )
}

export default Gallery;