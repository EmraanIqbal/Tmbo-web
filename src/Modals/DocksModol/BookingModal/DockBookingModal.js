import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { toast } from "react-toastify";
import { Link, useNavigate, useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
// import RenterDocksBookingStepFive from "../../../components/RenterModule/DocksRenter/RenterDocksBooking/RenterDocksBookingStepFive/RenterDocksBookingStepFive";
// import RenterDocksBookingStepOne from "../../../components/RenterModule/DocksRenter/RenterDocksBooking/RenterDocksBookingStepOne/RenterDocksBookingStepOne";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 400,
  bgcolor: "background.paper",
  //   border: "2px solid #000",
  boxShadow: 24,
  p: 3,
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

export default function DockBookingModal(props) {
  let { id } = useParams();
  const navigate = useNavigate();
  const classes = useStyles();
  const [data, setData] = React.useState("");
  //   const handleOpen = () => setOpen(true);
  //   const handleClose = () => setOpen(false);

  const handleClickForBooking = () => {
    if (data == 0 || data == 1) {
      navigate(`/docks-booking/${id}`, { state: { data: data } });
    } else {
      toast.error("Please select day first");
    }
  };

  return (
    <div>
      {/* <Button onClick={props?.handleOpen}>Open modal</Button> */}
      <Modal
        className="booking_selection_main"
        open={props?.open}
        // onClose={props?.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            fontWeight={400}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Booking Selection
          </Typography>
          <div className="row" style={{ marginTop: "10px" }}>
            <div className="col-sm-12 col-md-6 col-lg-6 p-0">
              <div className="form-row">
                <div className="inputGroup" onClick={() => setData(0)}>
                  <input id="option5" name="option9" type="radio" />
                  <label htmlFor="option5">Single Day</label>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 p-0">
              <div className="form-row">
                <div
                  className="inputGroup"
                  onClick={() => setData(1)}
                  // onClick={() => toast.error("Under Development !")}
                >
                  <input id="option6" name="option9" type="radio" />
                  <label htmlFor="option6">Multiple Day</label>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="feature_book-section">
            <Link to={`/docks-booking/${id}`} className="btn book-now-btn">
              {/* <button className="btn book-now-btn" onClick={handleOpen}>
                    Request to Book
                  </button> */}
          <div></div>

          <button
            onClick={handleClickForBooking}
            className={classes.confirmButton}
          >
            Confirm
          </button>
          {/* </Link> */}
          {/* <h2 className="section-heding">$400/ Day</h2> */}
          {/* </div> */}
        </Box>
      </Modal>
      {/* <RenterDocksBookingStepOne data={data} /> */}
    </div>
  );
}
