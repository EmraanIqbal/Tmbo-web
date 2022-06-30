import React from "react";
import NavbarRenter from "../../HomePageRenterSide/NavbarRenter/NavbarRenter";
import "./MyTripsBoats.scss";
import dbprofileImage from "../../../../Assets/RenterImages/owner-pro.png";
import LastFooterRenter from "../../HomePageRenterSide/LastFooterRenter/LastFooterRenter";
import { Link } from "react-router-dom";
import MyDashboardSidebar from "../MyDashboardSidebar/MyDashboardSidebar";
import Tripb1 from "../../../../Assets/RenterImages/trip-b1.png";
import Tripb2 from "../../../../Assets/RenterImages/trip-b2.png";
import Tripb3 from "../../../../Assets/RenterImages/trip-b3.png";
const MyTripsBoats = () => {
  return (
    <>
      <NavbarRenter />
      <div className="renter-main-section">
        <div className="custom-container">
          <div className="my_dsahboard_main">
            <div className="my_dsahboard_inner">
              <MyDashboardSidebar />
              <div className="my_dashboard_detail">
                <div className="my_profile_hed">
                  <h3>My Trips / Boats</h3>
                </div>
                <div className="my_trips_boats">
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <button
                        className="nav-link "
                        data-bs-toggle="tab"
                        data-bs-target="#prev-boats"
                        type="button"
                        role="tab"
                        aria-controls="prev-boats"
                        aria-selected="true"
                      >
                        Previous
                      </button>
                      <button
                        className="nav-link active"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-recent"
                        type="button"
                        role="tab"
                        aria-controls="nav-recent"
                        aria-selected="false"
                      >
                        Recent
                      </button>
                      <button
                        className="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-upcoming"
                        type="button"
                        role="tab"
                        aria-controls="nav-upcoming"
                        aria-selected="false"
                      >
                        Upcoming
                      </button>
                    </div>
                  </nav>
                  <div className="tab-content">
                    <div
                      className="tab-pane fade"
                      id="prev-boats"
                      role="tabpanel"
                      aria-labelledby="prev-boats"
                    >
                      ...111
                    </div>
                    <div
                      className="tab-pane fade show active"
                      id="nav-recent"
                      role="tabpanel"
                      aria-labelledby="nav-recent"
                    >
                      <div className="recent_box">
                        <div className="recent_name_desc">
                          <div className="recents_img_name">
                            <span>
                              <img src={Tripb1} />
                            </span>
                            <div className="recenet_name_text">
                              <p>Cape Coral</p>
                              <p>New York</p>
                            </div>
                          </div>
                          <h3>$520/Mo</h3>
                        </div>
                        <div className="recent_date">
                          <h3>15 Oct to 20 Oct 2021</h3>
                          <Link to="/trip-boats-detail">Show details</Link>
                        </div>
                      </div>
                      <div className="recent_box">
                        <div className="recent_name_desc">
                          <div className="recents_img_name">
                            <span>
                              <img src={Tripb2} />
                            </span>
                            <div className="recenet_name_text">
                              <p>Walton Beach</p>
                              <p>New York</p>
                            </div>
                          </div>
                          <h3>$520/Mo</h3>
                        </div>
                        <div className="recent_date">
                          <h3>15 Oct to 20 Oct 2021</h3>
                          <Link to="/trip-boats-detail">Show details</Link>
                        </div>
                      </div>
                      <div className="recent_box">
                        <div className="recent_name_desc">
                          <div className="recents_img_name">
                            <span>
                              <img src={Tripb3} />
                            </span>
                            <div className="recenet_name_text">
                              <p>Miami</p>
                              <p>New York</p>
                            </div>
                          </div>
                          <h3>$520/Mo</h3>
                        </div>
                        <div className="recent_date">
                          <h3>15 Oct to 20 Oct 2021</h3>
                          <Link to="/trip-boats-detail">Show details</Link>
                        </div>
                      </div>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="nav-upcoming"
                      role="tabpanel"
                      aria-labelledby="nav-upcoming"
                    >
                      ...333
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <LastFooterRenter />
      </div>
    </>
  );
};

export default MyTripsBoats;
