
import { useMediaQuery } from '@mui/material';
import './ImgMiddle.css';
export interface ImageMiddleProps {
    bgImage:string;
    height?:string;
    bgSize?:string;
    bgPosition?:string;
    bgPositionY?:string;
}
const ImageMiddle  = (props:ImageMiddleProps) => {
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    return(
        <div 
            className="middle-image" 
            style={{
                backgroundImage:`url('${props.bgImage}')`,
                backgroundPositionX:props.bgPosition ? props.bgPosition : "50%!important",
                backgroundPositionY:props.bgPositionY ? !isSmallScreen ? props.bgPositionY : "50%" : "50%",
                backgroundSize: props.bgSize ?  props.bgSize : "cover",
                height: props.height ? isSmallScreen ? props.height : "100vh" : "50vh"}}>
        </div>
    )
}
export default ImageMiddle;