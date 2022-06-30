import React, { useEffect, useState } from "react";
import ImageUploading from "react-images-uploading";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../Notifications/Notifications.scss";
import { makeStyles, Select } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import SidebarBoats from "../Sidebar/SidebarBoats";
import chat1 from "../../Assets/RenterImages/chat1.png";
import chat2 from "../../Assets/RenterImages/chat2.png";
import chat3 from "../../Assets/RenterImages/chat3.png";
import chat4 from "../../Assets/RenterImages/chat4.png";
import chat5 from "../../Assets/RenterImages/chat5.png";
import Sidebar from "../Sidebar/Sidebar";
const Notifications = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  //   const addBoatDetailData = useSelector(
  //     (state) => state.createBoatReducer.addBoatDetail
  //   );

  //   let boatData =
  //     addBoatDetailData && addBoatDetailData.data && addBoatDetailData.data.boat;
  return (
    <>
      <div className="Notifications_main">
        {isLoading ? <div className="se-pre-con"></div> : ""}
        <Sidebar>
          <div className="add-new-boats-wrapper mob_notification">
            <h2 className="notify_heading">Notifications</h2>
            <div className="boat-card">
              <div className="notification_list_main active_list">
                <div className="notify_img_text">
                  <span>
                    <img src={chat1} />
                  </span>
                  <div className="chat_detail_text">
                    <h3>Ellen Lambert</h3>
                    <p>Hey! How's it going?</p>
                    <p>04:04AM</p>
                  </div>
                </div>
                <div className="dots_ellipse">
                  <i className="fa-solid fa-ellipsis"></i>
                </div>
              </div>
              {/* second list start  */}
              <div className="notification_list_main">
                <div className="notify_img_text">
                  <span>
                    <img src={chat2} />
                  </span>
                  <div className="chat_detail_text">
                    <h3>Ellen Lambert</h3>
                    <p>Hey! How's it going?</p>
                    <p>04:04AM</p>
                  </div>
                </div>
                <div className="dots_ellipse">
                  <i className="fa-solid fa-ellipsis"></i>
                </div>
              </div>
              {/* 3 list start  */}
              <div className="notification_list_main">
                <div className="notify_img_text">
                  <span>
                    <img src={chat3} />
                  </span>
                  <div className="chat_detail_text">
                    <h3>Ellen Lambert</h3>
                    <p>Hey! How's it going?</p>
                    <p>04:04AM</p>
                  </div>
                </div>
                <div className="dots_ellipse">
                  <i className="fa-solid fa-ellipsis"></i>
                </div>
              </div>
              {/* 4th list start  */}
              <div className="notification_list_main">
                <div className="notify_img_text">
                  <span>
                    <img src={chat4} />
                  </span>
                  <div className="chat_detail_text">
                    <h3>Ellen Lambert</h3>
                    <p>Hey! How's it going?</p>
                    <p>04:04AM</p>
                  </div>
                </div>
                <div className="dots_ellipse">
                  <i className="fa-solid fa-ellipsis"></i>
                </div>
              </div>
              {/* 5th list start  */}
              <div className="notification_list_main">
                <div className="notify_img_text">
                  <span>
                    <img src={chat5} />
                  </span>
                  <div className="chat_detail_text">
                    <h3>Ellen Lambert</h3>
                    <p>Hey! How's it going?</p>
                    <p>04:04AM</p>
                  </div>
                </div>
                <div className="dots_ellipse">
                  <i className="fa-solid fa-ellipsis"></i>
                </div>
              </div>
            </div>
          </div>
        </Sidebar>
      </div>
    </>
  );
};

export default Notifications;
