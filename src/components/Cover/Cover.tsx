
import { Typography } from '@mui/material';
import './Cover.css';
import { Fade } from 'react-awesome-reveal';

export interface CoverProps{
    brideName:string;
    symbolr:string;
    groomName:string;
    className?:string;
    bgImage?:string;
    weddingDate?:string;
}
const Cover  = (props:CoverProps) => {

    return(
     
     <div style={{backgroundImage:`url('${props.bgImage}')`}} className='cover-container'>
         <div className='overlay'></div>
        <Fade direction="up" triggerOnce={true}>
        <h1 className="holder" ><span>Nuestra boda</span></h1>
        <Typography marginTop={2} textAlign={"center"} color='white' typography={"h2"} className={`${props.className}`}>{props.brideName}<br/> {props.symbolr} <br/> {props.groomName}</Typography>
        <Typography textTransform={"uppercase"} marginTop={2} textAlign={"center"} color='white' typography={"h6"} className="pt-serif-caption-regular cover-date">{props.weddingDate}</Typography>
        </Fade>
        </div>
    )
}
export default Cover;