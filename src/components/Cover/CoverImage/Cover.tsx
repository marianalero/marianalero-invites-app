
import { Typography } from '@mui/material';
import './Cover.css';
import { Fade } from 'react-awesome-reveal';
import { CoverProps } from '../CoverProps';

const Cover  = (props:CoverProps) => {

    return(
     
     <div style={{backgroundImage:`url('${props.bgImage}')`,backgroundPositionX: props.bgPosition ? props.bgPosition : "50%" }} className='cover-container'>
        <Fade direction="up" triggerOnce={true}>
            {props.ourWeddingStart && (
                <h1 className="holder" style={{marginTop:props.margin ? props.margin : "16px",}}><span>Nuestra boda</span></h1>
            )}
    
        <Typography  textAlign={"center"} color='white' typography={"h2"} className={`${props.className}`}>{props.brideName}<br/> {props.symbolr} <br/> {props.groomName}</Typography>
         {!props.ourWeddingStart && (
                <h1 className="holder" ><span>Nuestra boda</span></h1>
            )}
        <Typography textTransform={"uppercase"} marginTop={2} textAlign={"center"} color='white' typography={"h6"} className="pt-serif-caption-regular cover-date">{props.weddingDate}</Typography>
        </Fade>
        </div>
    )
}
export default Cover;