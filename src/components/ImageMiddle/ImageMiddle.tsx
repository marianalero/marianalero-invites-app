
import './ImgMiddle.css';
export interface ImageMiddleProps {
    bgImage:string;
    height?:string;
    bgSize?:string;
    bgPosition?:string;
}
const ImageMiddle  = (props:ImageMiddleProps) => {

    return(
        <div className="middle-image" style={{backgroundImage:`url('${props.bgImage}')`,backgroundPositionX:props.bgPosition ? props.bgPosition : "50%!important", backgroundSize: props.bgSize ?  props.bgSize : "cover", height: props.height ? props.height : "50vh"}}>
        </div>
    )
}
export default ImageMiddle;