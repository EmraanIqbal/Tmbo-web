import React from "react";
import NavbarRenter from "../../HomePageRenterSide/NavbarRenter/NavbarRenter";
import "./RenterNotificationSettings.scss";
import { Formik, Field, Form, ErrorMessage } from "formik";
import ImageUploading from "react-images-uploading";
import UploadImage from "../../../../Assets/RenterImages/boats-detail.png";

import LastFooterRenter from "../../HomePageRenterSide/LastFooterRenter/LastFooterRenter";
import { Link } from "react-router-dom";
import MyDashboardSidebar from "../MyDashboardSidebar/MyDashboardSidebar";
import { Label } from "@material-ui/icons";
const RenterNotificationSettings = () => {
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
                  <h3>Notification Settings</h3>
                </div>
                <div className="renter_notification_settings_mian">
                  <div className="reminder_div">
                    <h3>Reminder notifications</h3>
                    <label className="switch">
                      <input type="checkbox" id="togBtn" />
                      <div className="slider round"></div>
                    </label>
                  </div>
                  <div className="reminder_div border border-0">
                    <h3>Reservation notifications</h3>
                    <label className="switch">
                      <input type="checkbox" id="togBtn" />
                      <div className="slider round"></div>
                    </label>
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

export default RenterNotificationSettings;
