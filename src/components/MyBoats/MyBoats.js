import SidebarBoats from "../Sidebar/SidebarBoats";
import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import "./BookingCard.scss";

import boat from "../../Assets/RenterImages/about-image.png";
import Rating from "../../components/Dashboard/Rating";
import { makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getBoatLists } from "../../actions/createBoatActions/GetBoatLists/GetBoatListAction";
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

const MyBoats = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useState("14");
  const [page, setPage] = useState("1");
  const [boatDataList, setBoatDataList] = useState([]);
  const dispatch = useDispatch();

  const getBoats = useSelector((state) => state.getBoatListReducer);

  const { getBoatList: { data: { boats: { data = [] } = {} } = {} } = {} } =
    getBoats;

  useEffect(async () => {
    if (data) {
      setBoatDataList(data);
    }
  }, [data]);

  useEffect(async () => {
    setIsLoading(true);

    await dispatch(getBoatLists(state, page));
    setIsLoading(false);
  }, []);
  return (
    <SidebarBoats>
      {isLoading ? <div className="se-pre-con"></div> : ""}

      <div className="exp_detail_card">
        {boatDataList?.map((item, index) => (
          <div className={classes.card}>
            <Card>
              <CardContent style={{ padding: "20px 30px" }}>
                <div className="img-city-booking">
                  <div className="outer-city">
                    <span className="rounded_img">
                      {" "}
                      <img src={boat} alt="not found" />
                    </span>
                    <div className="inner-city">
                      <div>{item.boat_type_id}</div>
                      <div>{item.address}</div>
                    </div>
                  </div>
                </div>
                <div className="border-card-booking"></div>
                <div className="star-date-booking">
                  <Rating value={4} />
                  <div className="show-details">
                    <Link
                      to="/boats-details-owner"
                      style={{ cursor: "pointer" }}
                    >
                      Show details
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
        {/* <Pagination count={10} color="primary" /> */}
      </div>
    </SidebarBoats>
  );
};

export default MyBoats;
