
import { Typography } from '@mui/material';
import './Cover.css';
import { Fade } from 'react-awesome-reveal';
import { CoverProps } from '../CoverProps';

const Cover  = (props:CoverProps) => {

    return(
     
     <div style={{backgroundImage:`url('${props.bgImage}')`,backgroundPositionX: props.bgPosition ? props.bgPosition : "50%" , boxShadow: props.overlay ? " inset 0 0 0 1000px rgba(0, 0, 0, 0.2)" :""}} className='cover-container'>
        <Fade direction="up" triggerOnce={true}>
            {props.ourWeddingStart && (
                <h1 className="holder" style={{marginTop:props.margin ? props.margin : "16px",}}><span>{props.subtitle ?  props.subtitle : "Nuestra Boda"}</span></h1>
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
                <h1 className="holder" ><span>{props.subtitle ?  props.subtitle : "Nuestra Boda"}</span></h1>
            )}
        <Typography textTransform={"uppercase"} marginTop={2} textAlign={"center"} color='white' typography={"h6"} className="pt-serif-caption-regular cover-date">{props.weddingDate}</Typography>
        </Fade>
        </div>
    )
}
export default Cover;