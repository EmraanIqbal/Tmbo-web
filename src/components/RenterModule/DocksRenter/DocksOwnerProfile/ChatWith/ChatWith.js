import React, { useState } from "react";
import "../ChatWith/ChatWith.scss";
import chat1 from "../../../../../Assets/RenterImages/chat1.png";
import sendIcon from "../../../../../Assets/RenterImages/send-icon.svg";
const ChatWith = () => {
  return (
    <>
      <div className="custom-container">
        {/* Chat with popup  */}
        <div
          className="modal fade"
          id="ChatWthPopup"
          tabindex="-1"
          aria-labelledby="ChatWthPopup"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="chat_header">Ellen Lambert</h2>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="owner_chat_with">
                  <div className="mesgs">
                    <div className="msg_history">
                      <div className="outgoing_msg">
                        <div className="sent_msg">
                          <p>Hi Ellen! How was your day?</p>
                          <span className="time_date"> 5:18 PM</span>
                        </div>
                      </div>
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
        </div>
      </div>
    </>
  );
};

export default ChatWith;
