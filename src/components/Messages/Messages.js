import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import chat1 from "../../Assets/RenterImages/chat1.png";
import chat2 from "../../Assets/RenterImages/chat2.png";
import chat3 from "../../Assets/RenterImages/chat3.png";
import chat4 from "../../Assets/RenterImages/chat4.png";
import chat5 from "../../Assets/RenterImages/chat5.png";
import sendIcon from "../../Assets/RenterImages/send-icon.svg";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";

import "../Messages/Messages.scss";
const Messages = () => {
  return (
    <Sidebar>
      <div className="messages_owner_main">
        <div className="renter-main-section">
          <div className="messaging">
            <div className="inbox_msg">
              <div className="inbox_people">
                <div className="headind_srch">
                  <div className="type_msg">
                    <div className=" input_search_person">
                      <input
                        type="search"
                        className=""
                        placeholder="Search..."
                      />
                      <button className="btn" type="button">
                        <SearchIcon />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="inbox_chat">
                  <div className="chat_list">
                    <div className="chat_people">
                      <div className="chat_img">
                        <img src={chat1} alt="Ellen" />
                        <span className="show_active"></span>
                      </div>
                      <div className="chat_ib">
                        <h5>
                          Ellen Lambert
                          <span className="chat_date">04:04AM</span> <br/>
                          <span><i className="fa-solid fa-ellipsis"></i></span>
                        </h5>
                        <p>Hey! How's it going?</p>
                      </div>
                    </div>
                  </div>
                  <div className="chat_list">
                    <div className="chat_people">
                      <div className="chat_img">
                        <img src={chat2} alt="conner" />
                        <span className="show_active"></span>
                      </div>
                      <div className="chat_ib">
                        <h5>
                          Connor Frazier
                          <span className="chat_date">08:58PM</span>
                        </h5>
                        <p>What kind of music do you like?</p>
                      </div>
                    </div>
                  </div>
                  <div className="chat_list">
                    <div className="chat_people">
                      <div className="chat_img">
                        <img src={chat3} alt="jessy" />
                        <span className="show_msges"></span>
                      </div>
                      <div className="chat_ib">
                        <h5>
                          Josephine Gordon
                          <span className="chat_date">11:33PM</span>
                        </h5>
                        <p>TSounds good to me!</p>
                      </div>
                    </div>
                  </div>
                  <div className="chat_list">
                    <div className="chat_people">
                      <div className="chat_img">
                        <img src={chat4} alt="jessy" />
                      </div>
                      <div className="chat_ib">
                        <h5>
                          Timothy Steele{" "}
                          <span className="chat_date">06:58PM</span>
                        </h5>
                        <p>Hi Tina. How's your night going?</p>
                      </div>
                    </div>
                  </div>
                  <div className="chat_list">
                    <div className="chat_people">
                      <div className="chat_img">
                        <img src={chat5} alt="jessy" />
                      </div>
                      <div className="chat_ib">
                        <h5>
                          Lou Quinn <span className="chat_date">09:43PM</span>
                        </h5>
                        <p>What did you do over the weekend?</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mesgs">
                <div className="owner_chatter_upper_div">
                  <div className="owner_chatter_name">
                    <span>
                      <img src={chat1} />
                      <i className="detail_active"></i>
                    </span>
                    
                    <h3>Ellen Lambert</h3>
                  </div>
                  <div className="">
                    <IconButton
                      size="large"
                      aria-label="show 17 new notifications"
                      color="inherit"
                    >
                      <Badge badgeContent={7} color="error">
                        <NotificationsIcon />
                      </Badge>
                    </IconButton>
                    <span className="vertical_ellipse">
                      <i className="fa-solid fa-ellipsis-vertical"></i>
                    </span>
                  </div>
                </div>
                <div className="msg_history owner_msg_history">
                  <div className="incoming_msg">
                    <div className="incoming_msg_img">
                      <img src={chat1} alt="jessy" />
                    </div>
                    <div className="received_msg">
                      <div className="received_withd_msg">
                        <p>
                          Hi dear! Wery nice, but i miss you, Do you see
                          somthing interesting today? 😔
                        </p>
                        <span className="time_date"> 5:15 PM</span>
                      </div>
                    </div>
                  </div>
                  <div className="incoming_msg">
                    <div className="incoming_msg_img"></div>
                    <div className="received_msg">
                      <div className="received_withd_msg">
                        <p>
                          Hi dear! Wery nice, but i miss you, Do you see
                          somthing interesting today? 😔
                        </p>
                        <span className="time_date"> 5:18 PM</span>
                      </div>
                    </div>
                  </div>
                  <div className="outgoing_msg">
                    <div className="sent_msg">
                      <p>Test which is a new approach to have all solutions</p>
                      <span className="time_date"> 5:18 PM</span>
                    </div>
                  </div>
                  <div className="incoming_msg">
                    <div className="incoming_msg_img">
                      <img
                        src="https://ptetutorials.com/images/user-profile.png"
                        alt="sunil"
                      />
                    </div>
                    <div className="received_msg">
                      <div className="received_withd_msg">
                        <p>Test, which is a new approach to have</p>
                        <span className="time_date"> 5:20 PM</span>
                      </div>
                    </div>
                  </div>
                  <div className="outgoing_msg">
                    <div className="sent_msg">
                      <p>Apollo University, Delhi, India Test</p>
                      <span className="time_date"> 5:22 PM</span>
                    </div>
                  </div>
                </div>
                <div className="type_msg">
                  <div className="input_msg_write">
                    <span>
                      <i className="fa-solid fa-paperclip"></i>
                    </span>
                    <input
                      type="text"
                      className="write_msg"
                      placeholder="Type a message"
                    />
                    <button className="msg_send_btn" type="button">
                      <img src={sendIcon} alt="sendme" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default Messages;
