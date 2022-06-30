import React from "react";
import NavbarRenter from "../HomePageRenterSide/NavbarRenter/NavbarRenter";
import "./MessagesRenter.scss";
import chat1 from "../../../Assets/RenterImages/chat1.png";
import chat2 from "../../../Assets/RenterImages/chat2.png";
import chat3 from "../../../Assets/RenterImages/chat3.png";
import chat4 from "../../../Assets/RenterImages/chat4.png";
import chat5 from "../../../Assets/RenterImages/chat5.png";
import sendIcon from "../../../Assets/RenterImages/send-icon.svg";
import LastFooterRenter from "../HomePageRenterSide/LastFooterRenter/LastFooterRenter";
import SearchIcon from "@mui/icons-material/Search";

// new start improtrrt
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(1, 3),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "inline-block",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "3ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const MessagesRenter = () => {
  return (
    <>
      <NavbarRenter />
      <div className="renter-main-section">
        <div className="custom-container">
          <div className="messaging">
            <div className="inbox_msg">
              <div className="inbox_people">
                <div className="headind_srch">
                  <div className="recent_heading">
                    <h2 className="section-heding">My Chat</h2>
                  </div>
                  <div className="srch_bar">
                    <Search>
                      <SearchIconWrapper>
                        <SearchIcon />
                      </SearchIconWrapper>
                      <StyledInputBase
                        placeholder=""
                        inputProps={{ "aria-label": "search" }}
                      />
                    </Search>
                  </div>
                </div>
                <div className="inbox_chat">
                  <div className="chat_list">
                    <div className="chat_people">
                      <div className="chat_img">
                        <img src={chat1} alt="Ellen" />
                        <span className="show_msges">3</span>
                      </div>
                      <div className="chat_ib">
                        <h5>
                          Ellen Lambert
                          <span className="chat_date">04:04AM</span>
                        </h5>
                        <p>Hey! How's it going?</p>
                      </div>
                    </div>
                  </div>
                  <div className="chat_list">
                    <div className="chat_people">
                      <div className="chat_img">
                        <img src={chat2} alt="conner" />
                        <span className="show_msges">1</span>
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
                        <span className="show_active"></span>
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
                <div className="chatter_name">
                  <h3>Ellen Lambert</h3>
                </div>
                <div className="msg_history">
                  <ul className="msgs_history_dots">
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
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
        <LastFooterRenter />
      </div>
    </>
  );
};

export default MessagesRenter;
