import React, { useEffect, useState } from "react";
// Import useLocation hook
import { Link, useLocation, useNavigate } from "react-router-dom";

import "./NavbarRenter.scss";
import LogoRenter from "../../../../Assets/RenterImages/TMBO_Full_Blue-logo.png";
import ProImage from "../../../../Assets/RenterImages/profile.png";
import { userLogoutAction } from "../../../../actions/userAction";
import { useDispatch } from "react-redux";
const NavbarRenter = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // active nav links
  const location = useLocation();
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  const [isLoading, setIsLoading] = useState(false);

  const logoutHandler = async () => {
    setIsLoading(true);

    await dispatch(userLogoutAction(() => navigate("/login")));
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? <div className="se-pre-con"></div> : ""}

      <div className="navbar-renter-main">
        <div className="custom-container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Link className="navbar-brand" to="/">
              <img src={LogoRenter} />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    to="/"
                    className={"nav-link" + (url === "/" ? " active" : "")}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={
                      "nav-link" + (url === "/boats-renter" ? " active" : "")
                    }
                    to="/boats-renter"
                  >
                    Boats
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={
                      "nav-link" + (url === "/experiences" ? " active" : "")
                    }
                    to="/experiences"
                  >
                    Experiences
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={"nav-link" + (url === "/docks" ? " active" : "")}
                    to="/docks"
                  >
                    Docks
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={
                      "nav-link" + (url === "/renter-messages" ? " active" : "")
                    }
                    to="/renter-messages"
                  >
                    Messages
                  </Link>
                </li>
              </ul>
              <form className="navbar-renter-last">
                <button className="btn list-boat-btn" type="button">
                  List Your Boat
                </button>
                <span className="">
                  <i className="fas fa-heart"></i>
                </span>
                <span className="renter-notify">
                  <i className="fas fa-bell"></i>
                  <span className="badge">2</span>
                </span>
                <div className="dropdown">
                  <button
                    className="btn  dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Marcus
                    <span className="renter-pro-dropdown">
                      <img src={ProImage} alt="profile"></img>
                    </span>
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <Link className="dropdown-item" to="/dashboard">
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/profile-renter">
                        My Profile
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        My Trips
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={logoutHandler}
                        className="dropdown-item"
                        to="#"
                      >
                        LogOut
                      </button>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavbarRenter;
