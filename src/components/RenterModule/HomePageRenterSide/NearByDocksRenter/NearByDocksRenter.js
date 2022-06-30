import React from "react";
import "./NearByDocksRenter.scss";
import docks1 from "../../../../Assets/RenterImages/docks1.png";
import docks2 from "../../../../Assets/RenterImages/docks2.png";
import docks3 from "../../../../Assets/RenterImages/docks3.png";
import Rating from "../../../Dashboard/Rating";
import { Link } from "react-router-dom";

const NearByDocksRenter = () => {
  return (
    <>
      <div className="NearBy-docks-Renter-main">
        <div className="custom-container">
          <h1 className="section-heding">Nearby Docks</h1>
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4">
              <div className="card">
                <span className="boart-img">
                  <img src={docks1} />
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
                  <img src={docks2} />
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
                  <img src={docks3} />
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
            <Link to="/docks" className="view_all_link">
              View All
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NearByDocksRenter;
