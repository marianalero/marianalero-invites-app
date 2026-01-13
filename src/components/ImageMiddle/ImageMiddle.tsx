
import { useMediaQuery } from '@mui/material';
import './ImgMiddle.css';
import { useEffect, useRef, useState } from 'react';
export interface ImageMiddleProps {
    bgImage:string;
    height?:string;
    bgSize?:string;
    bgPosition?:string;
    bgPositionY?:string;
}
const ImageMiddle = (props: ImageMiddleProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const img = new Image();
          img.src = props.bgImage;
          img.onload = () => setLoaded(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "300px", // empieza antes
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [props.bgImage]);

  return (
    <div
      ref={ref}
      className="middle-image"
      style={{
        backgroundImage: loaded ? `url(${props.bgImage})` : "none",
        backgroundSize: props.bgSize ?? "cover",
        backgroundPosition: props.bgPosition ?? "50%",
        backgroundPositionY: isSmallScreen ? "50%" : props.bgPositionY ?? "50%",
        height: isSmallScreen ? props.height ?? "50vh" : "100vh",

        /* 🎨 placeholder */
        backgroundColor: "#f2f2f2",
        filter: loaded ? "none" : "blur(20px)",
        opacity: loaded ? 1 : 0,
        transition: "opacity 0.8s ease, filter 0.8s ease",
      }}
    />
  );
};
export default ImageMiddle;