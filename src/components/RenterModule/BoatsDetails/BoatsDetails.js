import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBoatDetailsRenter } from "../../../actions/RenterModuleActions/BoatRenterAction/BoatRenterAction";
import { getExperienceDetailsRenter } from "../../../actions/RenterModuleActions/experienceRenterAction/experienceRenterAction";
import FooterRenter from "../HomePageRenterSide/FooterRenter/FooterRenter";
import LastFooterRenter from "../HomePageRenterSide/LastFooterRenter/LastFooterRenter";
import NavbarRenter from "../HomePageRenterSide/NavbarRenter/NavbarRenter";
import "./BoatsDetails.scss";
import BoatsDetailsAbout from "./BoatsDetailsAbout/BoatsDetailsAbout";
import BoatsDetailsBanner from "./BoatsDetailsBanner/BoatsDetailsBanner";
import BoatsDetailsOwner from "./BoatsDetailsOwner/BoatsDetailsOwner";

const BoatsDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [boatDetails, setBoatDetails] = useState([]);
  const [features, setFeatures] = useState([]);

  const boatDetail = useSelector(
    (state) => state.boatRenterReducer?.boatDetails
  );

  let boat = boatDetail?.data?.boat || [];
  useEffect(() => {
    if (boat) {
      setBoatDetails(boat);
    }
  }, [boat]);

  console.log("id:>>", boat);
  useEffect(async () => {
    setIsLoading(true);
    // let id = 1;
    await dispatch(getBoatDetailsRenter(id));
    setIsLoading(false);
  }, []);
  return (
    <>
      {isLoading ? <div className="se-pre-con"></div> : ""}
      <div className="boats_detail_wrapper">
        <NavbarRenter />
        <BoatsDetailsBanner details={boatDetails} />
        <BoatsDetailsAbout details={boatDetails} />
        <BoatsDetailsOwner details={boatDetails} />
        <FooterRenter />
        <LastFooterRenter />
      </div>
    </>
  );
};

export default BoatsDetails;
