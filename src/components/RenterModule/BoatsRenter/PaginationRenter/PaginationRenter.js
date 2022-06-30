import React from "react";
import { Link } from "react-router-dom";
import "./PaginationRenter.scss";

const PaginationRenter = () => {
  return (
    <>
      <section className="pagination_wrapper">
        <nav>
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <Link className="page-link" to="#" aria-label="Previous">
                <span aria-hidden="true"><i className="fa-solid fa-angles-left"></i> Prevs</span>
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="#">
                1
              </Link>
            </li>
            <li className="page-item active">
              <Link className="page-link" to="#">
                2
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="#">
                3
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="#" aria-label="Next">
                <span aria-hidden="true">Next <i className="fa-solid fa-angles-right"></i></span>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default PaginationRenter;
