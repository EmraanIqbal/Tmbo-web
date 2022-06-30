import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";

import {
  Checkbox,
  Container,
  Divider,
  MenuItem,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles, Select } from "@material-ui/core";
// import UploadImage from "../../Assets/uploadImage.png";
import axios from "axios";

import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { useDispatch, useSelector } from "react-redux";
import SidebarBoats from "../../Sidebar/SidebarBoats";
import Sidebar from "../../Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

const MydocksDetailsOwner = (props) => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const addBoatDetailData = useSelector(
    (state) => state.createBoatReducer.addBoatDetail
  );

  let boatData =
    addBoatDetailData && addBoatDetailData.data && addBoatDetailData.data.boat;
  return (
    <>
      <div className="BoatsDetailsOwner_main">
        {isLoading ? <div className="se-pre-con"></div> : ""}
        <Sidebar>
          <div className="add-new-boats-wrapper">
            <div className="boat-card">
              <Formik
                initialValues={props.data}
                // onSubmit={handleSubmit}
                // validationSchema={Yup.object().shape({
                //   cancellationPolicy: Yup.string().required(
                //     "Cancellation Policy required"
                //   ),
                //   boatPricing: Yup.number()
                //     .min(2, "Too Short!")
                //     .max(300, "Too Long! max number is 300")
                //     .required("Boat Pricing required"),
                //   fuelPays: Yup.string().required("Fule Pays required"),
                // })}
                // onSubmit={(fields) => {
                //   alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4));
                // }}
                // onSubmit={async (fields) => {
                //   await new Promise((r) => setTimeout(r, 300));
                //   alert(JSON.stringify(fields, null, 2));
                // }}
              >
                {({
                  errors,
                  status,
                  touched,
                  values,
                  setFieldValue,
                  handleBlur,
                  isValid,
                  dirty,
                }) => (
                  <>
                    <Form>
                      <div>
                        <h1 className="docks_heading">
                          We suggested prices based on the average of similar
                          Dock in your area
                        </h1>
                        <Stack spacing={3} style={{ marginTop: "25px" }}>
                          <div className="heading_h2">
                            <h2> Dock Location</h2>
                            <span onClick={() => navigate("/edit-dock-detail")}>
                              Edit
                            </span>
                          </div>
                          <div className="heading_h3">
                            <h3> Location Type</h3>
                            <h3> Residence Slip</h3>
                          </div>

                          <div className="heading_h3">
                            <h3>Address </h3>
                            <h3> </h3>
                          </div>
                          <Divider />
                        </Stack>
                        <Stack spacing={3} style={{ marginTop: "25px" }}>
                          <div className="heading_h2">
                            <h2>Dock Detail </h2>
                          </div>
                          <div className="heading_h3">
                            <h3> Type</h3>
                            <h3>{boatData?.year_id} </h3>
                          </div>
                          <div className="heading_h3">
                            <h3>Title</h3>
                            <h3>{boatData?.make_id} </h3>
                          </div>
                          <div className="heading_h3">
                            <h3>Description</h3>
                            <h3>{boatData?.make_id} </h3>
                          </div>

                          <Divider />
                        </Stack>

                        <Stack spacing={3} style={{ marginTop: "25px" }}>
                          <div className="heading_h2">
                            <h2> Dock Features</h2>
                            <span
                              onClick={() => navigate("/edit-dock-feature")}
                            >
                              Edit
                            </span>
                          </div>
                          {/* {experienceData.features.map((item, index) => ( */}

                          {boatData?.features.map((item, index) => {
                            let feature = item.feature;
                            return (
                              <div style={{ width: "50%" }}>
                                <Typography fontWeight={500}>
                                  {feature.name}
                                </Typography>
                              </div>
                            );
                          })}

                          <Divider />
                        </Stack>

                        {/* <Stack spacing={3} style={{ marginTop: "25px" }}>
                          <div className="heading_h2">
                            <h2> Allowed Things</h2>
                          </div>

                          {boatData?.things.map((item, index) => {
                            let feature = item.thing;
                            return (
                              <div style={{ width: "50%" }}>
                                <Typography fontWeight={500}>
                                  {feature.name}
                                </Typography>
                              </div>
                            );
                          })}

                          <Divider />
                        </Stack> */}

                        {/* <Stack spacing={3} style={{ marginTop: "25px" }}>
                          <div className="heading_h2">
                            <h2>Boat Insurance Detail</h2>
                          </div>
                          <div className="heading_h3">
                            <h3> Insurance Company</h3>
                            <h3>{boatData?.insurance_company}</h3>
                          </div>
                          <div className="heading_h3">
                            <h3> Insurance Policy</h3>
                            <h3>{boatData?.insurance_policy}</h3>
                          </div>
                          <div className="heading_h3">
                            <h3> Boat Registration #</h3>
                            <h3>{boatData?.registration_no}</h3>
                          </div>
                          <div className="heading_h3">
                            <h3> Line Holder</h3>
                            <h3> {boatData?.line_holder}</h3>
                          </div>
                          <Divider />
                        </Stack> */}
                        <Stack spacing={3} style={{ marginTop: "25px" }}>
                          <div className="heading_h2">
                            <h2> Pictures</h2>
                            <span
                              onClick={() => navigate("/edit-dock-pictures")}
                            >
                              Edit
                            </span>
                          </div>

                          <div className="experienceDataImage">
                            {boatData?.images?.map((item, index) => (
                              <div className="form-row">
                                <div
                                  className="img-block-boat"
                                  // onClick={() => onImageUpdate(index)}
                                >
                                  {console.log(
                                    "experienceDataImages::>",
                                    item.image
                                  )}

                                  <img
                                    src={item.image}
                                    alt="image not found"
                                    style={{
                                      objectFit: "cover",
                                      borderRadius: "5px",
                                    }}
                                  />
                                </div>

                                {/* <div className="image-item__btn-wrapper">
                          <div
                            className="close-icon-boat-img"
                            onClick={() => handleImageDelete(item)}
                          >
                            <CancelRoundedIcon />
                          </div>
                        </div> */}
                              </div>
                              // <div className="col-sm-12 col-md-6 col-lg-6" key={index}>
                              //   <div className="form-row">
                              //     <div
                              //       className="img-block-boat"
                              //       // onClick={() => onImageUpdate(index)}
                              //     >
                              //       {console.log("experienceDataImages::>", item.image)}

                              //       <img
                              //         src={item.image}
                              //         alt="image not found"
                              //         style={{ objectFit: "cover" }}
                              //       />
                              //     </div>
                              //     <div className="image-item__btn-wrapper">
                              //       <div
                              //         className="close-icon-boat-img"
                              //         // onClick={() => onImageRemove(index)}
                              //       >
                              //         {/* <CancelRoundedIcon /> */}
                              //       </div>
                              //     </div>
                              //   </div>
                              // </div>
                            ))}
                          </div>
                          <Divider />
                        </Stack>
                        <Stack spacing={3} style={{ marginTop: "25px" }}>
                          <div className="heading_h2">
                            <h2> Availability</h2>
                            <span
                              onClick={() =>
                                navigate("/edit-dock-availability")
                              }
                            >
                              Edit
                            </span>
                          </div>
                          <div className="availabilty_detail">
                            {/* collapse start here  */}
                            <div
                              className="accordion accordion-flush"
                              id="accordionFlushExample"
                            >
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="flush-headingOne"
                                >
                                  <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseOne"
                                    aria-expanded="false"
                                    aria-controls="flush-collapseOne"
                                  >
                                    Monday
                                  </button>
                                </h2>
                                <div
                                  id="flush-collapseOne"
                                  className="accordion-collapse ccollapse show"
                                  aria-labelledby="flush-headingOne"
                                  data-bs-parent="#accordionFlushExample"
                                >
                                  <div className="accordion-body">
                                    <div className="avail_time_box">
                                      <p>
                                        Start Time:9:00 am <br /> End Time:5:00
                                        am
                                      </p>
                                    </div>
                                    <div className="avail_time_box">
                                      <p>
                                        Start Time:9:00 am <br /> End Time:5:00
                                        am
                                      </p>
                                    </div>
                                    <div className="avail_time_box">
                                      <p>
                                        Start Time:9:00 am <br /> End Time:5:00
                                        am
                                      </p>
                                    </div>
                                    <div className="avail_time_box">
                                      <p>
                                        Start Time:9:00 am <br /> End Time:5:00
                                        am
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="flush-headingTwo"
                                >
                                  <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="flush-collapseTwo"
                                  >
                                    Tuesday
                                  </button>
                                </h2>
                                <div
                                  id="flush-collapseTwo"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="flush-headingTwo"
                                  data-bs-parent="#accordionFlushExample"
                                >
                                  <div className="accordion-body">
                                    <div className="avail_time_box">
                                      <p>
                                        Start Time:9:00 am <br /> End Time:5:00
                                        am
                                      </p>
                                    </div>
                                    <div className="avail_time_box">
                                      <p>
                                        Start Time:9:00 am <br /> End Time:5:00
                                        am
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="flush-headingThree"
                                >
                                  <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseThree"
                                    aria-expanded="false"
                                    aria-controls="flush-collapseThree"
                                  >
                                    Wednesday
                                  </button>
                                </h2>
                                <div
                                  id="flush-collapseThree"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="flush-headingThree"
                                  data-bs-parent="#accordionFlushExample"
                                >
                                  <div className="accordion-body">
                                    <div className="avail_time_box">
                                      <p>
                                        Start Time:9:00 am <br /> End Time:5:00
                                        am
                                      </p>
                                    </div>
                                    <div className="avail_time_box">
                                      <p>
                                        Start Time:9:00 am <br /> End Time:5:00
                                        am
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* end collapse  */}
                          </div>
                        </Stack>
                      </div>
                      {/* <div className="form-group mt-3 next-prev">
                        <button
                          type="button"
                          onClick={() => props.prev(values)}
                          className="btn btn-primary back"
                        >
                          Back
                        </button>
                        <button type="submit" className="btn btn-primary next">
                          Submit
                        </button>
                      </div> */}
                    </Form>
                  </>
                )}
              </Formik>
            </div>
          </div>
        </Sidebar>
      </div>
    </>
  );
};

export default MydocksDetailsOwner;
