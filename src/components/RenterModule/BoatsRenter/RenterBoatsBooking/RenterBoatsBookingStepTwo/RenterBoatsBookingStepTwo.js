import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./RenterBoatsBookingStepTwo.scss";
import FooterRenter from "../../../HomePageRenterSide/FooterRenter/FooterRenter";
import LastFooterRenter from "../../../HomePageRenterSide/LastFooterRenter/LastFooterRenter";
import NavbarRenter from "../../../HomePageRenterSide/NavbarRenter/NavbarRenter";
import BoatsDetailsOwner from "../../../BoatsDetails/BoatsDetailsOwner/BoatsDetailsOwner";
const RenterBoatsBookingStepTwo = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/edit-profile-renter");
  };
  return (
    <>
      <div className="boats_booking_main">
        <NavbarRenter />

        <div className="custom-container">
          <div className="boats_booking_inner_box">
            <Link className="back_to_detail" to="/boats-booking">
              <span>
                <i className="fa-solid fa-angle-left"></i>
              </span>
              Back
            </Link>
            <div className="boat_booking_center">
              <h2 className="boat_booking_text">Boat Booking</h2>
              <form id="msform">
                <ul id="progressbar">
                  <li className="approved approved2"></li>
                  <li className="approved"></li>
                </ul>
              </form>
              <div className="my_trips_booking_details">
                <h3>Booking Details</h3>
                <Link to="#" className="edit_booking_btn blue_btn">
                  Edit Booking
                </Link>
                <div className="Bdetails_inner">
                  <p>Start Date</p>
                  <p>Aug 19, 2021</p>
                </div>
                <div className="Bdetails_inner">
                  <p>End Date</p>
                  <p>Aug 20, 2021</p>
                </div>
                <div className="Bdetails_inner">
                  <p>Booking Hours</p>
                  <p>4 Hours</p>
                </div>
                <div className="Bdetails_inner">
                  <p>Start Time</p>
                  <p>09:00 AM</p>
                </div>
                <div className="Bdetails_inner">
                  <p>Passengers</p>
                  <p>4</p>
                </div>
                <div className="Bdetails_inner">
                  <p>Location</p>
                  <p>Miami beach, Florida, USA.</p>
                </div>
                <div className="Bdetails_inner">
                  <p>Total</p>
                  <h3>$3400</h3>
                </div>
              </div>
              <div className="text-center">
                <Link
                  to="#"
                  data-bs-toggle="modal"
                  data-bs-target="#complete_booking_modal"
                  className="blue_btn send_book_request"
                >
                  Send Booking Request
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="complete_booking_modal"
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
                <h3>
                  Complete Your Booking <br /> Please Complete Your Profile
                  First
                </h3>
              </div>
              <div className="modal-footer">
                <button
                  className="btn blue_btn"
                  onClick={() => navigate("/edit-profile-renter")}
                  data-bs-dismiss="modal"
                >
                  Complete Profile
                </button>
              </div>
            </div>
          </div>
        </div>
        <BoatsDetailsOwner />
        <FooterRenter />
        <LastFooterRenter />
      </div>
    </>
  );
};

export default RenterBoatsBookingStepTwo;
