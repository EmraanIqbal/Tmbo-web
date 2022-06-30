import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./OurTestimonialRenter.scss";
import TestimonialImg from "../../../../Assets/RenterImages/testimonial.png";
import Rating from "../../../Dashboard/Rating";
const OurTestimonialRenter = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
      <section className="OurTestimonial-main">
        <div className="custom-container">
          <h1>Our Testimonials</h1>
          <Slider {...settings}>
            <div className="testimonial-card">
              <div className="testimonial-img">
                <img src={TestimonialImg} alt="pro" />
              </div>
              <p className="test-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>
              <h2>Lorem Ipsum</h2>
              <p>Lorem</p>
              <Rating value={4} />
            </div>
            <div className="testimonial-card">
              <div className="testimonial-img">
                <img src={TestimonialImg} alt="pro" />
              </div>
              <p className="test-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>
              <h2>Lorem Ipsum</h2>
              <p>Lorem</p>
              <Rating value={4} />
            </div>
            <div className="testimonial-card">
              <div className="testimonial-img">
                <img src={TestimonialImg} alt="pro" />
              </div>
              <p className="test-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>
              <h2>Lorem Ipsum</h2>
              <p>Lorem</p>
              <Rating value={4} />
            </div>
            <div className="testimonial-card">
              <div className="testimonial-img">
                <img src={TestimonialImg} alt="pro" />
              </div>
              <p className="test-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>
              <h2>Lorem Ipsum</h2>
              <p>Lorem</p>
              <Rating value={4} />
            </div>
            <div className="testimonial-card">
              <div className="testimonial-img">
                <img src={TestimonialImg} alt="pro" />
              </div>
              <p className="test-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>
              <h2>Lorem Ipsum</h2>
              <p>Lorem</p>
              <Rating value={4} />
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default OurTestimonialRenter;
