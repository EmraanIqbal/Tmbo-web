import React from "react";
import "./NearByBoatsRenter.scss";
import boat1 from "../../../../Assets/RenterImages/boat1.png";
import boat2 from "../../../../Assets/RenterImages/boat2.png";
import boat3 from "../../../../Assets/RenterImages/boat3.png";
import Rating from "../../../Dashboard/Rating";
import { Link } from "react-router-dom";

const NearByBoatsRenter = () => {
  return (
    <>
      <div className="NearByBoatsRenter-main">
        <div className="custom-container">
          <h1 className="section-heding">Nearby Boats</h1>

          <div className="row">
            <div className="col-12 col-sm-6 col-md-4">
              <div className="card">
                <span className="boart-img">
                  <img src={boat1} />
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
                  <img src={boat2} />
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
                  <img src={boat3} />
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
            <Link to="/boats-renter" className="view_all_link">
              View All
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NearByBoatsRenter;
