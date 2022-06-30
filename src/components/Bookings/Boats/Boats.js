// import * as React from "react";
// import PropTypes from "prop-types";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import Sidebar from "../Sidebar/Sidebar";
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles({
//   appbar: {
//     paddingTop: "200px",
//   },
// });

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;
//   const classes = useStyles();
//   return (
//     // <Sidebar>
//     <div
//       // className={classes.appbar}
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//     // </Sidebar>
//   );
// }

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }

// export default function BasicTabs() {
//   const [value, setValue] = React.useState(0);
//   const classes = useStyles();
//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Sidebar>
//       <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           aria-label="basic tabs example"
//           // className={classes.appbar}
//         >
//           <Tab label="Item One" {...a11yProps(0)} />
//           <Tab label="Item Two" {...a11yProps(1)} />
//           <Tab label="Item Three" {...a11yProps(2)} />
//         </Tabs>
//       </Box>
//       <TabPanel value={value} index={0}>
//         Item One
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         Item Two
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//         Item Three
//       </TabPanel>
//     </Sidebar>
//   );
// }
import React from "react";
import { Button, Divider, Stack, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@mui/material/Card";
import boat from "../../../Assets/RenterImages/boat1.png";
import CardContent from "@mui/material/CardContent";
// import "../Dashboard/BookingCard/BookingCard.scss";
import Sidebar from "../../Sidebar/Sidebar";
import "./Boats.scss";
import Rating from "../../Dashboard/Rating";
import { red } from "@mui/material/colors";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(2),
  },
  details: {
    color: "#A60C0C",
    fontWeight: "800",
  },
  buttons: {
    marginLeft: theme.spacing(20),
  },
}));

const Boats = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  const handleMoreDetails = () => {
    navigate("more-details");
  };

  return (
    <Sidebar>
      <ul
        className="nav nav-pills m-10 booking_boats_tabs"
        id="pills-tab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            Booking Requests
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-profile"
            type="button"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            Upcoming Bookings
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-contact-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-contact"
            type="button"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
          >
            Completed Bookings
          </button>
        </li>
      </ul>
      <Divider />
      <div
        className="tab-content boats_booking_tabcontent"
        id="pills-tabContent"
      >
        <div
          className="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <h3>Booking Requests</h3>
          <Divider className="mb-2" />
          <div className={classes.card}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent className="boat_card_content_div">
                <div className="img-city-booking">
                  <div className="outer-city">
                    <div className="booking_boat_img">
                      {" "}
                      <img src={boat} alt="not found" />
                    </div>
                    <div className="inner-city">
                      <h3>Catalina 12.5 Expo</h3>
                      <h3>New York</h3>
                    </div>
                  </div>
                  <div>
                    <Stack spacing={2} direction="row">
                      <button className="blue_btn owner_boats_accept">
                        Accept
                      </button>
                      <button className="blue_btn owner_boats_decline">
                        Decline
                      </button>
                    </Stack>
                  </div>
                </div>
                <div className="border-card-booking"></div>
                <div className="star-date-booking">
                  <Rating value={4} />
                  <div className={classes.details}>
                    <Link to="/bookings/boats/more-details">Show details</Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className={classes.card}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent className="boat_card_content_div">
                <div className="img-city-booking">
                  <div className="outer-city">
                    <div className="booking_boat_img">
                      {" "}
                      <img src={boat} alt="not found" />
                    </div>
                    <div className="inner-city">
                      <h3>Catalina 12.5 Expo</h3>
                      <h3>New York</h3>
                    </div>
                  </div>
                  <div>
                    <Stack spacing={2} direction="row">
                      <button className="blue_btn owner_boats_accept">
                        Accept
                      </button>
                      <button className="blue_btn owner_boats_decline">
                        Decline
                      </button>
                    </Stack>
                  </div>
                </div>
                <div className="border-card-booking"></div>
                <div className="star-date-booking">
                  <Rating value={4} />
                  <div className={classes.details}>
                    <Link to="/bookings/boats/more-details">Show details</Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className={classes.card}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent className="boat_card_content_div">
                <div className="img-city-booking">
                  <div className="outer-city">
                    <div className="booking_boat_img">
                      {" "}
                      <img src={boat} alt="not found" />
                    </div>
                    <div className="inner-city">
                      <h3>Catalina 12.5 Expo</h3>
                      <h3>New York</h3>
                    </div>
                  </div>
                  <div>
                    <Stack spacing={2} direction="row">
                      <button className="blue_btn owner_boats_accept">
                        Accept
                      </button>
                      <button className="blue_btn owner_boats_decline">
                        Decline
                      </button>
                    </Stack>
                  </div>
                </div>
                <div className="border-card-booking"></div>
                <div className="star-date-booking">
                  <Rating value={4} />
                  <div className={classes.details}>
                    <Link to="/bookings/boats/more-details">Show details</Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <h3>Upcoming Bookings</h3>
          <div className={classes.card}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent className="boat_card_content_div">
                <div className="img-city-booking">
                  <div className="outer-city">
                    <div className="booking_boat_img">
                      <img src={boat} alt="not found" />
                    </div>
                    <div className="inner-city">
                      <h3>Catalina 12.5 Expo</h3>
                      <h3>New York</h3>
                    </div>
                  </div>

                  <div className="show-details">Show details</div>
                </div>
                <div className="border-card-booking"></div>
                <div className="star-date-booking">
                  <Rating value={4} />
                  <div className="date">15 Oct to 20 Oct 2021</div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className={classes.card}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent className="boat_card_content_div">
                <div className="img-city-booking">
                  <div className="outer-city">
                    <div className="booking_boat_img">
                      <img src={boat} alt="not found" />
                    </div>
                    <div className="inner-city">
                      <h3>Catalina 12.5 Expo</h3>
                      <h3>New York</h3>
                    </div>
                  </div>

                  <div className="show-details">Show details</div>
                </div>
                <div className="border-card-booking"></div>
                <div className="star-date-booking">
                  <Rating value={4} />
                  <div className="date">15 Oct to 20 Oct 2021</div>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* <div className={classes.card}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent className="boat_card_content_div">
                <div className="img-city-booking">
                  <div className="outer-city">
                    <img src={boat} alt="not found" />
                    <div className="inner-city">
                      <div>Catalina 12.5 Expo</div>
                      <div>New York</div>
                    </div>
                  </div>
                  <div>
                    <Stack spacing={2} direction="row">
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
                <div className="border-card-booking"></div>
                <div className="star-date-booking">
                  <Rating value={4} />
                  <div className={classes.details}>Show details</div>
                </div>
              </CardContent>
            </Card>
          </div> */}
        </div>
        <div
          className="tab-pane fade"
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
        >
          <h3>Completed Bookings</h3>
          <div className={classes.card}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent className="boat_card_content_div">
                <div className="img-city-booking">
                  <div className="outer-city">
                    <div className="booking_boat_img">
                      <img src={boat} alt="not found" />
                    </div>
                    <div className="inner-city">
                      <h3>Catalina 12.5 Expo</h3>
                      <h3>New York</h3>
                    </div>
                  </div>

                  <div className="show-details">Show details</div>
                </div>
                <div className="border-card-booking"></div>
                <div className="star-date-booking">
                  <Rating value={4} />
                  <div className="date">15 Oct to 20 Oct 2021</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default Boats;
