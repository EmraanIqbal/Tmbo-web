import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import ImageUploading from "react-images-uploading";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import UploadImage from "../../../../Assets/uploadImage.png";

import SidebarDocks from "../../../Sidebar/SidebarDocks";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
// import MapContainer from "../../../GoogleMap/GoogleMap";

import uplaoddummy from "../../../../Assets/RenterImages/uploadImage.png";

const EditDockPicturesOwner = (props) => {
  const navigate = useNavigate();
  // upload image start
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [imageData, setImages] = useState([]);
  const maxNumber = 69;
  let imagesList = [];

  // const dockReducer = useSelector((state) => state.dockReducer);

  // const { dockDropDown: { data: { dock: { id = "" } = {} } = {} } = {} } =
  //   dockReducer;

  // const boat = JSON.parse(localStorage.getItem("dropDownInfo"));
  // const dockReducer = useSelector((state) => state.dockDropDownReducer);
  const dockDropDownInfo = JSON.parse(localStorage.getItem("dockDropDownInfo"));

  // const { dockDetails: { data: { dock: { id = "" } = {} } = {} } = {} } =
  //   dockReducer;

  let id = dockDropDownInfo?.data?.dock?.id || "";
  console.log("dockReducer:::>", dockDropDownInfo);

  // const imageFromServer = useSelector((state) => state.createBoatReducer);

  // let { addBoatDetail: { data: { boat: { images = [] } = {} } = {} } = {} } =
  //   imageFromServer;

  // console.log("imageFromServer", images);

  // useEffect(() => {
  //   if (images) {
  //     setImages(images);
  //   }
  // }, [images]);

  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };
  const handleSubmit = async (values) => {
    setIsLoading(true);

    // let data = [];
    let formData = new FormData();

    let list = imageData.map((item, ind) => {
      // formData.append("images[][type_id]", ind);
      formData.append("images[]", item.file);
    });

    // console.log("userInfo::>", data);

    // Array.from(data).forEach((image) => {
    // });

    formData.append("step", 6);
    formData.append("id", id);

    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    await axios
      .post(`${process.env.REACT_APP_API_URL}/owner/dock/update`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      })
      .then((res) => {
        console.log("response::>", res);
        toast.success(res.data.message);
        setIsLoading(false);
        console.log(res);
      })
      .catch((er) => {
        toast.error(er.response.data.message);
        console.log(er);
      });

    // return {};
    props.next(values);
    setIsLoading(false);
  };

  const handleChange = (e, things) => {
    imagesList.push(things.id);
  };

  return (
    <>
      <SidebarDocks newBoat={true}>
        <div className="add-new-boats-wrapper edit_new_wrapper">
          {/* <div className="add-new">Add New Experience</div> */}
          <h1 className="docks_heading">Edit Dock Pictures</h1>
          <div className="boat-card">
            <Formik
              // initialValues={{
              //   profile: [],
              // }}
              initialValues={props.data}
              onSubmit={handleSubmit}
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
                  <div className="row mt-2 w-100">
                    <div className="col-sm-12" style={{ display: "none" }}>
                      <Field
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
                      />
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
                          <div className="boat-detail">
                            Add min 4 photos of your Docks
                          </div>

                          {imageList.map((image, index) => (
                            <div
                              className="col-sm-6 col-md-6 col-lg-6 col-xl-4"
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
                                {/* <div className="image-item__btn-wrapper">
                            <div
                              className="close-icon-boat-img"
                              onClick={() => onImageRemove(index)}
                              // onClick={() => handleImageDelete(image)}
                            >
                              <CancelRoundedIcon />
                            </div>
                          </div> */}
                              </div>
                            </div>
                          ))}

                          <div
                            onClick={onImageUpload}
                            {...dragProps}
                            className="mt-3 ad_new_dok_upload"
                            style={{ cursor: "pointer" }}
                          >
                            <img src={UploadImage} alt="not found" />
                          </div>
                        </div>
                      )}
                    </ImageUploading>
                  </div>

                  <div
                    className="form-group mt-3"
                    style={{ textAlign: "right" }}
                  >
                    {/* <button
                      type="button"
                      onClick={() => props.prev(values)}
                      className="btn btn-primary back"
                    >
                      Back
                    </button> */}
                    <button
                      type="submit"
                      className="btn btn-primary next"
                      onClick={() => navigate("/docks-details-owner")}
                    >
                      Submit
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </SidebarDocks>
    </>
  );
};
export default EditDockPicturesOwner;
