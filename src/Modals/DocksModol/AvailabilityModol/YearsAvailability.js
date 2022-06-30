import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Switch from "@mui/material/Switch";

import Picker from "react-month-picker";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  //   border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function YearsAvailability(props) {
  const label = { inputProps: { "aria-label": "Switch demo" } };

  const [months, setMonth] = React.useState([]);
  //   const handleOpen = () => setOpen(true);
  //   const handleClose = () => setOpen(false);
  const month = [];
  const boatThings = ["Winter", "Spring", "Summer", "Autumn"];

  const handleChange = (e, things) => {
    console.log("things:>", things);
    month.push(things);
    console.log("things:>", month);
    setMonth(month);
  };
  console.log("months::>", month);
  return (
    <div>
      {/* <Button onClick={props.handleOpen}>Open modal</Button> */}
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Yearly Availability
          </Typography>
          <Typography variant="h6">
            Add Yearly Availability of your dock
          </Typography>
          <Typography variant="p">
            Lorem Ipsum is simply dummy text of the printing and textsetting
            <Switch {...label} defaultChecked />
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="row"></div>
          </Typography>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button
              type="submit"
              onClick={props.handleClose}
              className="btn btn-primary next"
            >
              Continue
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
