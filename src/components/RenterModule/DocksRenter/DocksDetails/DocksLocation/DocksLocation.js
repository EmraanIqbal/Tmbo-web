import React from "react";
// import "./DocksOwner.scss";
import chatIcon from "../../../../../Assets/RenterImages/chat-icon.png";
import ownerProfile from "../../../../../Assets/RenterImages/owner-pro.png";
import { Link } from "react-router-dom";
import { Divider, Typography } from "@mui/material";
import { makeStyles, Select } from "@material-ui/core";
import { Stack } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  experienceData3: {
    display: "flex",
  },
}));

const DocksLocation = (props) => {
  const classes = useStyles();
  return (
    <>
      <section className="boat_detail_owner_main">
        <div className="custom-container">
          <div className="boats_detail_owner_inner">
            <div className="d-flex justify-content-between flex-wrap">
              <h2 className="section-heding">Dock Location</h2>
              <div className="boats_owner_profile">
                <Typography>{props?.details?.address}</Typography>
              </div>
            </div>
          </div>
          <Divider className="divder_padding" />
        </div>
      </section>
      {/* <section className="boat_detail_owner_main">
        <div className="custom-container">
          <div className="boats_detail_owner_inner">
            <div className="d-flex justify-content-between flex-wrap">
              <h2 className="section-heding">Dock Detail</h2>
              <div className="boats_owner_profile">
                <Stack spacing={3} style={{ marginTop: "10px" }}>
                  <div className={classes.experienceData3}>
                    <Typography className="my_docks_side-title">
                      Dock Title
                    </Typography>
                    <Typography
                      className="my_docks_side-decs"
                      variant="p"
                      fontWeight="1000"
                      color="#1B3659"
                    >
                      {props?.details?.title}
                    </Typography>
                  </div>
                  <div className={classes.experienceData3}>
                    <Typography className="my_docks_side-title">
                      Dock Type
                    </Typography>
                    <Typography
                      className="my_docks_side-decs"
                      variant="p"
                      fontWeight="1000"
                      color="#1B3659"
                    >
                      {props?.details?.type}
                    </Typography>
                  </div>
                  <div className={classes.experienceData3}>
                    <Typography className="my_docks_side-title">
                      Dock Description
                    </Typography>
                    <Typography
                      className="my_docks_side-decs"
                      variant="p"
                      fontWeight="1000"
                      color="#1B3659"
                    >
                      {props?.details?.description}
                    </Typography>
                  </div>
                </Stack>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="boat_detail_owner_main">
        <div className="custom-container">
          <div className="boats_detail_owner_inner">
            <div className="d-flex justify-content-between flex-wrap">
              <h2 className="section-heding">Dock Pricing</h2>
              <div className="boats_owner_profile">
                <Stack spacing={3} style={{ marginTop: "10px" }}>
                  <div className={classes.experienceData3}>
                    <Typography className="my_docks_side-title">
                      Per Day (Price in $)
                    </Typography>
                    <Typography
                      className="my_docks_side-decs"
                      variant="p"
                      fontWeight="1000"
                      color="#1B3659"
                    >
                      {props?.details?.prices?.per_day}
                    </Typography>
                  </div>
                  <div className={classes.experienceData3}>
                    <Typography className="my_docks_side-title">
                      Per Month (Price in $)
                    </Typography>
                    <Typography
                      className="my_docks_side-decs"
                      variant="p"
                      fontWeight="1000"
                      color="#1B3659"
                    >
                      {props?.details?.prices?.per_month}
                    </Typography>
                  </div>
                  <div className={classes.experienceData3}>
                    <Typography className="my_docks_side-title">
                      Per Season (Price in $)
                    </Typography>
                    <Typography
                      className="my_docks_side-decs"
                      variant="p"
                      fontWeight="1000"
                      color="#1B3659"
                    >
                      {props?.details?.prices?.per_season}
                    </Typography>
                  </div>

                  <div className={classes.experienceData3}>
                    <Typography className="my_docks_side-title">
                      Per Year (Price in $)
                    </Typography>
                    <Typography
                      className="my_docks_side-decs"
                      variant="p"
                      fontWeight="1000"
                      color="#1B3659"
                    >
                      {props?.details?.prices?.per_year}
                    </Typography>
                  </div>
                </Stack>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="boat_detail_owner_main">
        <div className="custom-container">
          <div className="boats_detail_owner_inner">
            <div className="d-flex justify-content-between flex-wrap">
              <h2 className="section-heding">Dock Availability</h2>
              <div className="boats_owner_profile">
                <Stack spacing={3} style={{ marginTop: "10px" }}>
                  <Typography variant="h6" fontWeight="600">
                    Daily Availabilites
                  </Typography>
                  <div className={classes.experienceData3}>
                    <Typography className="my_docks_side-title">
                      Is Daily Available ?
                    </Typography>
                    <Typography
                      className="my_docks_side-decs"
                      variant="p"
                      fontWeight="1000"
                      color="#1B3659"
                    >
                      {props?.details?.availability?.daily?.daily_available ===
                      1
                        ? "Yes"
                        : "No"}
                    </Typography>
                  </div>
                  <Typography variant="h6" fontWeight="600">
                    Monthly Availabilites
                  </Typography>
                  <div className={classes.experienceData3}>
                    <Typography className="my_docks_side-title">
                      Year
                    </Typography>
                    <Typography
                      className="my_docks_side-decs"
                      variant="p"
                      fontWeight="1000"
                      color="#1B3659"
                    >
                      {props?.details?.availability?.year}
                    </Typography>
                  </div>
                  <div className={classes.experienceData3}>
                    <Typography className="my_docks_side-title">
                      Months
                    </Typography>

                    {props?.details?.availability?.monthly.map(
                      (item, index) => (
                        <Typography
                          className="my_docks_side-decs"
                          variant="p"
                          fontWeight="1000"
                          color="#1B3659"
                        >
                          {item.month}
                        </Typography>
                      )
                    )}
                  </div>
                  <Typography className="my_docks_side-title">
                    Yearly Availabilites
                  </Typography>
                  <div className={classes.experienceData3}>
                    <Typography className="my_docks_side-title">
                      Years
                    </Typography>
                    <Typography className="my_docks_side-decs">
                      {props?.details?.availability?.yearly}
                    </Typography>
                  </div>

                  
                </Stack>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section className="boat_detail_owner_main">
        <div className="custom-container">
          <div className="boats_detail_owner_inner">
            <div className="d-flex justify-content-between flex-wrap">
              <Stack spacing={3} className="dock_photo_main">
                <h2 className="section-heding">Dock Photos</h2>
                <div className="experienceDataImage">
                  {props?.details?.images?.map((item, index) => (
                    <div className="form-row">
                      <div
                        className="img-block-boat"
                        // onClick={() => onImageUpdate(index)}
                      >
                        {console.log("experienceDataImages::>", item.image)}

                        <img
                          src={item.image}
                          alt="image not found"
                          style={{ objectFit: "cover", borderRadius: "5px" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Stack>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default DocksLocation;
