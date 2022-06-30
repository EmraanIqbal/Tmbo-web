// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import thankyouImg from "../../../../../Assets/RenterImages/thankyou.png";
// import "../ThankYouPopup/ThankYouPopup.scss";
// const ThankYouPopup = () => {
//   return (
//     <>
//       <div
//         className="modal fade"
//         id="thankyou_modal"
//         tabindex="-1"
//         aria-labelledby="calenderModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content">
//             <div className="modal-header">
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div className="modal-body">
//               <div className="text-center thankyou_img">
//                 <img src={thankyouImg} alt="thankyou" />
//               </div>
//               <h3>
//                 Thanks! <br /> Your booking request sent!
//               </h3>
//               <h3>
//                 Your booking request have been sent to TMBO! Boat Owner, we will
//                 notify you when your booking being confirmed. Thanks!
//               </h3>
//             </div>
//             <div className="modal-footer">
//               <button className="btn blue_btn" data-bs-dismiss="modal">
//                 View Booking
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ThankYouPopup;
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate, useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";

import thankyouImg from "../../../src/Assets/RenterImages/thankyou.png";
import "./ThankYouPopup.scss";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 3,
  borderRadius: 6,
};

const useStyles = makeStyles((theme) => ({
  confirmButton: {
    border: "none",
    color: "white",
    backgroundColor: "#1B3659",
    padding: "10px",
    width: "100%",
  },
}));

export default function ThankYouPopup(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //   let { id } = useParams();
  //   const navigate = useNavigate();
  const classes = useStyles();
  //   const [data, setData] = React.useState("");
  //   //   const handleOpen = () => setOpen(true);
  //   //   const handleClose = () => setOpen(false);

  //   const handleClickForBooking = () => {
  //     if (data == 1 || data == 2) {
  //       navigate(`/docks-booking/${id}`);
  //     } else {
  //       toast.error("Please select day first");
  //     }
  //   };

  return (
    <div>
      {/* <Button onClick={props?.handleOpen}>Open modal</Button> */}
      <Modal
        className="Thankyou_main"
        open={props?.open}
        // onClose={props?.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* <div className="inner-center-card"> */}
        <Box sx={style}>
          {/* <div
            className="modal fade"
            // id="thankyou_modal"
            // tabindex="-1"
            // aria-labelledby="calenderModalLabel"
            // aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content"> */}
          {/* <div className="modal-header"> */}
          <button
            type="button"
            className="btn-close"
            // data-bs-dismiss="modal"
            aria-label="Close"
            onClick={props?.handleClose}
          ></button>
          {/* </div> */}
          {/* <div className="modal-body"> */}
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
          {/* </div> */}
          {/* <div className="modal-footer"> */}
          <div className="text-center">
            <button
              className="btn blue_btn"
              data-bs-dismiss="modal"
              onClick={() => navigate(props.navigate)}
            >
              View Booking
            </button>
          </div>
          {/* </div> */}
          {/* </div>
            </div>
          </div> */}
        </Box>
        {/* </div> */}
      </Modal>
      {/* <RenterDocksBookingStepOne data={data} /> */}
    </div>
  );
}
