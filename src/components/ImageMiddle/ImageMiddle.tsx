
import './ImageMiddle.css';
const ImageMiddle  = ({bgImage}) => {

    return(
        <div className="middle-image" style={{backgroundImage:`url('${bgImage}')`}}>
        </div>
    )
}
export default ImageMiddle;