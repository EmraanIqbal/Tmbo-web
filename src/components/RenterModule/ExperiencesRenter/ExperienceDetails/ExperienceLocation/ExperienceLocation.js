import React from "react";
import { Divider, Typography } from "@mui/material";
import { makeStyles, Select } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  experienceData3: {
    display: "flex",
  },
}));

const ExperienceLocation = (props) => {
  console.log("address::>", props);
  const classes = useStyles();
  return (
    <>
      <section className="boat_detail_owner_main">
        <div className="custom-container">
          <div className="boats_detail_owner_inner">
            <div className="d-flex justify-content-between flex-wrap">
              <h2 className="section-heding">Experience Location</h2>
              <div className="boats_owner_profile">
                <Typography>{props?.details?.address}</Typography>
              </div>
            </div>
          </div>
          <Divider className="divder_padding" />
        </div>
      </section>
    </>
  );
};

export default ExperienceLocation;
