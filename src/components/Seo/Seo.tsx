
import React from "react";
import {Helmet} from "react-helmet";
 
interface SeoProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

const Seo: React.FC<SeoProps> = ({ title, description, image, url }) => {
  const defaultImage = "https://marianalero.github.io/";
  const defaultUrl = "https://marianalero.github.io/";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph (para Facebook y otros) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={url || defaultUrl} />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || defaultImage} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
};

export default Seo;