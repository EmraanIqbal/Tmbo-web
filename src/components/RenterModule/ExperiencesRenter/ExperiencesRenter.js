import React, { useEffect, useState } from "react";
import "./ExperiencesRenter.scss";
import NavbarRenter from "../HomePageRenterSide/NavbarRenter/NavbarRenter";
import BoatsBanner from "../BoatsRenter/BoatsBanner/BoatsBanner";
import PaginationRenter from "../BoatsRenter/PaginationRenter/PaginationRenter";
import FindBoatRenter from "../HomePageRenterSide/FindBoatRenter/FindBoatRenter";
import OurTestimonialRenter from "../HomePageRenterSide/OurTestimonialRenter/OurTestimonialRenter";
import FooterRenter from "../HomePageRenterSide/FooterRenter/FooterRenter";
import BoatsSearch from "../BoatsRenter/BoatsSearch/BoatsSearch";

import BoatsBannerOne from "../../../Assets/RenterImages/exp-banner.png";
import BoatsBannerTwo from "../../../Assets/RenterImages/find-boat.png";
import BoatsBannerThree from "../../../Assets/RenterImages/exp2.png";
import LastFooterRenter from "../HomePageRenterSide/LastFooterRenter/LastFooterRenter";
import ExperiencesViewResult from "./ExperiencesViewResult/ExperiencesViewResult";
import { useDispatch, useSelector } from "react-redux";
import { getExperienceListingRenter } from "../../../actions/RenterModuleActions/experienceRenterAction/experienceRenterAction";
let sliderImages = {
  img1: BoatsBannerOne,
  img2: BoatsBannerTwo,
  img3: BoatsBannerThree,
};
let paragraphText =
  "Don’t sink your career with a subpar resume. LiveCareer’s marina and boating resume examples are crafted by our team of certified resume writers to show you how to write, design and format a standout document. ";
let headingTeaxt =
  "The marina and boating industry has a higher than average turnover rate, which means captains";
const ExperiencesRenter = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [explist, setExpList] = useState([]);

  const experience = useSelector(
    (state) => state.experienceRenterReducer.experienceList
  );

  let list = experience?.data?.experience || [];
  useEffect(() => {
    if (list) {
      setExpList(list);
    }
  }, [list]);
  console.log("experienceList:>", list);

  useEffect(async () => {
    setIsLoading(true);
    await dispatch(getExperienceListingRenter());
    setIsLoading(false);
  }, []);
  return (
    <>
      {isLoading ? <div className="se-pre-con"></div> : ""}
      <div className="renter-main-section">
        <NavbarRenter />
        <BoatsBanner
          heading={headingTeaxt}
          paragraph={paragraphText}
          image={sliderImages}
        />
        {/* <BoatsSearch /> */}
        <ExperiencesViewResult list={explist} />
        {/* <PaginationRenter /> */}
        {/* <FindBoatRenter /> */}
        <OurTestimonialRenter />
        <FooterRenter />
        <LastFooterRenter />
      </div>
    </>
  );
};

export default ExperiencesRenter;
