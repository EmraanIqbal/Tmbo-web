import React from "react";
import NavbarRenter from "../../HomePageRenterSide/NavbarRenter/NavbarRenter";
import "./RenterPayments.scss";
import { Formik, Field, Form, ErrorMessage } from "formik";
import ImageUploading from "react-images-uploading";
import UploadImage from "../../../../Assets/RenterImages/boats-detail.png";

import LastFooterRenter from "../../HomePageRenterSide/LastFooterRenter/LastFooterRenter";
import { Link } from "react-router-dom";
import MyDashboardSidebar from "../MyDashboardSidebar/MyDashboardSidebar";
const RenterPayments = () => {
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
                  <h3>Payments</h3>
                </div>
                <div className="renter_payments_mian">
                  <div className="payments_add_new">
                    <h3>Payments</h3>
                    <Link to="/addnew-payments" className="btn add_new_p_btn">
                      <i className="fa-solid fa-circle-plus"></i> Add New
                    </Link>
                  </div>
                  <Link to="#" className="payment_link form-control">
                    <span>Payment 1</span>
                    <i className="fa-solid fa-angle-right"></i>
                  </Link>
                  <Link to="#" className="payment_link form-control">
                    <span>Payment 2</span>
                    <i className="fa-solid fa-angle-right"></i>
                  </Link>
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

export default RenterPayments;
