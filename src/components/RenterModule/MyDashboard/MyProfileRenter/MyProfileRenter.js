import React from "react";
import NavbarRenter from "../../HomePageRenterSide/NavbarRenter/NavbarRenter";
import "./MyProfileRenter.scss";
import dbprofileImage from "../../../../Assets/RenterImages/owner-pro.png";
import LastFooterRenter from "../../HomePageRenterSide/LastFooterRenter/LastFooterRenter";
import { Link } from "react-router-dom";
import MyDashboardSidebar from "../MyDashboardSidebar/MyDashboardSidebar";
const MyProfileRenter = () => {
  return (
    <>
      <NavbarRenter />
      <div className="renter-main-section">
        <div className="custom-container">
          <div className="my_dsahboard_main">
            <div className="my_dsahboard_inner">
              <MyDashboardSidebar/>
              <div className="my_dashboard_detail">
                <div className="my_profile_hed">
                  <h3>My Profile</h3>
                </div>
                <div className="dashboards_history">
                  <div className="profile_inner_section">
                    <div className="edit-profile">
                      <span>
                        <i className="fa-solid fa-pen-to-square"></i>
                      </span>
                    </div>
                    <div className="db_profile_name_img">
                      <div className="my_db_pro_img">
                        <img src={dbprofileImage} />
                      </div>
                      <h3>Marcus</h3>
                    </div>
                    <div className="profile_detail">
                      <div className="profile_info">
                        <div className="profile_info_names">
                          <h3>First Name</h3>
                          <p>Marcus</p>
                        </div>
                        <div className="profile_info_names">
                          <h3>Last Name</h3>
                          <p>Marcus</p>
                        </div>
                        <div className="profile_info_names">
                          <h3>Phone</h3>
                          <p>123-456-789-0</p>
                        </div>
                        <div className="profile_info_names">
                          <h3>Email</h3>
                          <p>tmbo@gmail.com</p>
                        </div>
                        <div className="profile_info_names">
                          <h3>City</h3>
                          <p>Los Angeles</p>
                        </div>
                        <div className="profile_info_names">
                          <h3>State</h3>
                          <p>California</p>
                        </div>
                        <div className="profile_info_names">
                          <h3>Zip Code</h3>
                          <p>94203</p>
                        </div>
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

export default MyProfileRenter;
