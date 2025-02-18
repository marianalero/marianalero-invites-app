
import './ImgMiddle.css';
export interface ImageMiddleProps {
    bgImage:string;
}
const ImageMiddle  = (props:ImageMiddleProps) => {

    return(
        <div className="middle-image" style={{backgroundImage:`url('${props.bgImage}')`}}>
        </div>
    )
}
export default ImageMiddle;