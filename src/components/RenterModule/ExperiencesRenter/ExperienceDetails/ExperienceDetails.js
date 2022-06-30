import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getExperienceDetailsRenter } from "../../../../actions/RenterModuleActions/experienceRenterAction/experienceRenterAction";

import FooterRenter from "../../HomePageRenterSide/FooterRenter/FooterRenter";
import LastFooterRenter from "../../HomePageRenterSide/LastFooterRenter/LastFooterRenter";
import NavbarRenter from "../../HomePageRenterSide/NavbarRenter/NavbarRenter";
import ExperienceDetailsAbout from "./ExperienceDetailsAbout/ExperienceDetailsAbout";
// import "./ExperienceDetails.scss";
import ExperienceDetailsBanner from "./ExperienceDetailsBanner/ExperienceDetailsBanner";
import ExperienceDetailsOwner from "./ExperienceDetailsOwner/ExperienceDetailsOwner";
import ExperienceLocation from "./ExperienceLocation/ExperienceLocation";

const ExperienceDetails = (props) => {
  const dispatch = useDispatch();
  const { id } = useParams();

  console.log("abc:>>", id);

  const [isLoading, setIsLoading] = useState(false);
  const [expDetails, setExpDetails] = useState([]);
  const [features, setFeatures] = useState([]);

  const experienceDetail = useSelector(
    (state) => state.experienceRenterReducer.experienceDetails
  );

  let experience = experienceDetail?.data?.experience || [];
  let featureExp = experienceDetail?.data?.features || [];
  useEffect(() => {
    if (experience) {
      // const experienceArray = Object.entries(experience);
      setExpDetails(experience);
    }
    if (featureExp) {
      setFeatures(featureExp);
    }
  }, [experience, featureExp]);

  useEffect(async () => {
    setIsLoading(true);
    // let id = id;
    await dispatch(getExperienceDetailsRenter(id));
    setIsLoading(false);
  }, []);
  return (
    <>
      {isLoading ? <div className="se-pre-con"></div> : ""}
      <div className="boats_detail_wrapper">
        <NavbarRenter />
        <ExperienceDetailsBanner details={expDetails} features={features} />
        <ExperienceLocation details={expDetails} />
        <ExperienceDetailsOwner details={expDetails} features={features} />
        <ExperienceDetailsAbout details={expDetails} features={features} />
        <FooterRenter />
        <LastFooterRenter />
      </div>
    </>
  );
};

export default ExperienceDetails;
