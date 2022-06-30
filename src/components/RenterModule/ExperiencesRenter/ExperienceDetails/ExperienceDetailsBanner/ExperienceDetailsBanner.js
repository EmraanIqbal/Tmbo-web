import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BoatSubBanner1 from "../../../../../Assets/RenterImages/sub-detail1.png";
import { Divider } from "@mui/material";
import Rating from "../../../../Dashboard/Rating";

// import "./ExperienceDetailsBanner.scss";

const ExperienceDetailsBanner = (props) => {
  const images = props?.details?.images || [];
  console.log("props::>", images);
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    autoplay:true,
}
  // const settings = {
  //   customPaging: function (i) {
  //     return (
  //       <div>
  //         <a>
  //           {/* <img src={`${BoatsBannerOne}/abstract0${i + 1}.png`} /> */}
  //           <img src={BoatSubBanner1} />
  //           {/* {slidesData?.map((item, index) => {
  //             <img src={item} alt="sub-iamges"/>;
  //             console.log("imgageArray::>", item);
  //           })} */}
  //         </a>
  //       </div>
  //     );
  //   },
  //   dots: true,
  //   dotsClass: "slick-dots slick-thumb",
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   // autoplay: true,
  //   autoplaySpeed: 2000,
  //   pauseOnHover: true,
  //   responsive: [
  //     {
  //       breakpoint: 700,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 500,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 400,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 2,
  //       },
  //     },
  //   ],
  // };
  return (
    <>
      <section className="boats_banner_wrapper">
        <div className="custom-container">
          <h2 className="section-heding cruise-detail-hed">
            Experience Detail
          </h2>
          <Slider {...settings}>
            {images?.map((item, index) => (
              <div className="boats_details_main_img">
                <img src={item.image} />

                <div className="boart-heart">
                  <i className="fas fa-heart"></i>
                </div>
              </div>
            ))}
          </Slider>
          {/* <Slider {...settings}>
            <div className="boats_details_main_img">
              <img src={BoatsBannerOne} />
              <div className="boart-heart">
                <i className="fas fa-heart"></i>
              </div>
            </div>
            <div className="boats_details_main_img">
              <img src={BoatsBannerTwo} />

              <div className="boart-heart">
                <i className="fas fa-heart"></i>
              </div>
            </div>
            <div className="boats_details_main_img">
              <img src={BoatsBannerThree} />
              <div className="boart-heart">
                <i className="fas fa-heart"></i>
              </div>
            </div>
            <div className="boats_details_main_img">
              <img src={BoatsBannerOne} />
              <div className="boart-heart">
                <i className="fas fa-heart"></i>
              </div>
            </div>
          </Slider> */}
          <div className="new_title_name">
            {" "}
            <div>
              <h2>{props?.details?.title}</h2>
              <p>
                {props?.details?.type} | {props?.details?.city} |{" "}
                {props?.details?.state}
              </p>
            </div>
            <Rating value={4} />
          </div>
          <Divider className="divder_padding" />
        </div>
      </section>
    </>
  );
};

export default ExperienceDetailsBanner;
