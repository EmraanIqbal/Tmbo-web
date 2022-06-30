import React from "react";
import "./MyDashboardSidebar.scss";
import boatIcon from "../../../../Assets/RenterImages/boat-icon.png";
import boatIconActive from "../../../../Assets/RenterImages/boat-icon-active.png";
import paymentIcon from "../../../../Assets/RenterImages/credit-card.png";
import paymentIconActive from "../../../../Assets/RenterImages/credit-card-active.png";
import dashboardIcon from "../../../../Assets/RenterImages/Dashboard-icon.png";
import Docks from "../../../../Assets/RenterImages/docks.png";
import DocksActive from "../../../../Assets/RenterImages/docks-active.png";
import Experiences from "../../../../Assets/RenterImages/experiences.png";
import ExperiencesActive from "../../../../Assets/RenterImages/experiences-active.png";
import { Link } from "react-router-dom";
const MyDashboardSidebar = () => {
  return (
    <>
      <div className="my_dsahboard_aside">
        <div className="my_dsahboard_heding">
          <h2 className="section-heding">My Dashboard</h2>
          <span className="my_db_icon_mob">
            <img src={dashboardIcon} />
          </span>
        </div>
        <div className="my_dsahboard_list_outer">
          <ul className="">
            <li>
              <Link className="nav-link active" to="/profile">
                <span>
                  <i className="fa-solid fa-user"></i>
                </span>
                <p>My Profile</p>
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/favorites">
                <span>
                  <i className="fa-solid fa-heart"></i>
                </span>
                <p>Favorites</p>
              </Link>
            </li>
            <li>
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="my_trip_inactive">
                    <img src={boatIcon} />
                  </span>
                  <span className="my_trip_active">
                    <img src={boatIconActive} />
                  </span>

                  <p>My Trips</p>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <Link className="dropdown-item" to="/trip-boats">
                      <span>
                        <img src={boatIcon} />
                      </span>

                      <p>Boats</p>
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      <span>
                        <img src={Docks} />
                      </span>

                      <p>Docks</p>
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      <span>
                        <img src={Experiences} />
                      </span>
                      <p>Experiences</p>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link className="nav-link payment_link" to="/payments">
                <span className="paymentIcon">
                  <img src={paymentIcon} alt="trip"></img>
                </span>
                <span className="paymentIconActive">
                  <img src={paymentIconActive} />
                </span>
                <p>Payments</p>
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/notification-settings">
                <span>
                  <i className="fa-solid fa-bell"></i>
                </span>
                <p>Notification Settings</p>
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="#">
                <span>
                  <i className="fa-solid fa-gear"></i>
                </span>
                <p>Settings</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MyDashboardSidebar;
