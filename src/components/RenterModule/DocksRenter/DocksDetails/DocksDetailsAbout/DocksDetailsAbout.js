import { Divider } from "@mui/material";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import DockBookingModal from "../../../../../Modals/DocksModol/BookingModal/DockBookingModal";
import Rating from "../../../../Dashboard/Rating";
import "../DocksDetailsAbout/DocksDetailsAbout.scss";

const DocksDetailsAbout = (props) => {
  let { id } = useParams();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <section className="BoatsDetailsAbout_main">
        <div className="custom-container">
          <div className="boats_detail_inner_main">
            {/* <div className="boats_about_inner">
              <h2 className="section-heding">About Experience</h2>
              <Rating value={4} />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero
            </p> */}
            <section className="boarts_detail_features">
              <h2 className="section-heding">Dock Features</h2>
              <div className="boats_detail_feature_table">
                {props?.details?.features?.map((item, index) => (
                  // <div className="detail_feature_left">
                  <>
                    <div className="feature_detail_inner">
                      <p>{item?.feature?.name}</p>
                      <p>YES</p>
                    </div>
                    {/* <div className="feature_detail_inner">
                      <p>Anchor</p>
                      <p>YES</p>
                    </div>
                    <div className="feature_detail_inner">
                      <p>Life Jackets</p>
                      <p>YES</p>
                    </div> */}
                  </>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>
      
      <section className="boarts_detail_features">
        <div className="boats_detail_feature_table req_to_book">
          <div className="custom-container">
            <button className="btn book-now-btn" onClick={handleOpen}>
              Confirm
            </button>
            <Divider/>
          </div>
         
        </div>
      </section>
      <DockBookingModal open={open} handleClose={handleClose} />
    </>
  );
};

export default DocksDetailsAbout;
