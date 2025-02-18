
import { Typography } from '@mui/material';
import './Cover.css';
import { Fade } from 'react-awesome-reveal';
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";

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
        <ParallaxProvider>
        <ParallaxBanner speed={-10}
        layers={[
            {
              image: props.bgImage,
              translateY: [0, 50],
              shouldAlwaysCompleteAnimation: true,
              expanded: false,
            }]}
        >
            <div className="cover-container">
            <div className='overlay'></div>
         <Fade direction="up" triggerOnce={true}>
          <h1 className="holder" ><span>Nuestra boda</span></h1>
          <Typography marginTop={2} textAlign={"center"} color='white' typography={"h2"} className={`${props.className}`}>{props.brideName}<br/> {props.symbolr} <br/> {props.groomName}</Typography>
            <Typography textTransform={"uppercase"} marginTop={2} textAlign={"center"} color='white' typography={"h6"} className="pt-serif-caption-regular cover-date">{props.weddingDate}</Typography>
        </Fade>
            </div>
            
       
      </ParallaxBanner>
      
        </ParallaxProvider>
    )
}
export default Cover;