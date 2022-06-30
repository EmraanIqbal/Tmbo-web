import React from "react";
import "./BoatsBanner.scss";

const BoatsBanner = (props) => {
  return (
    <>
      <div className="Boats_banner_main">
        <div
          id="boats_banner"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#boats_banner"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#boats_banner"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#boats_banner"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="banner_black_layer">
                <img
                  src={props.image?.img1}
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption">
                  <div className="Boats_Banner_item">
                    <h1 className="banner-heding">{props.heading}</h1>
                    <p>{props.paragraph}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="banner_black_layer">
                <img
                  src={props.image?.img2}
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption">
                  <div className="Boats_Banner_item">
                    <h1 className="banner-heding">{props.heading}</h1>
                    <p>{props.paragraph}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="banner_black_layer">
                <img
                  src={props.image?.img3}
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption">
                  <div className="Boats_Banner_item">
                    <h1 className="banner-heding">{props.heading}</h1>
                    <p>{props.paragraph}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BoatsBanner;
