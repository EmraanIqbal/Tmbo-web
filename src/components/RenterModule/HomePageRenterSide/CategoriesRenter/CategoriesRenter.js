import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CategoriesRenter.scss";
import cat1 from "../../../../Assets/RenterImages/cat1.png";
import cat2 from "../../../../Assets/RenterImages/cat2.png";
import cat3 from "../../../../Assets/RenterImages/cat3.png";
import cat4 from "../../../../Assets/RenterImages/cat4.png";
import cat5 from "../../../../Assets/RenterImages/cat5.png";

const CategoriesRenter = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="CategoriesRenter-main">
        <div className="custom-container">
            <h1 className="section-heding">Categories</h1>
          <Slider {...settings}>
            <div className="caterories-item">
              <span>
                {" "}
                <img src={cat1} />
              </span>
              <h3>Water Sports</h3>
            </div>
            <div className="caterories-item">
              <span>
                <img src={cat2} />
              </span>
              <h3>Diving</h3>
            </div>
            <div className="caterories-item">
              <span>
                {" "}
                <img src={cat3} />
              </span>
              <h3>Cape Coral</h3>
            </div>
            <div className="caterories-item">
              <span>
                {" "}
                <img src={cat4} />
              </span>
              <h3>Surfing</h3>
            </div>
            <div className="caterories-item">
              <span>
                <img src={cat5} />
              </span>
              <h3>Water Sailing</h3>
            </div>
            <div className="caterories-item">
              <span>
                <img src={cat1} />
              </span>
              <h3>Water Sports</h3>
            </div>
            <div className="caterories-item">
              <span>
                <img src={cat2} />
              </span>
              <h3>Diving</h3>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default CategoriesRenter;
