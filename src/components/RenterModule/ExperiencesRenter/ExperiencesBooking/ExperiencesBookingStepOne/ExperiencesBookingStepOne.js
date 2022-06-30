import React, { useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./ExperiencesBookingStepOne.scss";
import FooterRenter from "../../../HomePageRenterSide/FooterRenter/FooterRenter";
import LastFooterRenter from "../../../HomePageRenterSide/LastFooterRenter/LastFooterRenter";
import NavbarRenter from "../../../HomePageRenterSide/NavbarRenter/NavbarRenter";
import { Typography } from "@material-ui/core";
import {
  experienceBooking,
  experienceBookingSlots,
} from "../../../../../actions/RenterModuleActions/experienceRenterAction/experienceRenterAction";
import { useDispatch, useSelector } from "react-redux";
import {
  RadioButton,
  RadioButtonGroup,
} from "../../../../AddNewBoats/RadioInput";
import { Divider } from "@mui/material";
// import ExperienceDetails from "../../ExperienceDetails/ExperienceDetails";
import ExperienceDetailsOwner from "../../ExperienceDetails/ExperienceDetailsOwner/ExperienceDetailsOwner";
import ThankYouPopup from "../../../../../Modals/ThankYouPopup/ThankYouPopup";
import LoginModal from "../../../../../Modals/LoginModal/LoginModal";
import Payment from "../../../StripePaymentMethod/Payment";

const ExperiencesBookingStepOne = () => {
  let location = useLocation();
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState({
    selectHour: "",
    start_time: "",
    end_time: "",
    date: "",
    slot_start_time: "",
    slot_end_time: "",
  });
  console.log("location::>", location);
  const makeRequest = (formData) => {
    console.log("Form Submitted", formData);
  };

  const hanleNextStep = (newData, final = false) => {
    console.log(newData);
    setData((prev) => ({ ...prev, ...newData }));
    if (final) {
      makeRequest(newData);
      return;
    }
    setCurrentStep((prev) => prev + 1);
  };

  const hanlePrevStep = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };

  const steps = [
    <StepZero next={hanleNextStep} data={data} />,
    <StepOne
      next={hanleNextStep}
      prev={hanlePrevStep}
      data={data}
      location={location?.state?.data}
    />,

    <StepTwo next={hanleNextStep} prev={hanlePrevStep} data={data} />,
    <StepThree next={hanleNextStep} prev={hanlePrevStep} data={data} />,
  ];

  return (
    <>
      <div className="boats_booking_main">
        <NavbarRenter />

        {steps[currentStep]}
        <FooterRenter />
        <LastFooterRenter />
      </div>
    </>
  );
};

export default ExperiencesBookingStepOne;

const StepZero = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  let { id } = useParams();
  const expId = useSelector(
    (state) => state.experienceRenterReducer.experienceDetails
  );
  const handleclick = () => {
    navigate(`/experience-booking/${id}`);
  };
  // let id = expId?.data?.experience?.id;
  // console.log("expId::>", id);

  const handleSubmit = async (values) => {
    setIsLoading(true);

    let bookingData = {
      id: id,
      hours: values.selectHour,
      start_time: values.start_time,
      end_time: values.end_time,
      date: values.date,
    };
    console.log("values::>", bookingData);

    // await dispatch(experienceBookingSlots(bookingData));
    props.next(values);
    setIsLoading(false);
  };
  return (
    <>
      <>
        {isLoading ? <div className="se-pre-con"></div> : ""}

        <Formik
          initialValues={props.data}
          onSubmit={handleSubmit}
          validationSchema={Yup.object().shape({
            date: Yup.string().required("Date required"),
            // year: Yup.string().required("Year required"),

            start_time: Yup.string().required("Start Time required"),
            end_time: Yup.string().required("End Time required"),
            selectHour: Yup.string().required("Hours required"),
          })}

          // initialValues={{ ...this.props.location }}
          // onSubmit={(fields) => {
          //   alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4));
          // }}
        >
          {({
            errors,
            status,
            touched,
            values,
            setFieldValue,
            handleBlur,
            isValid,
            dirty,
          }) => (
            <Form>
              <div className="custom-container">
                <div className="boats_booking_inner_box">
                  {/* <Link className="back_to_detail" to="/experience-detail"> */}
                  <div
                    className="back_to_detail"
                    onClick={() => navigate(`/experience-details/${id}`)}
                    style={{ cursor: "pointer" }}
                  >
                    <span>
                      <i className="fa-solid fa-angle-left"></i>
                    </span>
                    Back
                  </div>
                  {/* </Link> */}
                  <div className="boat_booking_center">
                    <h2 className="boat_booking_text">Request to Experience</h2>
                    <form id="msform">
                      <ul id="progressbar">
                        <li className="approved"></li>
                        <li className=""></li>
                      </ul>
                    </form>
                    <h2>Enter your booking details</h2>

                    {/* <div className="form-group">
                        <label>Date</label>
                        <input
                          className="form-control calender_input"
                          type="text"
                          data-bs-toggle="modal"
                          data-bs-target="#calenderModal"
                        />
                      </div> */}
                    <div className="form-group">
                      <label htmlFor="date">Experience Date</label>
                      <Field
                        name="date"
                        type="date"
                        className={
                          "form-control calender_input" +
                          (errors.date && touched.date ? " is-invalid" : "")
                        }
                      />
                      {/* <DatePicker
                        className="form-control calender_input"
                        placeholderText="Date"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        // monthsShown={2}
                      /> */}
                      <ErrorMessage
                        name="date"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="form-group select_hours_main">
                      <label htmlFor="date">Select Hours for booking</label>
                      <RadioButtonGroup
                        id="selectHour"
                        // label='One of these please'
                        value={values.selectHour}
                        error={errors.selectHour}
                        touched={touched.selectHour}
                      >
                        <Field
                          component={RadioButton}
                          name="selectHour"
                          id="2"
                          label="&nbsp; 2 Hour"
                        />
                        <Field
                          component={RadioButton}
                          name="selectHour"
                          id="4"
                          label="&nbsp; 4 Hour"
                        />
                        <Field
                          component={RadioButton}
                          name="selectHour"
                          id="6"
                          label="&nbsp; 6 Hour"
                        />
                        <Field
                          component={RadioButton}
                          name="selectHour"
                          id="8"
                          label="&nbsp; 8 Hour"
                        />
                      </RadioButtonGroup>
                      <p className="should_equal_text">
                        Start and end time interval should be equal to the above
                        selected hour
                      </p>
                    </div>
                    {/* <div className="form-group">
                      <label>Start time</label>
                      <input className="form-control" type="time" />
                    </div> */}
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="start_time">
                            Experience Start time
                          </label>
                          <Field
                            name="start_time"
                            type="time"
                            // data-bs-toggle="modal"
                            // data-bs-target="#calenderModal"
                            className={
                              "form-control " +
                              (errors.start_time && touched.start_time
                                ? " is-invalid"
                                : "")
                            }
                          />
                          <ErrorMessage
                            name="start_time"
                            component="div"
                            className="invalid-feedback"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="end_time">Experience End time</label>
                          <Field
                            name="end_time"
                            type="time"
                            // data-bs-toggle="modal"
                            // data-bs-target="#calenderModal"
                            className={
                              "form-control" +
                              (errors.end_time && touched.end_time
                                ? " is-invalid"
                                : "")
                            }
                          />
                          <ErrorMessage
                            name="end_time"
                            component="div"
                            className="invalid-feedback"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        {/* <div className="form-group">
                          <label>Select hours</label>
                          <span className="number-wrapper">
                            <input type="number" placeholder="4" />
                          </span>
                        </div> */}
                        {/* <div className="form-group">
                          <label htmlFor="hours">Hours</label>
                          <Field
                            name="hours"
                            type="number"
                            // data-bs-toggle="modal"
                            // data-bs-target="#calenderModal"
                            className={
                              "form-control number-wrapper" +
                              (errors.hours && touched.hours
                                ? " is-invalid"
                                : "")
                            }
                          />
                          <ErrorMessage
                            name="hours"
                            component="div"
                            className="invalid-feedback"
                          />
                        </div> */}
                      </div>
                      {/* <div className="col-md-6">
                        <div className="form-group">
                          <label>Select Passenger</label>
                          <span className="number-wrapper">
                            <input type="number" placeholder="4" />
                          </span>
                        </div>
                      </div> */}
                    </div>
                    <div className="booking_next">
                      {/* <Link to="/experience-booking-two" className="blue_btn">
                Next
              </Link> */}
                      <button
                        type="submit"
                        className="blue_btn"
                        // onClick={props.next}
                      >
                        Verify Experience Data
                      </button>
                      {/* <div className="booking_total_div">
                        <p>Total:</p>
                        <h3>$3400</h3>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>

              {/* <div
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
                      <p>Modal body text goes here.</p>
                    </div>
                    <div className="modal-footer">
                      <Link to="/boats-booking-two" className="btn blue_btn">
                        Apply
                      </Link>
                    </div>
                  </div>
                </div>
              </div> */}
            </Form>
          )}
        </Formik>
      </>
    </>
  );
};

const StepOne = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let { id } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  let userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const roleId = userInfo?.data?.user?.role_id;

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (values) => {
    if (roleId == 4) {
      console.log("values::::>", values);
      setIsLoading(true);

      let bookingData = {
        id: id,
        hours: values.selectHour,
        start_time: values.start_time,
        end_time: values.end_time,
        date: values.date,
      };
      console.log("values::>", bookingData);

      await dispatch(experienceBookingSlots(bookingData));
      props.next(values);
      setIsLoading(false);
    }

    // props.next(values);

    // setIsLoading(false);
  };
  return (
    <>
      {isLoading ? <div className="se-pre-con"></div> : ""}

      <Formik
        initialValues={props.data}
        onSubmit={handleSubmit}
        // validationSchema={Yup.object().shape({
        //   type: Yup.string().required("Type required"),
        //   // year: Yup.string().required("Year required"),

        //   experience: Yup.string().required("Experience required"),
        //   description: Yup.string().required("Description required"),
        // })}

        // initialValues={{ ...this.props.location }}
        // onSubmit={(fields) => {
        //   alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4));
        // }}
      >
        {({
          errors,
          status,
          touched,
          values,
          setFieldValue,
          handleBlur,
          isValid,
          dirty,
        }) => (
          <Form>
            <div className="custom-container">
              <div className="boats_booking_inner_box">
                <div className="back_to_detail" style={{ cursor: "pointer" }}>
                  <span onClick={props.prev}>
                    <i className="fa-solid fa-angle-left"></i>
                  </span>
                  Back
                </div>
                {/* <Link className="back_to_detail" to="/boats-booking"> */}
                {/* <div
                  className="back_to_detail"
                  onClick={() => props.prev(values)}
                  style={{ cursor: "pointer" }}
                >
                  <span>
                    <i className="fa-solid fa-angle-left"></i>
                  </span>
                  Back
                </div> */}

                {/* </Link> */}
                <div className="boat_booking_center">
                  <h2 className="boat_booking_text">Experiences Booking</h2>
                  {/* <form id="msform">
                <ul id="progressbar">
                  <li className="approved approved2"></li>
                  <li className="approved"></li>
                </ul>
              </form> */}
                  <div className="my_trips_booking_details">
                    <div className="flex_mode_resp">
                      <p className="exp_name">
                        Experience Name: <span> {props?.location?.title}</span>
                      </p>
                      <button
                        onClick={() => props.prev(values)}
                        className="edit_booking_btn blue_btn"
                      >
                        {" "}
                        Edit Booking
                      </button>
                    </div>

                    {/* </Link> */}
                    <div className="Bdetails_inner">
                      <p>2 hours (price in $):</p>
                      <p>{props?.location?.two_hours}</p>
                    </div>
                    {/* <div className="Bdetails_inner">
                      <p>End Date</p>
                      <p>Aug 20, 2021</p>
                    </div> */}
                    <div className="Bdetails_inner">
                      <p>4 hours (price in $):</p>
                      <p>{props?.location?.four_hours}</p>
                    </div>
                    <div className="Bdetails_inner">
                      <p>6 hours (price in $):</p>
                      <p>{props?.location?.six_hours}</p>
                    </div>
                    <div className="Bdetails_inner">
                      <p>8 hours (price in $):</p>
                      <p>{props?.location?.eight_hours}</p>
                    </div>
                    {/* <div className="Bdetails_inner">
                      <p>Passengers</p>
                      <p>4</p>
                    </div> */}
                    {/* <div className="Bdetails_inner">
                      <p>Location</p>
                      <p>Miami beach, Florida, USA.</p>
                    </div> */}
                  </div>
                  <Divider />
                  <div className="my_trips_booking_details">
                    <h3>Booking Details</h3>
                    <div className="Bdetails_inner">
                      <p>Start Time</p>
                      <p>{props?.data?.start_time}</p>
                    </div>
                    <div className="Bdetails_inner">
                      <p>End Time</p>
                      <p>{props?.data?.end_time}</p>
                    </div>
                    <div className="Bdetails_inner">
                      <p>Booking Hours</p>
                      <p>{props?.data?.selectHour}</p>
                    </div>
                    <div className="Bdetails_inner">
                      <p>Trip Date</p>
                      <p>{props?.data?.date}</p>
                    </div>
                  </div>
                  <Divider />
                  <ExperienceDetailsOwner />
                  <div className="booking_next">
                    {roleId == 4 ? (
                      <button
                        className="blue_btn send_book_request"
                        // onClick={props.next}
                      >
                        Get Booking Slots
                      </button>
                    ) : (
                      <span>
                        You have no Permission to Get Booking slots So Login
                        Your account with Role{" "}
                        <span
                          className="renterLink"
                          onClick={() => setOpen(true)}
                        >
                          Renter
                        </span>{" "}
                        if you have not account with Role Renter then{" "}
                        <Link className="renterLink" to="/login-in">
                          Register{" "}
                        </Link>
                        First
                      </span>
                    )}
                  </div>
                  {/* <div className="text-center">
                    <Link
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#complete_booking_modal"
                      className="blue_btn send_book_request"
                    >
                      Get Booking Slots
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>

            {/* <div
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
            </div> */}
          </Form>
        )}
      </Formik>
      <LoginModal open={open} handleClose={handleClose} />
    </>
  );
};

// Step 2 start
const StepTwo = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [start_time, setStart_time] = useState("");
  const [end_time, setEnd_time] = useState("");

  const bookingSlot = useSelector(
    (state) => state.experienceRenterReducer?.bookingSlot?.data?.slots
  );
  // console.log("bookingSlot::>", start_time);
  // console.log("bookingSlot::>", end_time);

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = async (values) => {
    setIsLoading(true);

    let expdata = {
      id: id,
      slot_start_time: start_time,
      slot_end_time: end_time,
      date: values.date,
      hours: values.selectHour,
    };

    // await dispatch(experienceBooking(expdata, () => setOpen(true)));
    setIsLoading(false);
    // setOpen(true);
    props.next(expdata);
    // alert("data is submitted succesfully");
    // setIsLoading(false);
  };

  const handleBookingSlot = (item) => {
    setStart_time(item.slot_start_time);
    setEnd_time(item.slot_end_time);
  };
  // console.log("location::>", props);
  return (
    <>
      {isLoading ? <div className="se-pre-con"></div> : ""}

      <Formik
        initialValues={props.data}
        onSubmit={handleSubmit}
        // validationSchema={Yup.object().shape({
        //   type: Yup.string().required("Type required"),
        //   // year: Yup.string().required("Year required"),

        //   experience: Yup.string().required("Experience required"),
        //   description: Yup.string().required("Description required"),
        // })}

        // initialValues={{ ...this.props.location }}
        // onSubmit={(fields) => {
        //   alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4));
        // }}
      >
        {({
          errors,
          status,
          touched,
          values,
          setFieldValue,
          handleBlur,
          isValid,
          dirty,
        }) => (
          <Form>
            <div className="custom-container">
              <div className="boats_booking_inner_box">
                <div className="back_to_detail" style={{ cursor: "pointer" }}>
                  <span onClick={props.prev}>
                    <i className="fa-solid fa-angle-left"></i>
                  </span>
                  Back
                </div>
                {/* <Link className="back_to_detail" to="/boats-booking"> */}
                {/* <div
                  className="back_to_detail"
                  onClick={() => props.prev(values)}
                  style={{ cursor: "pointer" }}
                >
                  <span>
                    <i className="fa-solid fa-angle-left"></i>
                  </span>
                  Back
                </div> */}

                {/* </Link> */}
                <div className="boat_booking_center">
                  <h2 className="boat_booking_text">Experiences Slots</h2>

                  <div className="my_trips_booking_details">
                    <p>
                      Following slots available for this experience,please
                      select time slot for booking
                    </p>
                  </div>
                  {bookingSlot?.map((item, index) => (
                    <div className="form-row exp_select_slot">
                      <div
                        className="inputGroup"
                        onClick={() => handleBookingSlot(item)}
                      >
                        <input id={index} name="option9" type="radio" />
                        <label htmlFor={index}>
                          <div className="slot_times">
                            Start Time: {item?.slot_start_time}
                          </div>
                          <div className="slot_times">
                            End Time: {item?.slot_end_time}
                          </div>
                        </label>
                      </div>
                    </div>
                  ))}

                  {/* <div className="form-row exp_select_slot">
                    <div className="inputGroup">
                      <input id="option66" name="option9" type="radio" />
                      <label htmlFor="option66">
                        <div className="slot_times">Start Time: 10:00 am</div>
                        <div className="slot_times">End Time: 12:00 pm</div>
                      </label>
                    </div>
                  </div>
                  <div className="form-row exp_select_slot">
                    <div className="inputGroup">
                      <input id="option77" name="option9" type="radio" />
                      <label htmlFor="option77">
                        <div className="slot_times">Start Time: 12:00 pm</div>
                        <div className="slot_times">End Time: 02:00 pm</div>
                      </label>
                    </div>
                  </div>
                  <div className="form-row exp_select_slot">
                    <div className="inputGroup">
                      <input id="option88" name="option9" type="radio" />
                      <label htmlFor="option88">
                        <div className="slot_times">Start Time: 02:00 pm</div>
                        <div className="slot_times">End Time: 04:00 pm</div>
                      </label>
                    </div>
                  </div> */}
                  <div className="booking_next">
                    <button className="blue_btn send_book_request">
                      Send Booking Request
                    </button>
                  </div>

                  {/* <div className="text-center">
                    <Link
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#complete_booking_modal"
                      className="blue_btn send_book_request"
                    >
                      Get Booking Slots
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>

            {/* <div
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
            </div> */}
          </Form>
        )}
      </Formik>
      {/* <ThankYouPopup open={open} handleClose={handleClose} navigate={"/"} /> */}
    </>
  );
};

const StepThree = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [start_time, setStart_time] = useState("");
  const [end_time, setEnd_time] = useState("");

  const bookingSlot = useSelector(
    (state) => state.experienceRenterReducer?.bookingSlot?.data?.slots
  );
  // console.log("bookingSlot::>", end_time);
  let expdata = {
    id: id,
    slot_start_time: props?.data?.slot_start_time,
    slot_end_time: props?.data?.slot_end_time,
    date: props?.data?.date,
    hours: props?.data?.selectHour,
  };
  console.log("bookingSlot::>", expdata);

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = async (values) => {
    setIsLoading(true);

    let expdata = {
      id: id,
      start_time: start_time,
      end_time: end_time,
      date: values.date,
      hours: values.selectHour,
    };

    setIsLoading(false);
    // setOpen(true);
    // props.next(values);
    // alert("data is submitted succesfully");
    // setIsLoading(false);
  };

  const handleBookingSlot = (item) => {
    setStart_time(item.slot_start_time);
    setEnd_time(item.slot_end_time);
  };
  // console.log("location::>", props);
  return (
    <>
      {isLoading ? <div className="se-pre-con"></div> : ""}

      <Formik
        initialValues={props.data}
        onSubmit={handleSubmit}
        // validationSchema={Yup.object().shape({
        //   type: Yup.string().required("Type required"),
        //   // year: Yup.string().required("Year required"),

        //   experience: Yup.string().required("Experience required"),
        //   description: Yup.string().required("Description required"),
        // })}

        // initialValues={{ ...this.props.location }}
        // onSubmit={(fields) => {
        //   alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4));
        // }}
      >
        {({
          errors,
          status,
          touched,
          values,
          setFieldValue,
          handleBlur,
          isValid,
          dirty,
        }) => (
          // <Form>
          <div className="custom-container">
            <div className="boats_booking_inner_box">
              <div className="back_to_detail" style={{ cursor: "pointer" }}>
                <span onClick={props.prev}>
                  <i className="fa-solid fa-angle-left"></i>
                </span>
                Back
              </div>

              <div className="boat_booking_center">
                <h2 className="boat_booking_text">Payment Method</h2>

                <div className="my_trips_booking_details">
                  <Typography variant="h6">Card Number</Typography>

                  <Payment expdata={expdata} />
                </div>

                {/* <div className="booking_next">
                    <button className="blue_btn send_book_request">
                      Send Booking Request
                    </button>
                  </div> */}
              </div>
            </div>
          </div>
          // </Form>
        )}
      </Formik>
      <ThankYouPopup open={open} handleClose={handleClose} navigate={"/"} />
    </>
  );
};
