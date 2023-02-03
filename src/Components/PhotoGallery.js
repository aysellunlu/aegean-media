import React, { useEffect, useState } from "react";
import { Image} from "react-bootstrap";
import "../Styles/Gallery.css";
import P1 from "../img/1.jpeg";
import P2 from "../img/2.jpeg";
import P3 from "../img/3.jpeg";
import P4 from "../img/4.jpeg";
import P5 from "../img/5.jpeg";
import P6 from "../img/6.jpeg";

const PhotoGallery = () => {
  const [width, setWidth] = useState("");

  useEffect(() => {
    setWidth(window.innerWidth);
    console.log(width);
  }, [width]);
  return (
    <div className="container-fluid">
      {width >= 1024 && (
        <div>
          <div className="gallery-title pt-4">GALLERY</div>
          <div className="row pt-5 pb-5">
            <div className="col photo-card">
              <Image src={P1} width="400" />
            </div>
            <div className="col photo-card">
              <Image src={P2} width="400" />
            </div>
            <div className="col photo-card">
              <Image src={P3} width="400" />
            </div>
          </div>
          <div className="row pt-5 pb-5">
            <div className="col photo-card">
              <Image src={P4} width="400" />
            </div>
            <div className="col photo-card">
              <Image src={P5} width="400" />
            </div>
            <div className="col photo-card">
              <Image src={P6} width="400" />
            </div>
          </div>
        </div>
      )}
      {width <= 426 && (
        <div>
          <div className="gallery-title_mobile pb-4 pt-4">GALLERY</div>
          <div className="row">
            <div className="col-sm-12 photo-card_mobile">
            <Image src={P1} width="100%" />
            </div>
            <div className="col-sm-12 photo-card_mobile">
            <Image src={P2} width="100%" />
            </div>
            <div className="col-sm-12 photo-card_mobile">
            <Image src={P3} width="100%" />
            </div>
            <div className="col-sm-12 photo-card_mobile">
            <Image src={P4} width="100%" />
            </div>
            <div className="col-sm-12 photo-card_mobile">
            <Image src={P5} width="100%" />
            </div>
            <div className="col-sm-12 photo-card_mobile">
            <Image src={P6} width="100%" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
