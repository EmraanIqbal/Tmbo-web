import React, { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import "./RenterDocksBookingStepOne.scss";
import FooterRenter from "../../../HomePageRenterSide/FooterRenter/FooterRenter";
import LastFooterRenter from "../../../HomePageRenterSide/LastFooterRenter/LastFooterRenter";
import NavbarRenter from "../../../HomePageRenterSide/NavbarRenter/NavbarRenter";
import DocksOwner from "../../DocksDetails/DocksOwner/DocksOwner";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import DatePicker from "react-datepicker";
import LoginModal from "../../../../../Modals/LoginModal/LoginModal";
import ThankYouPopup from "../../../../../Modals/ThankYouPopup/ThankYouPopup";
import { useDispatch } from "react-redux";
import { dockBooking } from "../../../../../actions/RenterModuleActions/DockRenterAction/dockRenterAction";
import Payment from "../../../StripePaymentMethod/Payment";
const RenterDocksBookingStepOne = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { id } = useParams();

  console.log("location::>", location);
  const [age, setAge] = React.useState("");
  const [open, setOpen] = useState(false);
  const [openThankYou, setOpenThankYou] = useState(false);

  // console.log("props<::>", props);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [singlStartDate, setSingleStartDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  // for time picker
  const [startDateNew, setStartDate] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCloseThankyou = () => setOpenThankYou(false);

  const handleClick = async () => {
    let userInfo = JSON.parse(localStorage.getItem("userInfo"));

    const roleId = userInfo?.data?.user?.role_id;

    if (roleId == 4) {
      // alert("good");
      setIsLoading(true);
      // let data = {
      //   // start_date: singlStartDate,
      //   start_date: startDate,
      //   end_date: endDate,
      //   // stripe_token
      //   id: parseInt(id),
      // };

      // console.log("docksss::>>", data);
      // setOpenThankYou(true);
      await dispatch(dockBooking(id, endDate, startDate));

      // yahan pr thank you page wala model open kesey karwana ha?????
      // data-bs-toggle="modal"
      // data-bs-target="#thankyou_modal"
      setIsLoading(false);
    } else {
      setOpen(true);
    }
    // console.log("userInfo::>", token);
  };
  const [endDatee, setEndDate] = useState(null);

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <>
      {isLoading ? <div className="se-pre-con"></div> : ""}

      <div className="boats_booking_main">
        <NavbarRenter />
        <div className="custom-container">
          <div className="boats_booking_inner_box">
            <Link className="back_to_detail" to={`/docks-detail/${id}`}>
              <span>
                <i className="fa-solid fa-angle-left"></i>
              </span>
              Back
            </Link>
            <div className="boat_booking_center">
              <h2 className="boat_booking_text">Dock Booking</h2>
              <form id="msform">
                <ul id="progressbar">
                  <li className="approved approved2"></li>
                  <li className="approved"></li>
                </ul>
              </form>
              <h2>Enter your booking details</h2>
              {/* <form> */}
              {/* <h1>startDate : {startDate}</h1> */}
              {/* <h1>endDate : {endDate}</h1> */}
              <label>Select Your Date</label>
              {location.state.data == 0 ? (
                <DatePicker
                  selected={singlStartDate}
                  onChange={(date) => setSingleStartDate(date)}
                  placeholderText="Select your trip date"
                />
              ) : (
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
              )}
              {/* new data start here  */}
              <div className="some_notes">
                <p>
                  <i className="list_circle">●</i> This rentel has booked for 1
                  days. Additional charged will be applied if number of days
                  increased
                </p>
              </div>
              <div className="Total_cost_div">
                <h2>Total:</h2>
                <h2>
                  US$<span>100</span>
                </h2>
              </div>
              {/* <div className="heading_h2">
                <h2> Availability</h2>
              </div> */}
              <div className="booking_collapse_detail">
                {/* collapse start here  */}
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  {/* <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        Monday
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse ccollapse show"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <div className="avail_time_box">
                          <p>
                            Start Time:9:00 am <br /> End Time:5:00 am
                          </p>
                        </div>
                        <div className="avail_time_box">
                          <p>
                            Start Time:9:00 am <br /> End Time:5:00 am
                          </p>
                        </div>
                        <div className="avail_time_box">
                          <p>
                            Start Time:9:00 am <br /> End Time:5:00 am
                          </p>
                        </div>
                        <div className="avail_time_box">
                          <p>
                            Start Time:9:00 am <br /> End Time:5:00 am
                          </p>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <div className="accordion-item">
                    <h2
                      className="accordion-header includes_tax"
                      id="flush-headingTwo"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        includes taxes + fees
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <div className="cost_details_main">
                          <div className="cost_details_inner">
                            <p>
                              US$200.00 <span>*</span> 4 day
                            </p>
                            <p>US $ 115.81</p>
                          </div>
                          <div className="cost_details_inner">
                            <p>Prefer protection Package</p>
                            <p>US $ 115.81</p>
                          </div>
                          <div className="cost_details_inner">
                            <p>service fee</p>
                            <p>US $ 225.00</p>
                          </div>
                          <div className="cost_details_inner">
                            <p>prep fee</p>
                            <p>US $ 115.81</p>
                          </div>
                          <div className="cost_details_inner">
                            <p>200 miles per day</p>
                            <p>free</p>
                          </div>
                          <div className="cost_details_inner">
                            <p>4 generator hours day</p>
                            <p>free</p>
                          </div>
                          <div>
                            <span className="will_charged">
                              You will be charged US$5.0 for every hour per day
                            </span>
                          </div>
                          <div className="Total_cost_div">
                            <h2>Total:</h2>
                            <h2>
                              US$<span>100</span>
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end collapse  */}
              </div>
              {/* end new data  */}
              <Payment
                start_date={startDate || singlStartDate}
                end_date={endDate || singlStartDate}
                id={id}
              />

              {/* <DatePicker
                selected={startDate}
                onChange={onChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                inline
              /> */}
              {/* <div className="form-group">
                  <label>Select booking</label>
                  <FormControl className="custom_select_main">
                    <Select
                      className="w-100 select_down"
                      value={age}
                      onChange={handleChange}
                      displayEmpty
                    >
                      <MenuItem value="">
                        <em>Select</em>
                      </MenuItem>
                      <MenuItem value={10}>
                        <Link to="/docks-booking-two">Custom</Link>
                      </MenuItem>
                      <MenuItem value={20}>
                        <Link to="/docks-booking-three">Monthly</Link>
                      </MenuItem>
                      <MenuItem value={30}>
                        {" "}
                        <Link to="/docks-booking-four">Seasonal</Link>
                      </MenuItem>
                      <MenuItem value={30}>
                        <Link to="/docks-booking-five">Yearly</Link>
                      </MenuItem>
                    </Select>
                  </FormControl>
                </div> */}
              {/* <div className="booking_next">
                <button onClick={handleClick} className="blue_btn m-0">
                  Send Request
                </button>
              </div> */}
              {/* </Link> */}
              {/* </form> */}
            </div>
          </div>
        </div>
        {/* <DocksOwner /> */}
        <FooterRenter />
        <LastFooterRenter />
      </div>
      <LoginModal open={open} handleClose={handleClose} />
      <ThankYouPopup open={openThankYou} handleClose={handleCloseThankyou} />
    </>
  );
};

export default RenterDocksBookingStepOne;
