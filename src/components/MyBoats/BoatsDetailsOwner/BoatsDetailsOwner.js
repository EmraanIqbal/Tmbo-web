import React, { useEffect, useState } from "react";
import ImageUploading from "react-images-uploading";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../BoatsDetailsOwner/BoatsDetailsOwner.scss";

// import { RadioButton, RadioButtonGroup } from "./RadioInput";
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
// import {
//   addBoatDetail,
//   createBoat,
// } from "../../actions/createBoatActions/createBoatAction";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import { deleteBoatImage } from "../../actions/createBoatActions/DeleteImageAction/DeleteImageAction";

const useStyles = makeStyles((theme) => ({
  description: {
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      // backgroundColor: "#FFF",
    },
    // border: "2px solid #CED4DA",
    // borderRadius: "5px",
    width: "100%",
  },
  row1Styling: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  row1: {
    width: "85%",
    marginBottom: "20px",
  },
  box1: {
    backgroundColor: "white",
  },
  box2: {
    backgroundColor: "white",
    // width: "49%",
  },
  boxColumns: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  descriptionSec: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
  },
  experienceData1: {
    display: "flex",

    // width: "50%",
  },
  experienceDataImage: {
    // display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    // width: "50%",
  },
  experienceData2: {
    display: "flex",
  },
  experienceData3: {
    display: "flex",
  },
  locationData: {
    variant: "p",
    color: "#1B3659",
    fontWeight: "1000",
  },
}));

const BoatsDetailsOwner = (props) => {
  const classes = useStyles();
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
                      <div className={classes.mainSection}>
                        <Stack spacing={3} style={{ marginTop: "25px" }}>
                          <div className="heading_h2">
                            <h2> Boat Location</h2>
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
                            <h2>Boat Detail </h2>
                          </div>
                          <div className="heading_h3">
                            <h3> Boat Year </h3>
                            <h3>{boatData?.year_id} </h3>
                          </div>
                          <div className="heading_h3">
                            <h3> Boat Make </h3>
                            <h3>{boatData?.make_id} </h3>
                          </div>
                          <div className="heading_h3">
                            <h3> Boat Model </h3>
                            <h3>{boatData?.model_id} </h3>
                          </div>
                          <div className="heading_h3">
                            <h3> Boat Length </h3>
                            <h3>{boatData?.length} </h3>
                          </div>
                          <div className="heading_h3">
                            <h3> Boat Capacity </h3>
                            <h3> {boatData?.capacity} </h3>
                          </div>
                          <div className="heading_h3">
                            <h3> Boat Type </h3>
                            <h3> {boatData?.boat_type_id}</h3>
                          </div>
                          <div className="heading_h3">
                            <h3> Engine Year </h3>
                            <h3>{boatData?.engine_year} </h3>
                          </div>
                          <div className="heading_h3">
                            <h3> Engine Type </h3>
                            <h3> {boatData?.engine_type} </h3>
                          </div>
                          <div className="heading_h3">
                            <h3> Number Of Engines </h3>
                            <h3> {boatData?.num_engine} </h3>
                          </div>
                          <div className="heading_h3">
                            <h3> Total Horse Power </h3>
                            <h3> {boatData?.horse_power} </h3>
                          </div>
                          <div className="heading_h3">
                            <h3> Title </h3>
                            <h3>{boatData?.title} </h3>
                          </div>
                          <div className="heading_h3">
                            <h3> Description </h3>
                            <h3> {boatData?.description} </h3>
                          </div>

                          <Divider />
                        </Stack>

                        <Stack spacing={3} style={{ marginTop: "25px" }}>
                          <div className="heading_h2">
                            <h2> Boat Features</h2>
                          </div>
                          {/* {experienceData.features.map((item, index) => ( */}

                          {boatData?.features.map((item, index) => {
                            let feature = item.feature;
                            return (
                              <div
                                className={classes.experienceData1}
                                style={{ width: "50%" }}
                              >
                                <Typography fontWeight={500}>
                                  {feature.name}
                                </Typography>
                              </div>
                            );
                          })}

                          {/* ))} */}

                          <Divider />
                        </Stack>

                        <Stack spacing={3} style={{ marginTop: "25px" }}>
                          <div className="heading_h2">
                            <h2> Allowed Things</h2>
                          </div>
                          {/* {experienceData.features.map((item, index) => ( */}

                          {boatData?.things.map((item, index) => {
                            let feature = item.thing;
                            return (
                              <div
                                className={classes.experienceData1}
                                style={{ width: "50%" }}
                              >
                                <Typography fontWeight={500}>
                                  {feature.name}
                                </Typography>
                              </div>
                            );
                          })}

                          {/* ))} */}

                          <Divider />
                        </Stack>

                        <Stack spacing={3} style={{ marginTop: "25px" }}>
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
                        </Stack>
                        <Stack spacing={3} style={{ marginTop: "25px" }}>
                          <div className="heading_h2">
                            <h2> Pictures</h2>
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

export default BoatsDetailsOwner;
