import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import SidebarBoats from "../Sidebar/SidebarBoats";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "../MyDocks/MyDocks.scss";

import boat from "../../Assets/boat-circle.png";
import Rating from "../../components/Dashboard/Rating";
import { makeStyles } from "@material-ui/core";
import SidebarDocks from "../Sidebar/SidebarDocks";
import { useDispatch, useSelector } from "react-redux";
import { getDockListing } from "../../actions/createDockActions/createDockAction";
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

const MyDocks = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useState("7");
  const [page, setPage] = useState("1");
  const [boatDataList, setBoatDataList] = useState([]);
  const dispatch = useDispatch();

  const dockReducer = useSelector((state) => state.createDockReducer);
  console.log("dockReducer:>", dockReducer);
  let dockLists =
    dockReducer &&
    dockReducer.dockLists &&
    dockReducer.dockLists.data &&
    dockReducer.dockLists.data.dock;
  console.log("dockReducer:>", dockLists);

  // const { dockListing: { data: { dock = [] } = {} } = {} } = dockReducer;

  useEffect(async () => {
    if (dockLists) {
      setBoatDataList(dockLists);
    }
  }, [dockLists]);

  useEffect(async () => {
    setIsLoading(true);

    await dispatch(getDockListing(state, page));
    setIsLoading(false);
  }, []);

  return (
    <SidebarDocks>
      {isLoading ? <div className="se-pre-con"></div> : ""}

      <div className="exp_detail_card">
        {boatDataList?.map((item, index) => (
          <div className={classes.card}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent style={{ padding: "20px 30px" }}>
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
                    <Link to="/docks-details-owner">Show details</Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
        {/* <Pagination count={10} color="primary" /> */}
      </div>
    </SidebarDocks>
  );
};

export default MyDocks;
