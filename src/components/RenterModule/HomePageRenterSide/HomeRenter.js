import React from "react";
import "./HomeRenter.scss";
import NavbarRenter from "../HomePageRenterSide/NavbarRenter/NavbarRenter"
import BannerRenter from "../HomePageRenterSide/BannerRenter/BannerRenter";
import CategoriesRenter from "../HomePageRenterSide/CategoriesRenter/CategoriesRenter";
import NearByBoatsRenter from "../HomePageRenterSide/NearByBoatsRenter/NearByBoatsRenter";
import NearByExperiencesRenter from "../HomePageRenterSide/NearByExperiencesRenter/NearByExperiencesRenter";
import NearByDocksRenter from "../HomePageRenterSide/NearByDocksRenter/NearByDocksRenter";
import AboutTmboRenter from "../HomePageRenterSide/AboutTmboRenter/AboutTmboRenter";
import HowItWorkRenter from "../HomePageRenterSide/HowItWorkRenter/HowItWorkRenter";
import FindBoatRenter from "../HomePageRenterSide/FindBoatRenter/FindBoatRenter";
import OurTestimonialRenter from "../HomePageRenterSide/OurTestimonialRenter/OurTestimonialRenter";
import FooterRenter from "../HomePageRenterSide/FooterRenter/FooterRenter";
import LastFooterRenter from "./LastFooterRenter/LastFooterRenter";
// import "../SassVariables/SassVariables.scss";

const HomeRenter = () => {
  return (
    <>
      <div className="renter-main-section">
      <NavbarRenter />
      <BannerRenter/>
      <CategoriesRenter/>
      <NearByBoatsRenter/>
      <NearByExperiencesRenter/>
      <NearByDocksRenter/>
      <AboutTmboRenter/>
      <FindBoatRenter/>
      <HowItWorkRenter/>
      <OurTestimonialRenter/>
      <FooterRenter/>
      <LastFooterRenter/>
      </div>
    </>
  );
};

export default HomeRenter;
