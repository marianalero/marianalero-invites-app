
import { Typography, useMediaQuery } from '@mui/material';
import './CoverSimple.css';
import { Fade } from 'react-awesome-reveal';
import { CoverProps } from '../CoverProps';
import { t } from 'i18next';
import { useEffect, useState } from 'react';

const CoverSimple  = (props:CoverProps) => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const [loaded, setLoaded] = useState(false);
  const GENERIC_BLUR =
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBUQEA8PEA8PDw8PDw8PDw8PDw8PFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQFy0dHR0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAAEAAQMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAABAgAD/8QAFhABAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIQAxAAAAH6A//EABgQAQEBAQEAAAAAAAAAAAAAAAERAhIh/9oACAEBAAEFAk8d4o//xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAIAQMBAT8BSP/EAAURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAECAQE/ASf/xAAbEAADAQEBAQEAAAAAAAAAAAABERAhMUFRcf/aAAgBAQAGPwKzK0kAq0p1k//EABsQAQEAAwEBAQAAAAAAAAAAAAERACExQVFh/9oACAEBAAE/IVFZfE2PqC5nSlQ2RZ5WqX//2gAMAwEAAgADAAAAEB//xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAIAQMBAT8QEf/EAAURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAECAQE/ECL/xAAbEAEBAQEAAwEAAAAAAAAAAAABEQAhMVFhcf/aAAgBAQABPxDkXIpT+R9xKk4a5QZ2h+V5J7VZ//Z";

  const bgImageToUse = isSmallScreen ? props.bgImage : props.bgImage2;

  useEffect(() => {
    if (!bgImageToUse) return;
    
    const img = new Image();
    img.src = bgImageToUse;

    img.onload = () => setLoaded(true);
  }, [bgImageToUse]);

    return(
     
     <div className='cover-container'>
      <img
        src={loaded ? bgImageToUse : GENERIC_BLUR}
        alt="Cover"
        loading="eager"
        decoding="async"
        className={`cover-bg ${loaded ? "loaded" : ""}`}
        style={{
            objectFit: props.bgSize ? "cover" : "cover",
            filter: loaded ? "blur(0)" : "blur(24px)",
            opacity: loaded ? 1 : 0.85,
            objectPosition: props.bgPosition ? props.bgPosition : "50% 50%",
            boxShadow: props.overlay ? " inset 0 0 0 1000px rgba(0, 0, 0, 0.2)" : "",
        }}
        {...({ fetchpriority: "high" } as any)}
        />
     {props.overlay && <div className="cover-overlay" />}
        <Fade direction="up" triggerOnce={true}>
          {
            !props.hideText && (
              <h1 className="holder" style={{color:props.textColor}}  ><span>{props.subtitle ?  props.subtitle : t("ourWedding")}</span></h1>
            )
          }
       
        <Typography 
          marginTop={2} 
          sx={{color:props.textColor, fontSize : props.fontSize ? props.fontSize : "3.5rem"}}  
          textAlign={"center"} 
          color='white' 
          typography={"h2"} 
          className={`${props.className}`}>
            {props.brideName}
        </Typography>
        <Typography 
          marginTop={2} 
          sx={{color:props.textColor, fontSize : props.fontSize ? props.fontSize : "3.5rem"}}  
          textAlign={"center"} 
          color='white' 
          typography={"h2"} 
          className={`${props.className}`}>
            {props.symbolr}
        </Typography>
        <Typography 
          marginTop={2} 
          sx={{color:props.textColor, fontSize : props.fontSize ? props.fontSize : "3.5rem"}}  
          textAlign={"center"} 
          color='white' 
          typography={"h2"} 
          className={`${props.className}`}>
          {props.groomName}
        </Typography>
        <Typography textTransform={"uppercase"} marginTop={2}  sx={{color:props.textColor}} textAlign={"center"} color='white' typography={"h6"} className="pt-serif-caption-regular cover-date">{props.weddingDate}</Typography>
        </Fade>
        </div>
    )
}
export default CoverSimple;