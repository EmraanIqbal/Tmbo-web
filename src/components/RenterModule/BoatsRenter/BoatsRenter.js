import React, { useEffect, useState } from "react";
import "./BoatsRenter.scss";
import NavbarRenter from "../HomePageRenterSide/NavbarRenter/NavbarRenter";
import BoatsBanner from "../BoatsRenter/BoatsBanner/BoatsBanner";
import BoatsSearch from "./BoatsSearch/BoatsSearch";
import ViewResult from "./ViewResult/ViewResult";
import PaginationRenter from "./PaginationRenter/PaginationRenter";
import FindBoatRenter from "../HomePageRenterSide/FindBoatRenter/FindBoatRenter";
import OurTestimonialRenter from "../HomePageRenterSide/OurTestimonialRenter/OurTestimonialRenter";
import FooterRenter from "../HomePageRenterSide/FooterRenter/FooterRenter";
import BoatsBannerOne from "../../../Assets/RenterImages/boats-banner.png";
import BoatsBannerTwo from "../../../Assets/RenterImages/banner-img.png";
import BoatsBannerThree from "../../../Assets/RenterImages/boat1.png";
import LastFooterRenter from "../HomePageRenterSide/LastFooterRenter/LastFooterRenter";
import { useDispatch, useSelector } from "react-redux";
import { getBoatListingRenter } from "../../../actions/RenterModuleActions/BoatRenterAction/BoatRenterAction";
let BannerparaBoats =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,";
let BoatheadingTeaxt =
  "Boats Lorem Ipsum is simply dummy text of the printing and typesetting";
let boatsliderimages = {
  img1: BoatsBannerOne,
  img2: BoatsBannerTwo,
  img3: BoatsBannerThree,
};
const BoatsRenter = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [boatlist, setBoatList] = useState([]);

  const boat = useSelector((state) => state.boatRenterReducer.boatList);

  let list = boat?.data?.boats?.data || [];
  useEffect(() => {
    if (list) {
      setBoatList(list);
    }
  }, [list]);

  console.log("boatlist::>", boatlist);

  useEffect(async () => {
    setIsLoading(true);
    let boatData = {
      type: 2,
      longitude: 1234321,
      latitude: 676545,
    };
    await dispatch(getBoatListingRenter(boatData));
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
        <BoatsSearch />
        <ViewResult list={boatlist} />
        <PaginationRenter />
        <FindBoatRenter />
        <OurTestimonialRenter />
        <FooterRenter />
        <LastFooterRenter />
      </div>
    </>
  );
};

export default BoatsRenter;
