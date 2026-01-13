import { useState } from "react";

interface GalleryImageProps {
  src: string;
  width: number;
  priority?: boolean;
}

const GalleryImage = ({ src, width, priority }: GalleryImageProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="gallery-img-wrapper">
      <img
        src={`${src}?w=${width}&auto=format`}
        srcSet={`${src}?w=${width * 2}&auto=format 2x`}
        alt=""
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`gallery-img ${loaded ? "loaded" : ""}`}
      />
    </div>
  );
};

export default GalleryImage;
