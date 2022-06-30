import React from "react";
// import "./BoatsDetailsOwner.scss";
import chatIcon from "../../../../Assets/RenterImages/chat-icon.png";
import ownerProfile from "../../../../Assets/RenterImages/owner-pro.png";
import Rating from "../../../Dashboard/Rating";
import { Link } from "react-router-dom";

const ExperienceBoatOwner = () => {
  return (
    <>
      <section className="boat_detail_owner_main">
        <div className="custom-container">
          <div className="boats_detail_owner_inner">
            <Link to="/experience-boat-owner-details">
              <div className="d-flex justify-content-between flex-wrap">
                <h2 className="section-heding">Dock Owner</h2>
                <div className="response_time">
                  <p>Response time</p>
                  <p>
                    <i className="fa-solid fa-chevron-left"></i>1 hrs{" "}
                  </p>
                  <div className="boat_chat_icon">
                    <span>
                      <Link to="#">
                        <img src={chatIcon} alt="chat-icon" />
                      </Link>
                    </span>
                  </div>
                </div>
                <div className="boats_owner_profile">
                  <div className="boats_owner_img">
                    <img src={ownerProfile} alt="owner-img" />
                  </div>
                  <div className="boats_owner_detail">
                    <h3>Marcus</h3>
                    <p>marcus@gmail.com</p>
                    <p>Miami beach, Florida, USA.</p>
                  </div>
                </div>
                <Rating value={4} />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExperienceBoatOwner;
