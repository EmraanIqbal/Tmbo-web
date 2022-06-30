import React from "react";
import "./HowItWorkRenter.scss";
import work1 from "../../../../Assets/RenterImages/work1.png";
import work2 from "../../../../Assets/RenterImages/work2.png";
import work3 from "../../../../Assets/RenterImages/work3.png";

const HowItWorkRenter = () => {
  return (
    <>
      <section className="how-itworkRenter-main">
        <div className="custom-container">
          <h1>How it Works</h1>
          <div className="row w-100">
            <div className="col-md-4">
              <div className="how-wrok-img">
                <img src={work1} alt="work" />
                <h2>Regiser Account</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore{" "}
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="how-wrok-img">
                <img src={work2} alt="work" />
                <h2>Book Your Services</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore{" "}
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="how-wrok-img">
                <img src={work3} alt="work" />
                <h2>Get your purchase</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorkRenter;
