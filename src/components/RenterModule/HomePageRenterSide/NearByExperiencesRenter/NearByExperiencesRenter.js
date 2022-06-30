import React from "react";
import "./NearByExperiencesRenter.scss";
import exp1 from "../../../../Assets/RenterImages/exp1.png";
import exp2 from "../../../../Assets/RenterImages/exp2.png";
import exp3 from "../../../../Assets/RenterImages/exp3.png";
import Rating from "../../../Dashboard/Rating";
import { Link } from "react-router-dom";

const NearByExperiencesRenter = () => {
  return (
    <>
      <div className="NearBy-experienceRenter-main">
        <div className="custom-container">
          <h1 className="section-heding">Nearby Experiences</h1>
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4">
              <div className="card">
                <span className="boart-img">
                  <img src={exp1} />
                  <div className="boart-count-main">
                    <div className="boart-count">1/9</div>
                    <div className="boart-heart">
                      <i className="fas fa-heart"></i>
                    </div>
                  </div>
                </span>
                <div className="card-body">
                  <div className="boart-desc">
                    <div className="d-flex justify-content-between">
                      <h2>NYC</h2>
                      <div className="boart-rating">
                        <Rating value={4} />
                      </div>
                    </div>
                    <p>Cruise</p>
                    <h3>$20 per hour</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <div className="card">
                <span className="boart-img">
                  <img src={exp2} />
                  <div className="boart-count-main">
                    <div className="boart-count">1/9</div>
                    <div className="boart-heart">
                      <i className="fas fa-heart"></i>
                    </div>
                  </div>
                </span>
                <div className="card-body">
                  <div className="boart-desc">
                    <div className="d-flex justify-content-between">
                      <h2>NYC</h2>
                      <div className="boart-rating">
                        <Rating value={4} />
                      </div>
                    </div>
                    <p>Sailing</p>
                    <h3>$20 per hour</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <div className="card">
                <span className="boart-img">
                  <img src={exp3} />
                  <div className="boart-count-main">
                    <div className="boart-count">1/9</div>
                    <div className="boart-heart">
                      <i className="fas fa-heart"></i>
                    </div>
                  </div>
                </span>
                <div className="card-body">
                  <div className="boart-desc">
                    <div className="d-flex justify-content-between">
                      <h2>NYC</h2>
                      <div className="boart-rating">
                        <Rating value={4} />
                      </div>
                    </div>
                    <p>Yacht</p>
                    <h3>$20 per hour</h3>
                  </div>
                </div>
              </div>
            </div>
            <Link to="/experiences" className="view_all_link">
              View All
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NearByExperiencesRenter;
