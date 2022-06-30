import React, { useState } from "react";
import NavbarRenter from "../../HomePageRenterSide/NavbarRenter/NavbarRenter";
import "./MyTripsBoatsInspection.scss";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import UploadImage from "../../../../Assets/uploadImage.png";
import ImageUploading from "react-images-uploading";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";

import myTripdtailImage from "../../../../Assets/RenterImages/boats-detail.png";
import LastFooterRenter from "../../HomePageRenterSide/LastFooterRenter/LastFooterRenter";
import { Link } from "react-router-dom";
import MyDashboardSidebar from "../MyDashboardSidebar/MyDashboardSidebar";
import ownerBoats from "../../../../Assets/RenterImages/owner-pro.png";
import Rating from "../../../Dashboard/Rating";
import chatIcon from "../../../../Assets/RenterImages/chat-icon.png";
const MyTripsBoatsInspection = () => {
  const [imageData, setImages] = useState([]);
  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };
  const maxNumber = 69;

  return (
    <>
      <NavbarRenter />
      <div className="renter-main-section">
        <div className="custom-container">
          <div className="my_dsahboard_main">
            <div className="my_dsahboard_inner">
              <MyDashboardSidebar />
              <div className="my_dashboard_detail">
                <div className="my_profile_hed">
                  <h3>My Trips / Boats Inspection</h3>
                </div>
                <div className="my_trips_boats_inspection">
                  <h3>Add pre-inspection photos</h3>
                  <div className="pre_inspection_photoes">
                    <Formik
                    // initialValues={{
                    //   profile: [],
                    // }}
                    // initialValues={props.data}
                    // onSubmit={handleSubmit}
                    // validationSchema={Yup.object().shape({
                    //   profile: Yup.array().min(2, "Select at least 2 file"),
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
                        <Form>
                          {/* 15th row */}
                          <div className="row mt-2">
                            <div
                              className="col-sm-12"
                              style={{ marginBottom: "10px" }}
                            >
                              {/* <Field
                  id="file"
                  name="profile"
                  type="file"
                  onChange={(event) => {
                    const files = event.target.files;
                    let myFiles = Array.from(files);
                    setFieldValue("profile", myFiles);
                  }}
                  multiple
                />
                <ErrorMessage
                  className="invalid-feedback"
                  component="div"
                  name="profile"
                /> */}
                            </div>
                            {/* <div className="boat-detail">Choose Image Type</div>
              {photo_requirement_type?.map((feature, index) => (
                <div className="col-sm-12 col-md-6 col-lg-3" key={feature.id}>
                  <div className="form-row">
                    <div className="inputGroup">
                      <input
                        id={feature.type}
                        name="option1"
                        type="checkbox"
                        onChange={(e) => handleChange(e, feature)}
                      />
                      <label htmlFor={feature.type}>{feature.type}</label>
                    </div>
                  </div>
                </div>
              ))} */}

                            <ImageUploading
                              multiple
                              value={imageData}
                              onChange={onChange}
                              maxNumber={maxNumber}
                              dataURLKey="image"
                            >
                              {({
                                imageList,
                                onImageUpload,
                                onImageRemoveAll,
                                onImageUpdate,
                                onImageRemove,
                                isDragging,
                                dragProps,
                              }) => (
                                <div className="row">
                                  {imageList.map((image, index) => (
                                    <div
                                      className="col-sm-6 col-md-6 col-lg-4 col-xl-3"
                                      key={index}
                                    >
                                      <div className="form-row">
                                        <div
                                          className="img-block-boat"
                                          onClick={() => onImageUpdate(index)}
                                        >
                                          <img
                                            src={image.image}
                                            alt=""
                                            style={{ objectFit: "cover" }}
                                          />
                                          <div
                                            className="close-icon-boat-img"
                                            onClick={() => onImageRemove(index)}
                                          >
                                            <CancelRoundedIcon />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                  <div
                                    onClick={onImageUpload}
                                    {...dragProps}
                                    className="col-sm-6 col-md-6 col-lg-4 col-xl-3 "
                                    style={{ cursor: "pointer" }}
                                  >
                                    <div className="img-block-boat"> <img src={UploadImage} alt="not found" /></div>
                                   
                                  </div>
                                </div>
                              )}
                            </ImageUploading>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </div>
                  <div className="cancel_booking_div">
                    <Link to="#" className="btn blue_btn">
                      Submit
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <LastFooterRenter />
      </div>
    </>
  );
};

export default MyTripsBoatsInspection;
