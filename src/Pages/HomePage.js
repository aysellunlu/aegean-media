import React, { useState, useEffect } from "react";
import { Image, Button } from "react-bootstrap";
import Play from "../img/Play.png";

const HomePage = () => {
  const [width, setWidth] = useState("");

  useEffect(() => {
    setWidth(window.innerWidth);
    console.log(width);
  }, [width]);

  return (
    <div className="container-fluid body-yellow">
      {width >= 1024 && (
        <div className="">
          <div className="text-center">
            <div className="row d-flex align-items-center ">
              <div className="col-lg-6 col-sm-12">
                <div className="creative-direction">CREATIVE DIRECTION</div>
                <div className="pl-5 second-text">
                  Are you ready to shine more in the creative world?
                </div>
                <div className="text-center mt-5 mb-5">
                  <Button className="main-button">LETS GO!</Button>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12 p-0">
                <Image src={Play} width="100%" />
              </div>
            </div>
          </div>
        </div>
      )}
      {width <= 425 && (
        <div className="mobile-screen">
          <div className="text-center">
            <div className="creative-direction_mobile pt-4">
              CREATIVE DIRECTION
            </div>
            <div className="pt-4 pb-2 second-text_mobile">
              Are you ready to shine more in the creative world?
            </div>
            <div className="text-center pt-5 pb-5">
              <Button className="main-button_mobile">LETS GO!</Button>
            </div>
            <div className=" p-0 pb-4">
              <Image src={Play} width="90%" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
