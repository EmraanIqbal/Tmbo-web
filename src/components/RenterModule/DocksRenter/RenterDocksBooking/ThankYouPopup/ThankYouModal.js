import React from "react";
import { Link, useNavigate } from "react-router-dom";
import thankyouImg from "../../../../../Assets/RenterImages/thankyou.png";
import "./ThankYouModal.scss";
const ThankYouPopup = () => {
  return (
    <>
      <div
        className="modal fade"
        id="thankyou_modal"
        tabindex="-1"
        aria-labelledby="calenderModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="text-center thankyou_img">
                <img src={thankyouImg} alt="thankyou" />
              </div>
              <h3>
                Thanks! <br /> Your booking request sent!
              </h3>
              <h3>
                Your booking request have been sent to TMBO! Boat Owner, we will
                notify you when your booking being confirmed. Thanks!
              </h3>
            </div>
            <div className="modal-footer">
              <button className="btn blue_btn" data-bs-dismiss="modal">
                View Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThankYouPopup;
