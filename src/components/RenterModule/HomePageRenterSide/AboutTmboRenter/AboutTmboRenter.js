import React from "react";
import { Link } from "react-router-dom";
import "./AboutTmboRenter.scss";
import AboutImage from "../../../../Assets/RenterImages/about-image.png";

const AboutTmboRenter = () => {
  return (
    <>
      <section className="about-tmbo-main">
        <div className="custom-container">
          <div className="row">
            <div className="col-md-6">
              <div className="about-image">
                <img src={AboutImage} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-desc">
                <h1>About TMBO</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis. ultrices gravida. Risus
                  commodo viverra maecenas accumsan lacus vel facilisis. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutTmboRenter;
