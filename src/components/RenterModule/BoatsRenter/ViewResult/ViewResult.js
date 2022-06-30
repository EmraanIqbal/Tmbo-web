import React from "react";
import "./ViewResult.scss";

import { Link } from "react-router-dom";
import Rating from "../../../Dashboard/Rating";

const ViewResult = (props) => {
  return (
    <>
      <div className="ViewResult-main">
        <div className="custom-container">
          <h2 className="section-heding">View Result</h2>
          <div className="row">
            {props.list?.map((item, index) => (
              <div className="col-12 col-sm-6 col-md-4">
                <div className="card">
                  <Link to={`/boat-detail/${item.id}`}>
                    <span className="boart-img">
                      <img src={item?.images[0]?.image} />
                      <div className="boart-count-main">
                        <div className="boart-count">
                          1/{item?.images.length}
                        </div>
                        <div className="boart-heart">
                          <i className="fas fa-heart"></i>
                        </div>
                      </div>
                    </span>
                    <div className="card-body">
                      <div className="boart-desc">
                        <div className="d-flex justify-content-between">
                          <h2>{item?.type}</h2>
                          <div className="boart-rating">
                            <Rating value={4} />
                          </div>
                        </div>
                        <p>{item.title}</p>
                        <h3>${item?.two_hours} two hour</h3>
                        {/* <h3>${item?.four_hours} four hour</h3>
                        <h3>${item?.six_hours} six hour</h3>
                        <h3>${item?.eight_hours} eight hour</h3> */}
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewResult;
