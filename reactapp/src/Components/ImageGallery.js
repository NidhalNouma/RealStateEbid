import ImageGallery from "react-image-gallery";
import React from "react";

function ImageGallerys({ className, images }) {
  return (
    <div className={className}>{images && <ImageGallery items={images} />}</div>
  );
}

export default ImageGallerys;
