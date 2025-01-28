export interface ImageCircleProps {
    imgSrc:string;
} 

const ImageCircle  = ({imgSrc}:ImageCircleProps) => {

    return(
        <div className="image-circle" style={{backgroundImage:  `url(${imgSrc})`}}>
            
        </div>
    )
}
export default ImageCircle;