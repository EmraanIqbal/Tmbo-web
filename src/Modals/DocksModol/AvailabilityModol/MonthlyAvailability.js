import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Picker from "react-month-picker";
import { Link } from "react-router-dom";
import "../AvailabilityModol/MonthlyAvailability.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { MenuProps, useStyles, options } from "./utils";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 545,
  bgcolor: "background.paper",
  //   border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function MonthlyAvailability(props) {
  const [startDate, setStartDate] = useState(new Date());
  const [months, setMonth] = React.useState([]);
  //   const handleOpen = () => setOpen(true);
  //   const handleClose = () => setOpen(false);
  const month = [];
  const boatThings = [
    { id: 1, name: "January" },
    { id: 2, name: "Feburary" },
    { id: 3, name: "March" },
    { id: 4, name: "April" },
    { id: 5, name: "May" },
    { id: 6, name: "June" },
    { id: 7, name: "July" },
    { id: 8, name: "August" },
    { id: 9, name: "September" },
    { id: 10, name: "october" },
    { id: 11, name: "November" },
    { id: 12, name: "December" },
  ];

  // const handleSubmit = () => {
  //   props.handleClose;
  // };

  const classes = useStyles();
  const [selected, setSelected] = useState([]);
  const isAllSelected =
    options.length > 0 && selected.length === options.length;

  const handleChange = (event) => {
    console.log("event", event.target.value);
    const value = event.target.value;
    if (value[value.length - 1] === "all") {
      setSelected(selected.length === options.length ? [] : options);
      return;
    }
    setSelected(value);
  };
  const handleSubmit = () => {
    console.log("months::>", month);
    const year = startDate.getFullYear();
    // console.log("fields", fields);
    console.log("fields", selected);

    console.log("fields", year);
    let data = {
      selected,
      year,
    };

    props.updateParentState(data);
    props.handleClose();
    setMonth([]);
    startDate("");
  };
  return (
    <>
      <Modal
        className="availabilty_modal"
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="form-row"></div>

          <h2 className="avilalbility_heading">Monthly Availability</h2>
          <button
            type="button"
            className="btn-close "
            // data-bs-dismiss="modal"
            // aria-label="Close"
            onClick={props.handleClose}
          ></button>

          <h2 className="avilalbility_heading">
            Add Availability of your dock
          </h2>
          <div className="form-group year_input">
            <label className="">Year</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              showYearPicker
              dateFormat="yyyy"
              yearItemNumber={120}
            />
          </div>
          <div className="form-row both">
            <div className="form-group col-12">
              <FormControl className="avail_month_label">
                <InputLabel htmlFor="mutiple-select-label">Month</InputLabel>

                <Select
                  // labelId="mutiple-select-label"
                  inputProps={{
                    id: "mutiple-select-label",
                  }}
                  multiple
                  value={selected}
                  onChange={handleChange}
                  renderValue={(selected) => selected.join(", ")}
                  MenuProps={MenuProps}
                >
                  <MenuItem
                    value="all"
                    classes={{
                      root: isAllSelected ? classes.selectedAll : "",
                    }}
                  >
                    <ListItemIcon>
                      <Checkbox
                        classes={{
                          indeterminate: classes.indeterminateColor,
                        }}
                        checked={isAllSelected}
                        indeterminate={
                          selected.length > 0 &&
                          selected.length < options.length
                        }
                      />
                    </ListItemIcon>
                    <ListItemText
                      classes={{ primary: classes.selectAllText }}
                      primary="Select All"
                    />
                  </MenuItem>
                  {options.map((option) => (
                    <MenuItem key={option} value={option}>
                      <ListItemIcon>
                        <Checkbox checked={selected.indexOf(option) > -1} />
                      </ListItemIcon>
                      <ListItemText primary={option} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="text-center mt-3">
            <button
              onClick={handleSubmit}
              className="btn blue_btn"
              // type="submit"
              // data-bs-dismiss="modal"
            >
              Apply
            </button>
          </div>
        </Box>
      </Modal>
    </>
  );
}
