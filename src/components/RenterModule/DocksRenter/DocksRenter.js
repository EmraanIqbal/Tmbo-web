import React, { useEffect, useState } from "react";
import "./DocksRenter.scss";
import NavbarRenter from "../HomePageRenterSide/NavbarRenter/NavbarRenter";
import BoatsBanner from "../BoatsRenter/BoatsBanner/BoatsBanner";
import BoatsSearch from "../BoatsRenter/BoatsSearch/BoatsSearch";
import PaginationRenter from "../BoatsRenter/PaginationRenter/PaginationRenter";
import FindBoatRenter from "../HomePageRenterSide/FindBoatRenter/FindBoatRenter";
import OurTestimonialRenter from "../HomePageRenterSide/OurTestimonialRenter/OurTestimonialRenter";
import FooterRenter from "../HomePageRenterSide/FooterRenter/FooterRenter";
import BoatsBannerOne from "../../../Assets/RenterImages/boats-banner.png";
import BoatsBannerTwo from "../../../Assets/RenterImages/banner-img.png";
import BoatsBannerThree from "../../../Assets/RenterImages/boat1.png";
import LastFooterRenter from "../HomePageRenterSide/LastFooterRenter/LastFooterRenter";
import DocksViewResult from "./DocksViewResult/DocksViewResult";
import { useDispatch, useSelector } from "react-redux";
import { getDockListing } from "../../../actions/RenterModuleActions/DockRenterAction/dockRenterAction";
let BannerparaBoats =
  "The popular products of dock solution series are mainly: Flap hydraulic dock leveler, telescopic dock leveler, vertical dock leveler, lip dock leveler, anti falling dock leveler; sponge dock seal, adjustable dock seal, inflatable dock seal, etc.";
let BoatheadingTeaxt =
  "Tmbo is a leading dock solution manufacturer and solution provider in USA";
let boatsliderimages = {
  img1: BoatsBannerOne,
  img2: BoatsBannerTwo,
  img3: BoatsBannerThree,
};
const DocksRenter = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [docklist, setDockList] = useState([]);

  const dock = useSelector((state) => state.dockRenterReducer.dockList);

  let list = dock?.data?.dock || [];
  useEffect(() => {
    if (list) {
      setDockList(list);
    }
  }, [list]);
  console.log("docklist:>", docklist);

  useEffect(async () => {
    setIsLoading(true);
    await dispatch(getDockListing());
    setIsLoading(false);
  }, []);
  return (
    <>
      {isLoading ? <div className="se-pre-con"></div> : ""}
      <div className="renter-main-section">
        <NavbarRenter />
        <BoatsBanner
          heading={BoatheadingTeaxt}
          paragraph={BannerparaBoats}
          image={boatsliderimages}
        />
        {/* <BoatsSearch /> */}
        <DocksViewResult list={docklist} />
        {/* <PaginationRenter /> */}
        {/* <FindBoatRenter /> */}
        <OurTestimonialRenter />
        <FooterRenter />
        <LastFooterRenter />
      </div>
    </>
  );
};

export default DocksRenter;
