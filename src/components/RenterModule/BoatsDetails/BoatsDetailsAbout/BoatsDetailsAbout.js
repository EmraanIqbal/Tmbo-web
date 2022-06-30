import React from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "../../../Dashboard/Rating";
import "./BoatsDetailsAbout.scss";

const BoatsDetailsAbout = (props) => {
  let { id } = useParams();
  // const user = props?.details?.features || [];
  // const features = props?.features || [];
  // console.log("props::>", user);
  return (
    <>
      <section className="BoatsDetailsAbout_main">
        <div className="custom-container">
          <div className="boats_detail_inner_main">
            <div className="boats_about_inner">
              <h2 className="section-heding">About Boat</h2>
              <Rating value={4} />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero
            </p>
            <section className="boarts_detail_features">
              <h2 className="section-heding">Features</h2>
              <div className="boats_detail_feature_table">
                {props?.details?.features?.map((item, index) => (
                  // <div className="detail_feature_left">
                  <>
                    <div className="feature_detail_inner">
                      <p>{item?.feature?.name}</p>
                      <p>YES</p>
                    </div>
                    {/* <div className="feature_detail_inner">
                      <p>Anchor</p>
                      <p>YES</p>
                    </div>
                    <div className="feature_detail_inner">
                      <p>Life Jackets</p>
                      <p>YES</p>
                    </div> */}
                  </>
                ))}
                {/* <div className="detail_feature_left">
                  <div className="feature_detail_inner">
                    <p>Captain</p>
                    <p>YES</p>
                  </div>
                  <div className="feature_detail_inner">
                    <p>Anchor</p>
                    <p>YES</p>
                  </div>
                  <div className="feature_detail_inner">
                    <p>Life Jackets</p>
                    <p>YES</p>
                  </div>
                </div>
                <div className="detail_feature_right">
                  <div className="feature_detail_inner">
                    <p>Response Rate</p>
                    <p>98%</p>
                  </div>
                  <div className="feature_detail_inner">
                    <p>Passengers</p>
                    <p>YES</p>
                  </div>
                  <div className="feature_detail_inner">
                    <p>Bathroom</p>
                    <p>Up to 12</p>
                  </div>
                </div> */}
                <div className="feature_book-section">
                  <Link
                    to={`/boats-booking/${id}`}
                    className="btn book-now-btn"
                  >
                    Request to Book
                  </Link>
                  <h2 className="section-heding">$400/ Day</h2>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default BoatsDetailsAbout;
