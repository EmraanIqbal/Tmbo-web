import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./DocksOwnerProfile.scss";
import LastFooterRenter from "../../HomePageRenterSide/LastFooterRenter/LastFooterRenter";
import NavbarRenter from "../../HomePageRenterSide/NavbarRenter/NavbarRenter";
import ExpOwner from "../../../../Assets/RenterImages/owner-pro.png";
import Rating from "../../../Dashboard/Rating";
import Chaticon from "../../../../Assets/RenterImages/chat-icon.png";
import chat1 from "../../../../Assets/RenterImages/chat1.png";
import sendIcon from "../../../../Assets/RenterImages/send-icon.svg";
import ChatWith from "./ChatWith/ChatWith";
const DocksOwnerProfile = () => {
  return (
    <>
      <div className="boats_booking_main">
        <NavbarRenter />

        <div className="custom-container">
          <div className="edit_pro_back">
            <Link className="back_to_detail" to="/docks-booking-details">
              <span>
                <i className="fa-solid fa-angle-left"></i>
              </span>
              Back
            </Link>
            <h2 className="complete_profile_text">Dock Owner Profile</h2>
          </div>
          <div className="boats_booking_inner_box">
            <div className="">
              <div className="experience_owner_details">
                <div className="exp_owner_img_outer">
                  <div className="exp_owner_img">
                    <img src={ExpOwner} alt="owner-pro" />
                  </div>
                  <p>Marcus Marcus</p>
                  <Rating value={4} />
                </div>
                <div className="exp_chat_with">
                  <p>Chat With</p>
                  <Link
                    to="#"
                    data-bs-toggle="modal"
                    data-bs-target="#ChatWthPopup"
                  >
                    <img src={Chaticon} alt="Chaticon" />
                  </Link>
                </div>

                <div className="Bdetails_inner">
                  <p>
                    First Name <br /> <small>Marcus</small>
                  </p>
                  <p>
                    Last Name <br /> <small>Marcus</small>
                  </p>
                </div>
                <div className="Bdetails_inner">
                  <p>
                    Phone <br /> <small>123-456-789-0</small>
                  </p>
                  <p>
                    Email <br /> <small>marcus@gmail.com</small>
                  </p>
                </div>
                <div className="Bdetails_inner">
                  <p>
                    Average response time
                    <br /> <small>12 hours</small>
                  </p>
                  <p>
                    Address
                    <br /> <small>Miami beach, Florida, USA.</small>
                  </p>
                </div>
                <div className="Bdetails_inner">
                  <p>
                    City
                    <br /> <small>Los Angeles</small>
                  </p>
                  <p>
                    State
                    <br /> <small>California</small>
                  </p>
                </div>
                <div className="Bdetails_inner">
                  <p>
                    Zip Code
                    <br /> <small>94203</small>
                  </p>
                </div>
                <Link to="#" className="blue_btn view_docks">
                  View docks
                </Link>
              </div>
            </div>
          </div>
          {/* Chat with popup  */}
          <ChatWith/>
        </div>
        <LastFooterRenter />
      </div>
    </>
  );
};

export default DocksOwnerProfile;
