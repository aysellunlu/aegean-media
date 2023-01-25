import React from "react";
import PhotoGallery from "../Components/PhotoGallery";
import '../Styles/Gallery.css';

const Gallery = () => {
  return (
    <div className="container-fluid gallery-bg">
      <PhotoGallery />
    </div>
  );
};

export default Gallery;
