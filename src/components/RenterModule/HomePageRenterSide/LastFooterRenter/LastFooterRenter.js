import React from "react";
import { Link } from "react-router-dom";
import "./LastFooterRenter.scss";
const LastFooterRenter = () => {
  return (
    <>
      <section className="LastFooterRenter-main">
        <div className="custom-container">
          <section className="LastFooter">
            <div className="d-flex justify-content-between flex-wrap">
              <ul>
                <li>
                  <Link to="#">© 2022 TMBO</Link>
                </li>
                <li>.</li>
                <li>
                  <Link to="#">Terms of Use</Link>
                </li>
                <li>.</li>
                <li>
                  <Link to="#"> Privacy Policy</Link>
                </li>
              </ul>
              <ul className="footer-social">
                <li>
                  <Link to="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa-brands fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default LastFooterRenter;