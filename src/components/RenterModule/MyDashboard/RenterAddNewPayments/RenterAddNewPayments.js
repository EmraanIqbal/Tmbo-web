import React from "react";
import NavbarRenter from "../../HomePageRenterSide/NavbarRenter/NavbarRenter";
import "./RenterAddNewPayments.scss";
import { Formik, Field, Form, ErrorMessage } from "formik";
import ImageUploading from "react-images-uploading";
import UploadImage from "../../../../Assets/RenterImages/boats-detail.png";

import LastFooterRenter from "../../HomePageRenterSide/LastFooterRenter/LastFooterRenter";
import { Link } from "react-router-dom";
import MyDashboardSidebar from "../MyDashboardSidebar/MyDashboardSidebar";
import { Label } from "@material-ui/icons";
const RenterAddNewPayments = () => {
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
                <div className="renter_addnew_payments_mian">
                  <h1>Add Payment Method</h1>
                  <form className="add_new_payments_form">
                    <div className="form-group">
                      <label>Name on Card</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Marcus"
                      />
                    </div>
                    <div className="form-group">
                      <label>Card Number</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="123-456-789-0"
                      />
                    </div>
                    <div className="row">
                      <div className="col-md-6 pe-0">
                        <div className="form-group">
                          <label>CVV Code</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="987"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Expiry Date</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="01-01-2025"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="inputGroup">
                        <input
                          id="remembarcard"
                          name="option1"
                          type="checkbox"
                        />
                        <label className="Rember_card_label" for="remembarcard">
                          Remember this card information
                        </label>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center add_new_save">
                        <button className="btn blue_btn " type="submit">Save</button>
                    </div>
                  </form>
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

export default RenterAddNewPayments;
