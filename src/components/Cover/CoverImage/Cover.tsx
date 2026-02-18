
import { Typography, useMediaQuery } from '@mui/material';
import './Cover.css';
import { Fade } from 'react-awesome-reveal';
import { CoverProps } from '../CoverProps';
import { t } from 'i18next';
import { useEffect, useState } from 'react';

const Cover  = (props:CoverProps) => {
    console.log("Cover props:", props.overlay);
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const [loaded, setLoaded] = useState(false);
    const GENERIC_BLUR =
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBUQEA8PEA8PDw8PDw8PDw8PDw8PFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQFy0dHR0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAAEAAQMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAABAgAD/8QAFhABAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIQAxAAAAH6A//EABgQAQEBAQEAAAAAAAAAAAAAAAERAhIh/9oACAEBAAEFAk8d4o//xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAIAQMBAT8BSP/EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAECAQE/ASf/xAAbEAADAQEBAQEAAAAAAAAAAAABERAhMUFRcf/aAAgBAQAGPwKzK0kAq0p1k//EABsQAQEAAwEBAQAAAAAAAAAAAAERACExQVFh/9oACAEBAAE/IVFZfE2PqC5nSlQ2RZ5WqX//2gAMAwEAAgADAAAAEB//xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAIAQMBAT8QEf/EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAECAQE/ECL/xAAbEAEBAQEAAwEAAAAAAAAAAAABEQAhMVFhcf/aAAgBAQABPxDkXIpT+R9xKk4a5QZ2h+V5J7VZ//Z";

  const objectPositionY =
    props.bgPositionY && !isSmallScreen
      ? props.bgPositionY
      : "50%";
    useEffect(() => {
    if (!props.bgImage) return;
    
    const img = new Image();
    img.src = props.bgImage;

    img.onload = () => setLoaded(true);
    }, [props.bgImage]);
    return(
     
     <div className="cover-container">
      <img
        src={loaded ? props.bgImage : GENERIC_BLUR}
        alt="Cover"
        loading="eager"
        decoding="async"
       className={`cover-bg ${loaded ? "loaded" : ""}`}
        style={{
            objectPosition: `50% ${objectPositionY}`,
            filter: loaded ? "blur(0)" : "blur(24px)",
            opacity: loaded ? 1 : 0.85,
        }}
        {...({ fetchpriority: "high" } as any)}
        />

      {props.overlay && <div className="cover-overlay" />}
        <Fade direction="up" triggerOnce={true}>
            {props.ourWeddingStart && (
                <h1 className="holder" style={{marginTop:props.margin ? props.margin : "16px",}}><span>{props.subtitle ?  props.subtitle : t("ourWedding")}</span></h1>
            )}
    
        <Typography sx={{fontSize:props.fontSize ? props.fontSize : "60px"}} paddingX={1} textAlign={"center"} color='white' typography={"h2"} className={`${props.className}`}>
            {props.brideName}
        </Typography>
        <Typography sx={{fontSize:props.fontSize ? props.fontSize : "60px"}}  textAlign={"center"} color='white' typography={"h2"} className={`${props.className}`}>

            {props.symbolr} 

        </Typography>
         <Typography sx={{fontSize:props.fontSize ? props.fontSize : "60px"}} paddingX={1} textAlign={"center"} color='white' typography={"h2"} className={`${props.className}`}>
            {props.groomName}
        </Typography>
         {!props.ourWeddingStart && (
                <h1 className={ props.dateClass ? `${props.dateClass} holder` : "holder"}><span>{props.subtitle ?  props.subtitle : "Nuestra Boda"}</span></h1>
            )}
        <Typography textTransform={"uppercase"} marginTop={2} textAlign={"center"} color='white' typography={"h6"} className={props.dateClass ? props.dateClass : "pt-serif-caption-regular cover-date"} sx={{fontWeight:400}}>{props.weddingDate}</Typography>
        </Fade>
        </div>
    )
}
export default Cover;