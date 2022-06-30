import { Link } from "react-router-dom";
import React from "react";
import Sidebar from "../../../Sidebar/Sidebar";
import { Avatar, Box, Button, Grid, Stack, Typography } from "@mui/material";
// import { makeStyles } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { fontWeight } from "@mui/system";
import boat from "../../../../Assets/Capture.PNG";
import ForumIcon from "@material-ui/icons/Forum";
import Rating from "../../../Dashboard/Rating";
import avtar from "../../../../Assets/RenterImages/chat5.png";
import chaticon from "../../../../Assets/RenterImages/chat-icon.png";
import "./BoatsDetail.scss";

const useStyles = makeStyles((theme) => ({
  // imageSection: {
  //   [theme.breakpoints.down("sm")]: {
  //     width: "100%",
  //     display: "inline-block",
  //   },
  // },
  boatData: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  request: {
    fontWeight: "1000",
    color: "#0C294D",
    // margin: theme.spacing(),
  },
  // bodySection: {
  //   marginTop: theme.spacing(2),
  //   display: "flex",
  //   justifyContent: "space-between",
  // },
  cardData1: {
    display: "flex",
    justifyContent: "space-between",
    // fontWeight: "800",
  },
  cardData2: {
    fontWeight: "800",
    color: "#A60C0C",
    marginBottom: "25px",
  },
  cardData3: {
    fontWeight: "800",
  },
  cardData4: {
    display: "flex",
    justifyContent: "space-between",
    // display: "inline-block",
  },
  profileData: {
    marginTop: "10px",
    width: "150px",
  },
  // time: {
  //   margin: "15px",
  // },
  emailStyle: {
    fontWeight: "800",
    fontSize: "13",
    variant: "p",
    color: "#CCCCCC",
  },
  location: {
    fontSize: "12px",
    fontWeight: "500",
    margin: "50px",
  },
  timeHour: {
    fontWeight: "800",
    color: "#032146",
  },
}));

const BoatsDetail = () => {
  const classes = useStyles();
  return (
    <Sidebar>
      <div className={classes.mainSection}>
        <h2 className="Request_details_hed"> Request Details</h2>
        <div className="owner_boat_detail_body">
          <div className="request_details_sec">
            <div className="request_details_img">
              <img src={boat} alt="Image not Found" />
            </div>
          </div>
          <div className="request_details_sec">
            <div className="request_details_boat_data">
              <div className={classes.cardData1}>
                <Typography fontWeight={1000}>Cruise</Typography>
                <span className="chat_icon">
                  <img src={chaticon} />
                </span>
              </div>
              <div className={classes.cardData2}>
                <Typography variant="p">$400/ Day</Typography>
              </div>
              <div className={classes.cardData3}>
                <Typography variant="p">Booking Details</Typography>
              </div>
              <div className="request_card_details">
                <p>Start Date</p>
                <h3>Aug 12, 2021</h3>
              </div>
              <div className="request_card_details">
                <p>End Date</p>
                <h3> Aug 12, 2021</h3>
              </div>
              <div className="request_card_details">
                <p>Booking Hours</p>
                <h3>4 Hours</h3>
              </div>
              <div className="request_card_details">
                <p>Start Time</p>

                <h3> 04 : 00 AM</h3>
              </div>
              <div className="request_card_details">
                <p>Passengers</p>

                <h3>4</h3>
              </div>
              <div className="request_card_details">
                <p>Location</p>
                <h3> Miami Beach, Florida USA</h3>
              </div>
              <div>
                <button className="blue_btn owner_request_accept">
                  Accept
                </button>
                <button className="blue_btn owner_request_decline">
                  Decline
                </button>
              </div>
              {/* <div className={classes.cardData10}>
                  <Stack spacing={2} direction="row" marginTop={5}>
                    {" "}
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      className={classes.buttons}
                    >
                      Accept
                    </Button>
                    <Button variant="contained" size="small" color="error">
                      Decline
                    </Button>
                  </Stack>
                </div> */}
            </div>
          </div>
          <div className="request_details_sec">
            <div className={classes.rightCard}>
              <h3 className="boatRenter_text">Boat Renter</h3>
              <Box className="requestboat_renter_box" boxShadow={5}>
                <div className="requester_names">
                  <span className="avatar_round">
                    <img src={avtar} />
                  </span>
                  <div className="requester_details">
                    <Typography fontWeight={800}>Marcus</Typography>
                    <Typography className={classes.emailStyle}>
                      marcus@gmail.com
                    </Typography>
                    <Rating value={4} />
                    <Typography variant="p" className={classes.location}>
                      Average Response time Miami Beach, Florida, USA.
                    </Typography>
                  </div>
                </div>

                <div className={classes.time}>
                  <Stack spacing={4} className="times_outer">
                    <span className="chat_icon">
                      <img src={chaticon} />
                    </span>
                    <p>
                      <i className="fas fa-angle-left"></i>6hrs
                    </p>
                  </Stack>
                </div>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default BoatsDetail;

// const useStyles = makeStyles((theme) => ({
//   box: {
//     backgroundColor: "white",
//   },
//   requestDetail: {
//     fontWeight: "1000",
//     color: "#0C294D",
//     // marginBottom: "20px",
//     // margin: theme.spacing(20),
//   },
//   image: {
//     // width: "20%",
//   },
//   mainDetails: {
//     display: "flex",
//     justifyContent: "space-between",
//   },
//   cardData1: {
//     display: "flex",
//     justifyContent: "space-between",
//     // fontWeight: "800",
//   },
//   cardData2: {
//     fontWeight: "800",
//     color: "#A60C0C",
//     marginBottom: "25px",
//   },
//   cardData3: {
//     fontWeight: "800",
//   },
//   cardData4: {
//     display: "flex",
//     justifyContent: "space-between",
//     // display: "inline-block",
//   },
//   renterBox: {
//     // border: "1px solid grey",
//     width: "220px",
//     height: "100px",
//     borderRadius: theme.spacing(1),
//     // boxShadow: theme.spacing(5),
//   },
// }));

{
  /* <Box className={classes.box}>
        <Typography variant="p" className={classes.requestDetail}>
          Request Details
        </Typography>
        <div>
          <Grid container className={classes.mainDetails} spacing={2}>
            <Grid item xs={5}>
              <div className={classes.image}>
                <img src={boat} alt="Image not Found" />
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className={classes.cardData}>
                <div className={classes.cardData1}>
                  <Typography fontWeight={1000}>Cruise</Typography>
                  <ForumIcon />
                </div>
                <div className={classes.cardData2}>
                  <Typography variant="p">$400/ Day</Typography>
                </div>
                <div className={classes.cardData3}>
                  <Typography variant="p">Booking Details</Typography>
                </div>
                <div className={classes.cardData4}>
                  <Typography>Start Date</Typography>
                  <Typography fontWeight={1000} color="#102C50">
                    Aug 12, 2021
                  </Typography>
                </div>
                <div className={classes.cardData4}>
                  <Typography>End Date</Typography>
                  <Typography fontWeight={1000} color="#102C50">
                    Aug 12, 2021
                  </Typography>
                </div>
                <div className={classes.cardData4}>
                  <Typography>Booking Hours</Typography>
                  <Typography fontWeight={1000} color="#102C50">
                    4 Hours
                  </Typography>
                </div>
                <div className={classes.cardData4}>
                  <Typography>Start Time</Typography>
                  <Typography fontWeight={1000} color="#102C50">
                    04 : 00 AM
                  </Typography>
                </div>
                <div className={classes.cardData4}>
                  <Typography>Passengers</Typography>
                  <Typography fontWeight={1000} color="#102C50">
                    4
                  </Typography>
                </div>
                <div className={classes.cardData4}>
                  <Typography>Location</Typography>
                  <Typography fontWeight={1000} color="#102C50" width="40%">
                    Miami Beach, Florida USA
                  </Typography>
                </div>
                <div className={classes.cardData10}>
                  <Stack spacing={2} direction="row" marginTop={5}>
                    {" "}
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      className={classes.buttons}
                    >
                      Accept
                    </Button>
                    <Button variant="contained" size="small" color="error">
                      Decline
                    </Button>
                  </Stack>
                </div>
              </div>
            </Grid>

            <Grid item xs={3}>
              <div className={classes.card}>
                <Typography fontWeight={1000}>Boat Renter</Typography>
                <Box className={classes.renterBox} boxShadow={5}>
                  <Grid container direction="row" xs={12}>
                    <Grid item xs={2.5}>
                      <Avatar />
                    </Grid>
                    <Grid item xs={5}>
                      <Typography fontWeight={800}>Marcus</Typography>
                      <Typography>marcus@gmail.com</Typography>
                    </Grid>
                    <Grid item xs={1}>
                      <ForumIcon />
                      <Typography>6hrs</Typography>
                    </Grid>
                  </Grid>
                </Box>
              </div>
            </Grid>
          </Grid>
        </div>
      </Box> */
}
