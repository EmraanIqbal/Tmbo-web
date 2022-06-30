import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import boat from "../../Assets/boat-circle.png";
import Rating from "../../components/Dashboard/Rating";
import { makeStyles } from "@material-ui/core";
import SidebarExperiences from "../Sidebar/SidebarExperiences";
import { useDispatch, useSelector } from "react-redux";
import { experienceListingAction } from "../../actions/createExperienceActions/createExperienceAction";
import { Pagination } from "@mui/material";
import "../MyExperiences/MyExperiences.scss";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: theme.spacing(2),
    // height: "70px",
  },
  details: {
    color: "#A60C0C",
    fontWeight: "800",
  },
  buttons: {
    marginLeft: theme.spacing(20),
  },
}));

const MyExperiences = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const experienceListing = useSelector(
    (state) => state.createExperienceReducer.experienceListing
  );

  console.log("experienceListing::>", experienceListing);

  useEffect(async () => {
    setIsLoading(true);
    await dispatch(experienceListingAction());
    setIsLoading(false);
  }, []);

  return (
    <SidebarExperiences>
      {isLoading ? <div className="se-pre-con"></div> : ""}

      <div className="exp_detail_card">
        {experienceListing?.experience.map((item, index) => (
          <Card sx={{ marginBottom: 5 }}>
            <CardContent
              style={{ padding: "20px 30px" }}
              className="my_exp_detail_box"
            >
              <div className="img-city-booking">
                <div className="outer-city">
                  <span className="rounded_img">
                    {" "}
                    <img src={boat} alt="not found" />
                  </span>
                  <div className="inner-city">
                    <div>{item.type}</div>
                    <div>{item.address}</div>
                  </div>
                </div>
                <div className="date">Add Date: 20 Oct 2021</div>
              </div>
              <div className="border-card-booking"></div>
              <div className="star-date-booking">
                <Rating value={4} />
                <div className="show-details">
                  <Link to="/experience-details-owner">Show details</Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        {/* <Pagination count={10} /> */}
      </div>
    </SidebarExperiences>
  );
};

export default MyExperiences;
