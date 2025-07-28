
import './ImgMiddle.css';
export interface ImageMiddleProps {
    bgImage:string;
    height?:string;
    bgSize?:string;
}
const ImageMiddle  = (props:ImageMiddleProps) => {

    return(
        <div className="middle-image" style={{backgroundImage:`url('${props.bgImage}')`,backgroundPosition:"50% 50%", backgroundSize: props.bgSize ?  props.bgSize : "cover"}}>
        </div>
    )
}
export default ImageMiddle;