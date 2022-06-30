import React from "react";
import { Link } from "react-router-dom";
import "./FooterRenter.scss";

const FooterRenter = () => {
  return (
    <>
      <section className="FooterRenter-main">
        <div className="custom-container">
          <div className="row">
            <div className="col-12 col-sm-4">
              <div className="footer-renter-inner">
                <h2>Company</h2>
                <ul >
                  <li>
                    <Link to="#">List Your Boat</Link>
                  </li>
                  <li>
                    <Link to="#">Experiences</Link>
                  </li>
                  <li>
                    <Link to="#">Docks</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-4">
              <div className="footer-renter-inner">
                <h2>About TMBO</h2>
                <ul>
                  <li>
                    <Link to="#">About</Link>
                  </li>
                  <li>
                    <Link to="#">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="#">Our Process</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-4">
              <div className="footer-renter-inner">
                <h2>Questions & feedback</h2>
                <ul className="footer-last-list-renter">
                  <li>
                    <Link to="#">Contact TMBO</Link>
                  </li>
                  <li>
                    <Link to="#">Chat Help Center</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FooterRenter;
