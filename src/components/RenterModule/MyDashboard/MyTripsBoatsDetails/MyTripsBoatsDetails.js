import React from "react";
import NavbarRenter from "../../HomePageRenterSide/NavbarRenter/NavbarRenter";
import "./MyTripsBoatsDetails.scss";
import myTripdtailImage from "../../../../Assets/RenterImages/boats-detail.png";
import LastFooterRenter from "../../HomePageRenterSide/LastFooterRenter/LastFooterRenter";
import { Link } from "react-router-dom";
import MyDashboardSidebar from "../MyDashboardSidebar/MyDashboardSidebar";
import ownerBoats from "../../../../Assets/RenterImages/owner-pro.png";
import Rating from "../../../Dashboard/Rating";
import chatIcon from "../../../../Assets/RenterImages/chat-icon.png";
const MyTripsBoatsDetails = () => {
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
                  <h3>My Trips / Boats Details</h3>
                </div>
                <div className="my_trips_boats_details">
                  <div className="my_trips_detail_img">
                    <img src={myTripdtailImage} alt="myTripdtailImage" />
                  </div>
                  <div className="my_trips_boats_details_bottom">
                    <div>
                      <h3>Cruise</h3>
                      <p>$400/ Day</p>
                    </div>
                    <Link to="#">Edit Booking</Link>
                  </div>
                  <div className="my_trips_booking_details">
                    <h3>Booking Details</h3>
                    <div className="Bdetails_inner">
                      <p>Start Date</p>
                      <p>Aug 19, 2021</p>
                    </div>
                    <div className="Bdetails_inner">
                      <p>End Date</p>
                      <p>Aug 20, 2021</p>
                    </div>
                    <div className="Bdetails_inner">
                      <p>Booking Hours</p>
                      <p>4 Hours</p>
                    </div>
                    <div className="Bdetails_inner">
                      <p>Start Time</p>
                      <p>09:00 AM</p>
                    </div>
                    <div className="Bdetails_inner">
                      <p>Passengers</p>
                      <p>4</p>
                    </div>
                    <div className="Bdetails_inner">
                      <p>Location</p>
                      <p>Miami beach, Florida, USA.</p>
                    </div>
                  </div>
                  <div className="my_trips_boat_owner">
                    <h3>Boat Owner</h3>
                    <div className="">
                      <div className="my_trips_boat_owner_box">
                        <div className="owner_name_desc">
                          <div className="owner_img_name">
                            <span className="owner_img">
                              <img src={ownerBoats} />
                            </span>
                            <div className="owner_name_text">
                              <h3>Marcus</h3>
                              <Link to="mailto:marcus@gmail.com">
                                marcus@gmail.com
                              </Link>
                              <Rating value="4" />
                            </div>
                          </div>
                          <Link to="#">
                            <img src={chatIcon} alt="chat" />
                          </Link>
                        </div>
                        <div className="owner_date">
                          <div>
                            <p>Average response time</p>
                            <p>Miami beach, Florida, USA.</p>
                          </div>
                          <span><i className="fa-solid fa-angle-right"></i> &nbsp;6 hrs</span>
                        </div>
                      </div>
                      <div className="cancel_booking_div">
                        <Link to="/trip-boats-inspection" className="btn book-now-btn incpection_btn">Inspection</Link>
                        <Link to="#" className="btn book-now-btn cancel_booking">Cancel Booking</Link>
                      </div>
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

export default MyTripsBoatsDetails;
