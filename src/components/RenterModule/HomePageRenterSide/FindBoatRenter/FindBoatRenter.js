import React from "react";
import { Link } from "react-router-dom";
import "./FindBoatRenter.scss";

const FindBoatRenter = () => {
  return (
    <>
      <section className="FindBoatRenter-main">
        <h1>Find the best BOAT near you</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis. ultrices gravida. Risus commodo viverra maecenas
        </p>
        <Link className="book-now-btn" to="#">
            Book Now
        </Link>
      </section>
    </>
  );
};

export default FindBoatRenter;
