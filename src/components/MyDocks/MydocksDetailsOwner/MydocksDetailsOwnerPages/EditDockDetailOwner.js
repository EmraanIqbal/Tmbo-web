import React, { useEffect, useState } from "react";
import uplaoddummy from "../../../../Assets/RenterImages/uploadImage.png";

import SidebarDocks from "../../../Sidebar/SidebarDocks";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import MapContainer from "../../../GoogleMap/GoogleMap";
import { useNavigate } from "react-router-dom";

const EditDockDetailOwner = () => {
  const navigate=useNavigate();
  // upload image start
  const [image, setImage] = useState({ preview: "", raw: "" });
  const handleChangeImage = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };
  const [isLoading, setIsLoading] = useState(false);
  const dockDropDownInfo = JSON.parse(localStorage.getItem("dockDropDownInfo"));

  return (
    <>
      <SidebarDocks newBoat={true}>
        <div className="add-new-boats-wrapper edit_new_wrapper">
          {/* <div className="add-new">Add New Experience</div> */}
          <h1 className="docks_heading Edit">Edit Dock Detail</h1>
          <div className="boat-card">
            <Formik>
              <Form>
                {/* 0th row */}
                <div>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="location-boat">
                        <h2 className="add_new_sub_heading">
                          Tell us about your Dock
                        </h2>
                      </div>
                      <div className="form-group add_new_loctaion">
                        <label htmlFor="type">Address</label>
                        <MapContainer />
                      </div>
                      <div className="form-group">
                        <label htmlFor="type">Type</label>
                        <Field
                          name="type"
                          type="text"
                          className="form-control"
                        />
                        {/* <Field
                      name="type"
                      as="select"
                      className={
                        "form-control" +
                        (errors.type && touched.type ? " is-invalid" : "")
                      }
                    >
                      <option value=""></option>
                      <option value="Diving">Diving</option>
                      <option value="Permanent">Permanent</option>
                      <option value="Expert">Expert</option>
                      <option value="Interny">Interny</option>
                    </Field> */}

                        <ErrorMessage
                          name="type"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="form-row both">
                        <div className="form-group col-12">
                          <label htmlFor="experience">Dock Title</label>
                          <Field
                            name="experience"
                            type="text"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="experience"
                            component="div"
                            className="invalid-feedback"
                          />
                        </div>
                      </div>
                      <div className="form-row both">
                        <div className="form-group col-12">
                          <label htmlFor="description">Description</label>
                          <Field
                            name="description"
                            type="text"
                            as="textarea"
                            rows="4"
                            className="form-control"
                          />

                          <ErrorMessage
                            name="description"
                            component="div"
                            className="invalid-feedback"
                          />
                        </div>
                      </div>
                      {/* {/ feature image start here  /} */}
                      <div className="form-row both add_fetaure_img">
                        <div className="form-group col-12">
                          <label htmlFor="description">Feature Image</label>
                          {/* {/ <label htmlFor="description">Add Feature Image</label> /} */}
                          <div className="my_profile_marcus_img my_profile_edit_img">
                            <div className="edit_photo_renter text-center">
                              <div>
                                <div className="form-group col-12">
                                  <label htmlFor="upload-button">
                                    {image.preview ? (
                                      <img src={image.preview} alt="dummy" />
                                    ) : (
                                      <>
                                        <span>
                                          <img src={uplaoddummy} />
                                        </span>
                                      </>
                                    )}
                                  </label>
                                  <input
                                    type="file"
                                    id="upload-button"
                                    style={{ display: "none" }}
                                    onChange={handleChangeImage}
                                  />
                                  {/* <Field
                                name="featuredImage"
                                type="file"
                                id="upload-button"
                                style={{ display: "none" }}
                                onChange={handleChangeImage}
                                className={
                                  "form-control" +
                                  (errors.featuredImage && touched.featuredImage
                                    ? " is-invalid"
                                    : "")
                                }
                              />
                              <ErrorMessage
                                name="featuredImage"
                                component="div"
                                className="invalid-feedback"
                              /> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* {/ end here  /} */}
                      <div className="form-group mt-3 next_first">
                        {/* <button
                      type="button"
                      onClick={() => props.prev(values)}
                      className="btn btn-primary back"
                    >
                      Back
                    </button> */}
                        <button type="submit" onClick={()=>navigate('/docks-details-owner')} className="btn btn-primary next">
                          Submit
                        </button>
                      </div>
                      {/* <Field name='location' component={MapContainer} /> */}

                      {/* <ErrorMessage name='location.value' />
                <ErrorMessage name='location.address' /> */}
                    </div>
                  </div>
                </div>

                {/* <div className="form-group mt-3 next-prev map">
            <button type="submit" className="btn btn-primary next">
              Continue
            </button>
          </div> */}
              </Form>
            </Formik>
          </div>
        </div>
      </SidebarDocks>
    </>
  );
};
export default EditDockDetailOwner;
