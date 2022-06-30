import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDockDetailsListing } from "../../../../actions/RenterModuleActions/DockRenterAction/dockRenterAction";
import FooterRenter from "../../HomePageRenterSide/FooterRenter/FooterRenter";
import LastFooterRenter from "../../HomePageRenterSide/LastFooterRenter/LastFooterRenter";
import NavbarRenter from "../../HomePageRenterSide/NavbarRenter/NavbarRenter";
import "./DocksDetails.scss";
import DocksDetailsAbout from "./DocksDetailsAbout/DocksDetailsAbout";
import DocksDetailsBanner from "./DocksDetailsBanner/DocksDetailsBanner";
import DocksLocation from "./DocksLocation/DocksLocation";
import DocksOwner from "./DocksOwner/DocksOwner";
const DocksDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [dockDetails, setDockDetails] = useState([]);
  const [features, setFeatures] = useState([]);

  const detail = useSelector((state) => state.dockRenterReducer.dockDetails);

  let dock = detail?.data?.dock || [];
  let featureDock = detail?.data?.dock?.features || [];

  console.log("abc:>>", dock);
  useEffect(() => {
    if (dock) {
      // const experienceArray = Object.entries(dock);
      setDockDetails(dock);
    }
    if (featureDock) {
      setFeatures(featureDock);
    }
  }, [dock, featureDock]);

  useEffect(async () => {
    setIsLoading(true);
    // let id = id;
    await dispatch(getDockDetailsListing(id));
    setIsLoading(false);
  }, []);
  return (
    <>
      {isLoading ? <div className="se-pre-con"></div> : ""}
      <div className="boats_detail_wrapper">
        <NavbarRenter />
        <DocksDetailsBanner details={dockDetails} features={features} />
        <DocksLocation details={dockDetails} />
        <DocksOwner details={dockDetails} features={features} />
        <DocksDetailsAbout details={dockDetails} features={features} />
        <FooterRenter />
        <LastFooterRenter />
      </div>
    </>
  );
};

export default DocksDetails;
