
import { Typography, useMediaQuery } from '@mui/material';
import './CoverSimple.css';
import { Fade } from 'react-awesome-reveal';
import { CoverProps } from '../CoverProps';

const CoverSimple  = (props:CoverProps) => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');

    return(
     
     <div style={{backgroundImage:`url('${isSmallScreen ? props.bgImage : props.bgImage2}')`,backgroundSize: props.bgSize? props.bgSize : "cover"}} className='cover-container'>
    
        <Fade direction="up" triggerOnce={true}>
          {
            !props.hideText && (
              <h1 className="holder" style={{color:props.textColor}}  ><span>Nuestra boda</span></h1>
            )
          }
       
        <Typography marginTop={2} sx={{color:props.textColor}}  textAlign={"center"} color='white' typography={"h2"} className={`${props.className}`}>{props.brideName}<br/> {props.symbolr} <br/> {props.groomName}</Typography>
        <Typography textTransform={"uppercase"} marginTop={2}  sx={{color:props.textColor}} textAlign={"center"} color='white' typography={"h6"} className="pt-serif-caption-regular cover-date">{props.weddingDate}</Typography>
        </Fade>
        </div>
    )
}
export default CoverSimple;