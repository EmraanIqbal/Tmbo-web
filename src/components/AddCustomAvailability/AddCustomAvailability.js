import { makeStyles } from "@material-ui/core";
import { Checkbox, Typography } from "@mui/material";
import React from "react";
import { Container } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  description: {
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      // backgroundColor: "#FFF",
    },
    // border: "2px solid #CED4DA",
    // borderRadius: "5px",
    width: "100%",
  },
  row1Styling: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  row1: {
    width: "85%",
    marginBottom: "20px",
  },
  box1: {
    backgroundColor: "white",
  },
  box2: {
    backgroundColor: "white",
    // width: "49%",
  },
  boxColumns: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

const AddCustomAvailability = () => {
  const classes = useStyles();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <>
      <Typography variant="h5" fontWeight={1000} marginBottom="30px">
        Add Custom Availability
      </Typography>
      <div className={classes.customAvailibility}>
        <div className={classes.row1}>
          <div className={classes.row1Styling}>
            <div className={classes.box1}>
              <Container maxWidth="sm">
                <Typography
                  variant="p"
                  fontWeight={1000}
                  // marginLeft="100px"
                >
                  Monday
                </Typography>
                <div className={classes.boxColumns}>
                  <Checkbox {...label} />
                  <label htmlFor="option7">08:00AM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">09:00AM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">10:00AM</label>
                </div>
                <div className={classes.boxColumns}>
                  <Checkbox {...label} />
                  <label htmlFor="option7">11:00AM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">12:00AM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">01:00PM</label>
                </div>
                <div className={classes.boxColumns}>
                  <Checkbox {...label} />
                  <label htmlFor="option7">02:00PM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">03:00PM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">04:00PM</label>
                </div>
                <div className={classes.boxColumns}>
                  <Checkbox {...label} />
                  <label htmlFor="option7">05:00PM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">06:00PM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">07:00PM</label>
                </div>
                <div className={classes.boxColumns}>
                  <Checkbox {...label} />
                  <label htmlFor="option7">08:00AM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">09:00AM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">10:00AM</label>
                </div>
              </Container>
            </div>
            <div className={classes.box2}>
              <Container maxWidth="sm">
                <Typography
                  variant="p"
                  fontWeight={1000}
                  // marginLeft="100px"
                >
                  Tuesday
                </Typography>
                <div className={classes.boxColumns}>
                  <Checkbox {...label} />
                  <label htmlFor="option7">08:00AM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">09:00AM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">10:00AM</label>
                </div>
                <div className={classes.boxColumns}>
                  <Checkbox {...label} />
                  <label htmlFor="option7">11:00AM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">12:00AM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">01:00PM</label>
                </div>
                <div className={classes.boxColumns}>
                  <Checkbox {...label} />
                  <label htmlFor="option7">02:00PM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">03:00PM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">04:00PM</label>
                </div>
                <div className={classes.boxColumns}>
                  <Checkbox {...label} />
                  <label htmlFor="option7">05:00PM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">06:00PM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">07:00PM</label>
                </div>
                <div className={classes.boxColumns}>
                  <Checkbox {...label} />
                  <label htmlFor="option7">08:00AM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">09:00AM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">10:00AM</label>
                </div>
              </Container>
            </div>
          </div>
        </div>
        <div className={classes.row1}>
          <div className={classes.row1Styling}>
            <div className={classes.box1}>
              <Container maxWidth="sm">
                <Typography
                  variant="p"
                  fontWeight={1000}
                  // marginLeft="100px"
                >
                  Wednesday
                </Typography>
                <div className={classes.boxColumns}>
                  <Checkbox {...label} />
                  <label htmlFor="option7">08:00AM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">09:00AM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">10:00AM</label>
                </div>
                <div className={classes.boxColumns}>
                  <Checkbox {...label} />
                  <label htmlFor="option7">11:00AM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">12:00AM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">01:00PM</label>
                </div>
                <div className={classes.boxColumns}>
                  <Checkbox {...label} />
                  <label htmlFor="option7">02:00PM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">03:00PM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">04:00PM</label>
                </div>
                <div className={classes.boxColumns}>
                  <Checkbox {...label} />
                  <label htmlFor="option7">05:00PM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">06:00PM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">07:00PM</label>
                </div>
                <div className={classes.boxColumns}>
                  <Checkbox {...label} />
                  <label htmlFor="option7">08:00AM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">09:00AM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">10:00AM</label>
                </div>
              </Container>
            </div>
            <div className={classes.box2}>
              <Container maxWidth="sm">
                <Typography
                  variant="p"
                  fontWeight={1000}
                  // marginLeft="100px"
                >
                  Thursday
                </Typography>
                <div className={classes.boxColumns}>
                  <Checkbox {...label} />
                  <label htmlFor="option7">08:00AM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">09:00AM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">10:00AM</label>
                </div>
                <div className={classes.boxColumns}>
                  <Checkbox {...label} />
                  <label htmlFor="option7">11:00AM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">12:00AM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">01:00PM</label>
                </div>
                <div className={classes.boxColumns}>
                  <Checkbox {...label} />
                  <label htmlFor="option7">02:00PM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">03:00PM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">04:00PM</label>
                </div>
                <div className={classes.boxColumns}>
                  <Checkbox {...label} />
                  <label htmlFor="option7">05:00PM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">06:00PM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">07:00PM</label>
                </div>
                <div className={classes.boxColumns}>
                  <Checkbox {...label} />
                  <label htmlFor="option7">08:00AM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">09:00AM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">10:00AM</label>
                </div>
              </Container>
            </div>
          </div>
        </div>
        <div className={classes.row1}>
          <div className={classes.row1Styling}>
            <div className={classes.box1}>
              <Container maxWidth="sm">
                <Typography
                  variant="p"
                  fontWeight={1000}
                  // marginLeft="100px"
                >
                  Friday
                </Typography>
                <div className={classes.boxColumns}>
                  <Checkbox {...label} />
                  <label htmlFor="option7">08:00AM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">09:00AM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">10:00AM</label>
                </div>
                <div className={classes.boxColumns}>
                  <Checkbox {...label} />
                  <label htmlFor="option7">11:00AM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">12:00AM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">01:00PM</label>
                </div>
                <div className={classes.boxColumns}>
                  <Checkbox {...label} />
                  <label htmlFor="option7">02:00PM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">03:00PM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">04:00PM</label>
                </div>
                <div className={classes.boxColumns}>
                  <Checkbox {...label} />
                  <label htmlFor="option7">05:00PM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">06:00PM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">07:00PM</label>
                </div>
                <div className={classes.boxColumns}>
                  <Checkbox {...label} />
                  <label htmlFor="option7">08:00AM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">09:00AM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">10:00AM</label>
                </div>
              </Container>
            </div>
            <div className={classes.box2}>
              <Container maxWidth="sm">
                <Typography
                  variant="p"
                  fontWeight={1000}
                  // marginLeft="100px"
                >
                  Saturday
                </Typography>
                <div className={classes.boxColumns}>
                  <Checkbox {...label} />
                  <label htmlFor="option7">08:00AM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">09:00AM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">10:00AM</label>
                </div>
                <div className={classes.boxColumns}>
                  <Checkbox {...label} />
                  <label htmlFor="option7">11:00AM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">12:00AM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">01:00PM</label>
                </div>
                <div className={classes.boxColumns}>
                  <Checkbox {...label} />
                  <label htmlFor="option7">02:00PM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">03:00PM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">04:00PM</label>
                </div>
                <div className={classes.boxColumns}>
                  <Checkbox {...label} />
                  <label htmlFor="option7">05:00PM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">06:00PM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">07:00PM</label>
                </div>
                <div className={classes.boxColumns}>
                  <Checkbox {...label} />
                  <label htmlFor="option7">08:00AM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">09:00AM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">10:00AM</label>
                </div>
              </Container>
            </div>
          </div>
        </div>
        <div className={classes.row1}>
          <div className={classes.row1Styling}>
            <div className={classes.box1}>
              <Container maxWidth="sm">
                <Typography
                  variant="p"
                  fontWeight={1000}
                  // marginLeft="100px"
                >
                  Sunday
                </Typography>
                <div className={classes.boxColumns}>
                  <Checkbox {...label} />
                  <label htmlFor="option7">08:00AM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">09:00AM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">10:00AM</label>
                </div>
                <div className={classes.boxColumns}>
                  <Checkbox {...label} />
                  <label htmlFor="option7">11:00AM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">12:00AM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">01:00PM</label>
                </div>
                <div className={classes.boxColumns}>
                  <Checkbox {...label} />
                  <label htmlFor="option7">02:00PM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">03:00PM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">04:00PM</label>
                </div>
                <div className={classes.boxColumns}>
                  <Checkbox {...label} />
                  <label htmlFor="option7">05:00PM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">06:00PM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">07:00PM</label>
                </div>
                <div className={classes.boxColumns}>
                  <Checkbox {...label} />
                  <label htmlFor="option7">08:00AM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">09:00AM</label>
                  <Checkbox {...label} />
                  <label htmlFor="option7">10:00AM</label>
                </div>
              </Container>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default AddCustomAvailability;
