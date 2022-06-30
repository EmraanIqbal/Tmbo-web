import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./RenterBoatsBooking.scss";
import FooterRenter from "../../HomePageRenterSide/FooterRenter/FooterRenter";
import LastFooterRenter from "../../HomePageRenterSide/LastFooterRenter/LastFooterRenter";
import NavbarRenter from "../../HomePageRenterSide/NavbarRenter/NavbarRenter";
import BoatsDetailsOwner from "../../BoatsDetails/BoatsDetailsOwner/BoatsDetailsOwner";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const RenterBoatsBooking = () => {
  let { id } = useParams();
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  // for time picker
  const [startDateNew, setStartDate] = useState(new Date());

  return (
    <>
      <div className="boats_booking_main">
        <NavbarRenter />

        <div className="custom-container">
          <div className="boats_booking_inner_box">
            <Link className="back_to_detail" to={`/boat-detail/${id}`}>
              <span>
                <i className="fa-solid fa-angle-left"></i>
              </span>
              Back
            </Link>
            <div className="boat_booking_center">
              <h2 className="boat_booking_text">Boat Booking</h2>
              <form id="msform">
                <ul id="progressbar">
                  <li className="approved"></li>
                  <li className=""></li>
                </ul>
              </form>
              <h2>Enter your booking details</h2>
              <form>
                <div className="form-group">
                  <label>Date</label>
                  <input
                    className="form-control calender_input"
                    type="text"
                    data-bs-toggle="modal"
                    data-bs-target="#calenderModal"
                  />
                </div>
                <div className="form-group">
                  <label>Start time</label>
                  <input
                    className="form-control time_icon"
                    type="text"
                    data-bs-toggle="modal"
                    data-bs-target="#timeModal"
                  />
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Select hours</label>
                      <span className="number-wrapper">
                        <input type="number" placeholder="4" />
                      </span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Select Passenger</label>
                      <span className="number-wrapper">
                        <input type="number" placeholder="4" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="booking_next">
                  <Link to="/boats-booking-two" className="blue_btn">
                    Next
                  </Link>
                  <div className="booking_total_div">
                    <p>Total:</p>
                    <h3>$3400</h3>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="calenderModal"
          tabindex="-1"
          aria-labelledby="calenderModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h2>Select your trip date</h2>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <DatePicker
                  placeholderText="Select your trip date"
                  selectsRange={true}
                  startDate={startDate}
                  endDate={endDate}
                  onChange={(update) => {
                    setDateRange(update);
                  }}
                  isClearable={true}
                />
              </div>
              <div className="modal-footer">
                <Link
                  to="/boats-booking-two"
                  className="btn blue_btn"
                  data-bs-dismiss="modal"
                >
                  Apply
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* time picker modal stert  */}
        <div
          className="modal fade"
          id="timeModal"
          tabindex="-1"
          aria-labelledby="timeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h2>Select your trip start time</h2>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <DatePicker
                  selected={startDateNew}
                  onChange={(date) => setStartDate(date)}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={15}
                  timeCaption="Time"
                  dateFormat="h:mm aa"
                />
              </div>
              <div className="modal-footer">
                <Link
                  to="/boats-booking-two"
                  className="btn blue_btn"
                  data-bs-dismiss="modal"
                >
                  Apply
                </Link>
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

export default RenterBoatsBooking;
