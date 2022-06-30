import React from "react";
// import "./ViewResult.scss";

import { Link, useNavigate } from "react-router-dom";
import Rating from "../../../Dashboard/Rating";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import boatImage from "../../../../Assets/RenterImages/boat2.png";

const ExperiencesViewResult = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="ViewResult-main">
        <div className="custom-container">
          <h2 className="section-heding">All Experiences</h2>

          <div className="row">
            {props.list?.map((item, index) => (
              <div className="col-12 col-sm-6 col-md-4">
                <div
                  className="card"
                  onClick={() => navigate(`/experience-details/${item.id}`)}
                >
                  {/* <Link to={`/experience-details?id=${item.id}`}> */}
                  <span className="boart-img">
                    <img
                      src={
                        item?.featured_image ? item?.featured_image : boatImage
                      }
                    />
                    <div className="boart-count-main">
                      {/* <div className="boart-count">1/{item?.images.length}</div>
                      <div className="boart-heart">
                        <i className="fas fa-heart"></i>
                      </div> */}
                      <FavoriteBorderIcon style={{ color: "#fff" }} />
                    </div>
                  </span>
                  <div className="card-body">
                    <div className="boart-desc">
                      <div className="d-flex justify-content-between">
                        <h2>{item?.title}</h2>
                        <div className="boart-rating">
                          {/* <Rating value={4} /> */}
                          <span style={{ color: "rgb(255, 203, 0)" }}>★</span>
                          <span className="">5</span>
                          <span className="out_of_ratting">
                            (<span>20</span>)
                          </span>
                        </div>
                      </div>
                      {/* <p>{item.title}</p>
                      <h3>${item?.two_hours} two hour</h3> */}
                      <p>
                        {item?.type} | {item?.city} | {item?.state}
                      </p>
                      <h3>${item?.prices?.per_day} / Day</h3>
                      {/* <h3>${item?.four_hours} four hour</h3>
                        <h3>${item?.six_hours} six hour</h3>
                        <h3>${item?.eight_hours} eight hour</h3> */}
                    </div>
                  </div>
                  {/* </Link> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperiencesViewResult;
