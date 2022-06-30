import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BoatsDetailsBanner.scss";
import BoatsBannerOne from "../../../../Assets/RenterImages/boats-detail.png";
import BoatsBannerTwo from "../../../../Assets/RenterImages/banner-img.png";
import BoatsBannerThree from "../../../../Assets/RenterImages/about-image.png";
import BoatSubBanner1 from "../../../../Assets/RenterImages/sub-detail1.png";
import BoatSubBanner2 from "../../../../Assets/RenterImages/sub-detail2.png";
import BoatSubBanner3 from "../../../../Assets/RenterImages/sub-detail3.png";
import BoatSubBanner4 from "../../../../Assets/RenterImages/sub-detail4.png";
import BoatSubBanner5 from "../../../../Assets/RenterImages/sub-detail5.png";

const slidesData = [
  {
    id: 1,
    BoatSubBanner1,
  },
  {
    id: 2,
    BoatSubBanner2,
  },
  {
    id: 3,
    BoatSubBanner3,
  },
  {
    id: 4,
    BoatSubBanner4,
  },
  {
    id: 5,
    BoatSubBanner5,
  },
  {
    BoatSubBanner1,
  },
];

const BoatsDetailsBanner = (props) => {
  const images = props?.details?.images || [];
  console.log("props::>", images);
  const settings = {
    customPaging: function (i) {
      return (
        <div>
          <a>
            {/* <img src={`${BoatsBannerOne}/abstract0${i + 1}.png`} /> */}
            <img src={BoatSubBanner1} />
            {/* {slidesData?.map((item, index) => {
              <img src={item} alt="sub-iamges"/>;
              console.log("imgageArray::>", item);
            })} */}
          </a>
        </div>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <>
      <section className="boats_banner_wrapper">
        <div className="custom-container">
          <h2 className="section-heding cruise-detail-hed">Cruise Details</h2>
          {/* {
            props.experience?.map((item, index) => (
              
            ))
          } */}
          {images?.map((item, index) => (
            <Slider {...settings}>
              <div className="boats_details_main_img">
                <img src={item.image} />
                <div className="boart-heart">
                  <i className="fas fa-heart"></i>
                </div>
              </div>
            </Slider>
          ))}

          <Slider {...settings}>
            <div className="boats_details_main_img">
              {images?.map((item, index) => (
                <img src={item.image} />
              ))}
              <div className="boart-heart">
                <i className="fas fa-heart"></i>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default BoatsDetailsBanner;
