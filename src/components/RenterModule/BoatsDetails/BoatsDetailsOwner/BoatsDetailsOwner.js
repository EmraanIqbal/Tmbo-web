import React from "react";
import "./BoatsDetailsOwner.scss";
import chatIcon from "../../../../Assets/RenterImages/chat-icon.png";
import ownerProfile from "../../../../Assets/RenterImages/owner-pro.png";
import Rating from "../../../Dashboard/Rating";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import ChatWith from "../../DocksRenter/DocksOwnerProfile/ChatWith/ChatWith";

const BoatsDetailsOwner = (props) => {
  const user = props?.details?.user || [];
  console.log("props::>", user);
  return (
    <>
      <section className="boat_detail_owner_main">
        <div className="custom-container">
          <div className="boats_detail_owner_inner">
            <div className="d-flex justify-content-between flex-wrap">
              <h2 className="section-heding">Boat Owner</h2>
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
                  {user.image === null ? (
                    // <Avatar sx={{ width: 70, height: 70 }} />
                    <img
                      // src={user.image === null ? <Avatar /> : user.image}
                      src={ownerProfile}
                      // alt="owner-img"
                    />
                  ) : (
                    <img
                      // src={user.image === null ? <Avatar /> : user.image}
                      src={ownerProfile}
                      // alt="owner-img"
                    />
                  )}
                </div>
                <div className="boats_owner_detail">
                  <h3>{user.first_name}</h3>
                  <p>{user.email}</p>
                  {/* <p>{props.details.address}</p> */}
                </div>
              </div>
              <Rating value={4} />
            </div>
          </div>
          <ChatWith />
        </div>
      </section>
    </>
  );
};

export default BoatsDetailsOwner;
