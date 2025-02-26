import { ImageList, ImageListItem } from "@mui/material";

interface GalleryProps {
    photos:string[]
}
const Gallery = (props:GalleryProps)=> {

    return ( 
    <ImageList variant="masonry" cols={2} gap={8}>
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