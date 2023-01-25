import React, { useState, useEffect } from "react";
import Linkedin from "../img/linkedin.png";
import Instagram from "../img/instagram.png";
import Behance from "../img/behance.png";
import Github from "../img/github.png";
import Facebook from "../img/facebook.png";
import Medium from "../img/medium.png";
import '../Styles/Contact.css';


import { Image } from "react-bootstrap";
const Contact = () => {
  const [width, setWidth] = useState("");

  useEffect(() => {
    setWidth(window.innerWidth);
    console.log(width);
  }, [width]);
  return (
    <div className="container-fluid background-black pb-5 pt-5">
      {width >= 1024 && (
        <div className=" row pb-5 pt-5 mb-5 mt-5">
          <div className="col-lg-4 col-sm-12"></div>
          <div className="col-lg-4 col-sm-12">
            <div className="contact-title text-center mb-5 mt-5 pt-5">
              CONTACT
            </div>
            <div className="contact-white-text text-center">
              You can follow us on social media and you can reach us from any
              platform you want.
            </div>
            <div className="text-center row mt-4 mb-4">
              <div className="contact-text col-lg-2 col-sm- mb-3">
                <a href="https://www.linkedin.com/in/ayselunlu">
                  <Image src={Linkedin} width={50} />
                </a>
              </div>
              <div className="contact-text col-lg-2 col-sm- mb-3">
                <a href="https://www.linkedin.com/in/ayselunlu">
                  <Image src={Instagram} width={50} />
                </a>
              </div>
              <div className="contact-text col-lg-2 col-sm- mb-3">
                <a href="https://www.linkedin.com/in/ayselunlu">
                  <Image src={Behance} width={50} />
                </a>
              </div>
              <div className="contact-text col-lg-2 col-sm- mb-3">
                <a href="https://www.linkedin.com/in/ayselunlu">
                  <Image src={Github} width={50} />
                </a>
              </div>
              <div className="contact-text col-lg-2 col-sm- mb-3">
                <a href="https://www.linkedin.com/in/ayselunlu">
                  <Image src={Facebook} width={50} />
                </a>
              </div>
              <div className="contact-text col-lg-2 col-sm- mb-3">
                <a href="https://www.linkedin.com/in/ayselunlu">
                  <Image src={Medium} width={50} />
                </a>
              </div>
              <div className="contact-text mt-4 text-center">
                contact@aegeanmedia.com
              </div>
              <div className="contact-text mt-4 text-center">Turkey</div>
            </div>
            <div className="col-lg-4 col-sm-12"></div>
          </div>
        </div>
      )}
      {width <= 425 && (
        <div>
          <div className="contact-title_mobile text-center mb-4 mt-4 pb-4 pt-4">
            CONTACT
          </div>
          <div className="contact-white-text_mobile text-center mb-4 pb-4">
            You can follow us on social media and you can reach us from any
            platform you want.
          </div>
          <div className="text-center row mt-4 mb-4">
            <div className="mb-3 mt-3 col">
              <a href="https://www.linkedin.com/in/ayselunlu">
                <Image src={Instagram} width={35} />
              </a>
            </div>
            <div className="mb-3 mt-3 col">
              <a href="https://www.linkedin.com/in/ayselunlu">
                <Image src={Facebook} width={35} />
              </a>
            </div>
            <div className="mb-3 mt-3 col">
              <a href="https://www.linkedin.com/in/ayselunlu">
                <Image src={Behance} width={35} />
              </a>
            </div>
          </div>
          <div className="text-center row mt-3">
            <div className="mb-3 mt-3 col">
              <a href="https://www.linkedin.com/in/ayselunlu">
                <Image src={Linkedin} width={35} />
              </a>
            </div>
            <div className="mb-3 mt-3 col">
              <a href="https://www.linkedin.com/in/ayselunlu">
                <Image src={Github} width={35} />
              </a>
            </div>
            <div className="mb-3 mt-3 col">
              <a href="https://www.linkedin.com/in/ayselunlu">
                <Image src={Medium} width={35} />
              </a>
            </div>
            <div className="contact-text_mobile mt-4 text-center">
              contact@aegeanmedia.com
            </div>
            <div className="contact-text_mobile mt-4 text-center">Turkey</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
