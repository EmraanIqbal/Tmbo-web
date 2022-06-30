import React, { useEffect, useState } from "react";
import ImageUploading from "react-images-uploading";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import uplaoddummy from "../../Assets/RenterImages/uploadImage.png";

import "./AddNewExperiences.scss";

// import "./AddNewBoats.scss";

import SidebarBoats from "../Sidebar/SidebarBoats";
import MapContainer from "../GoogleMap/GoogleMap";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";

import { RadioButton, RadioButtonGroup } from "../AddNewBoats/RadioInput";
import UploadImage from "../../Assets/uploadImage.png";
import boatPic2 from "../../Assets/boatPic2.PNG";
import boatPic3 from "../../Assets/boatPic3.PNG";

import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { createBoat } from "../../actions/createBoatActions/createBoatAction";
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
import AddCustomAvailability from "../AddCustomAvailability/AddCustomAvailability";
import {
  addExperienceDetails,
  createExperience,
  deleteExperienceImage,
} from "../../actions/createExperienceActions/createExperienceAction";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SidebarExperiences from "../Sidebar/SidebarExperiences";

const AddNewExperiences = (props) => {
  const userDropDownInfo = JSON.parse(localStorage.getItem("dropDownInfo"));
  // console.log('dropDownReducer', userDropDownInfo);

  // const {
  //   data: { features },
  // } = userDropDownInfo;
  // const {
  //   data: { things },
  // } = userDropDownInfo;

  // const [dropDownFeatures, setDropDownFeatures] = useState(features);

  // const [boatThings, setBoatThings] = useState(things);
  // console.log('features', dropDownFeatures);
  // console.log('things', boatThings);

  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    // console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const expDropDownInfo = JSON.parse(localStorage.getItem("expDropDownInfo"));
  const experience = expDropDownInfo?.data?.experience || null;
  console.log("expDropDownInfo:>", experience);
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState({
    // location: {
    //   address: '',
    //   mapCenter: {
    //     lat: 31.5331,
    //     lng: 74.3162,
    //   },
    // },
    // location: {
    //   value: 'UK',
    //   address: 'USA',
    //   cordinates: {
    //     lat: 31.5331,
    //     lng: 74.3162,
    //   },
    // },
    // location: {
    //   ...this.props.location,
    // },
    payType: "",
    twoHourPrice: experience?.two_hours || "",
    fourHourPrice: experience?.four_hours || "",
    sixHourPrice: experience?.six_hours || "",
    eightHourPrice: experience?.eight_hours || "",
    address: "",
    type: experience?.type || "",
    make: "",
    model: "",
    length: "",
    capacity: "",
    boatType: "",
    engineYear: "",
    engineType: "",
    noOfEngines: "",
    totalHorsePower: "",
    hullMaterial: "",
    listingTitle: "",
    description: "",
    insuranceCompany: "",
    insurancePolicy: "",
    boatRegistrationIdentification: "",
    lienRadioGroup: "",
    lienHolderName: "",
    statementCheck: "",
    cancellationPolicy: "",
    profile: [],
    boatPricing: "",
    fuelPays: "",
    images: [],
    experience: experience?.title || "",
    // type: "",
    description: experience?.description || "",
  });

  const makeRequest = (formData) => {
    console.log("Form Submitted", formData);
  };
  const hanleNextStep = (newData, final = false) => {
    console.log(newData);
    setData((prev) => ({ ...prev, ...newData }));
    if (final) {
      makeRequest(newData);
      return;
    }
    setCurrentStep((prev) => prev + 1);
  };

  const hanlePrevStep = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };

  const hanlePrevStepEdit = (state) => {
    // setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - state);
  };

  const steps = [
    // <StepZero next={hanleNextStep} data={data} />,
    // // <StepZero next={hanleNextStep} prev={hanlePrevStep} data={data} />,
    <StepOne next={hanleNextStep} prev={hanlePrevStep} data={data} />,
    <StepTwo next={hanleNextStep} prev={hanlePrevStep} data={data} />,
    <StepThree next={hanleNextStep} prev={hanlePrevStep} data={data} />,
    <StepFour next={hanleNextStep} prev={hanlePrevStep} data={data} />,
    <StepFive next={hanleNextStep} prev={hanlePrevStep} data={data} />,
    <StepSix
      next={hanleNextStep}
      prev={hanlePrevStep}
      data={data}
      edit={hanlePrevStepEdit}
    />,
  ];

  // console.log("data", data);
  // console.log("data.location", data.location);
  // console.log("steps", steps);
  return (
    <>
      <SidebarExperiences newBoat={true}>
        <div className="add-new-boats-wrapper">
          {/* <div className="add-new">Add New Experience</div> */}
          <div className="boat-card">
            {/* <div className="tell-about">Tell us about your Experience</div>  */}
            {steps[currentStep]}
          </div>
        </div>
      </SidebarExperiences>
    </>
  );
};

export default AddNewExperiences;

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
  editSection: {
    color: "#A60C0C",
    fontWeight: "1000",
    cursor: "pointer",
  },
  descriptionSec: {
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "space-between",
    // width: "90%",
  },
  experienceData1: {
    display: "flex",
    flexWrap: "wrap",

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
    flexWrap: "wrap",
  },
  experienceData3: {
    display: "flex",
    flexWrap: "wrap",
  },
  locationData: {
    variant: "p",
    color: "#1B3659",
    fontWeight: "1000",
  },
}));

// const StepZero = (props) => {
//   const dispatch = useDispatch();

//   const [address, setAddress] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [mapCenter, setMapCenter] = useState({
//     // lat: 31.5331,
//     // lng: 74.3162,
//     lat: 31.4612028,
//     lng: 74.2816758,
//   });

//   const handleChange = (address) => {
//     setAddress(address);
//   };

//   const handleSelect = async (address) => {
//     setAddress(address);
//     console.log("address::>", address);
//     await geocodeByAddress(address)
//       .then((results) => getLatLng(results[0]))
//       .then((latLng) => {
//         console.log("Success", latLng);

//         // update center state
//         setMapCenter(latLng);
//       })
//       .catch((error) => console.error("Error", error));
//   };

//   const handleSubmit = async (values) => {
//     setIsLoading(true);

//     let boatData = {
//       address,
//       latitude: mapCenter.lat,
//       longitude: mapCenter.lng,
//       state: 1,
//     };
//     await dispatch(createExperience(boatData));
//     props.next(values);
//     setIsLoading(false);
//   };

//   console.log("final::>", mapCenter);
//   return (
//     <>
//       {isLoading ? <div className="se-pre-con"></div> : ""}
//       <Typography
//         variant="h6"
//         color="#043a7c"
//         // border="1px solid"
//         // borderRadius="10px"
//         // backgroundColor="white"
//         // boxShadow={0}
//       >
//         Experience Location
//       </Typography>

//       <Formik
//         initialValues={props.data}
//         onSubmit={handleSubmit}
//         validationSchema={Yup.object().shape({
//           // address: Yup.string().required("Address required"),
//         })}

//         // initialValues={{ ...this.props.location }}
//         // onSubmit={(fields) => {
//         //   alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4));
//         // }}
//       >
//         {({
//           errors,
//           status,
//           touched,
//           values,
//           setFieldValue,
//           handleBlur,
//           isValid,
//           dirty,
//         }) => (
//           <Form>
//             {/* 0th row */}
//             <div>
//               <div className="row">
//                 <div className="col-sm-12">
//                   <div className="location-boat">
//                     {" "}
//                     <Typography variant="h6">
//                       Where is your Experience?
//                     </Typography>
//                   </div>
//                   <div>
//                     {" "}
//                     <Typography variant="p" fontWeight="500">
//                       We suggested prices based on the average of similar
//                       experience in your area.
//                     </Typography>
//                   </div>

//                   <div className="location-boat">
//                     {" "}
//                     <Typography variant="p" fontWeight="1000">
//                       Address
//                     </Typography>
//                   </div>
//                   <div>
//                     <MapContainer
//                       handleChange={handleChange}
//                       handleSelect={handleSelect}
//                       address={address}
//                       mapCenter={mapCenter}
//                       // name="address"
//                     />
//                   </div>

//                   <ErrorMessage name="location.value" />
//                   <ErrorMessage name="location.address" />
//                 </div>
//               </div>
//             </div>

//             <div className="form-group mt-3 next-prev map">
//               <button type="submit" className="btn btn-primary next">
//                 Continue
//               </button>
//             </div>
//           </Form>
//         )}
//       </Formik>
//     </>
//   );
// };

const StepOne = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const [address, setAddress] = useState("");
  const [mapCenter, setMapCenter] = useState({
    // lat: 31.5331,
    // lng: 74.3162,
    lat: 31.4612028,
    lng: 74.2816758,
  });
  const [image, setImage] = useState({ preview: "", raw: "" });
  const expDropDownInfo = JSON.parse(localStorage.getItem("expDropDownInfo"));

  const experience = expDropDownInfo?.data?.experience || null;
  let expAddress = experience?.address;
  let featured_image = experience?.featured_image;
  useEffect(() => {
    if (expAddress) {
      setAddress(expAddress);
      setImage(featured_image);
    }
  }, [expAddress]);
  const id = expDropDownInfo?.data?.experience?.id || "";

  const handleSubmit = async (values) => {
    if (experience) {
      if (image.preview) {
        setIsLoading(true);

        let expData = {
          address: address,
          latitude: mapCenter.lat,
          longitude: mapCenter.lng,
          state: "Punjab", // its added hard coded later i will change it
          title: values.experience,
          type: values.type,
          description: values.description,
          step: 1,
          city: "Lahore", // its added hard coded later i will change it
          id: id || "",
          // featured_image: image.preview,
        };
        await dispatch(addExperienceDetails(expData));

        props.next(values);
        setIsLoading(false);
      } else {
        toast.error("Please add featured image");
      }
    } else {
      setIsLoading(false);

      let expData = {
        address: address,
        latitude: mapCenter.lat,
        longitude: mapCenter.lng,
        state: "Punjab", // its added hard coded later i will change it
        title: values.experience,
        type: values.type,
        description: values.description,
        step: 1,
        city: "Lahore", // its added hard coded later i will change it
        // id: id || "", there is no need of id in create experience
        // featured_image: image.preview,
      };

      await dispatch(createExperience(expData));
    }
    // setIsLoading(true);

    // let expData = {
    //   type: values.type,
    //   title: values.experience,
    //   description: values.description,
    //   state: 2,
    // };
    // await dispatch(addExperienceDetails(expData));
    // props.next(values);
    // setIsLoading(false);
  };

  const handleChange = (address) => {
    setAddress(address);
  };

  const handleSelect = async (address) => {
    setAddress(address);
    console.log("address::>", address);
    await geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        console.log("Success", latLng);

        // update center state
        setMapCenter(latLng);
      })
      .catch((error) => console.error("Error", error));
  };

  const handleChangeImage = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };
  // console.log("final::>", mapCenter);
  return (
    <>
      {isLoading ? <div className="se-pre-con"></div> : ""}
      <h1 className="docks_heading">Add Experience Detail</h1>
      <Formik
        initialValues={props.data}
        onSubmit={handleSubmit}
        validationSchema={Yup.object().shape({
          type: Yup.string().required("Type required"),
          // year: Yup.string().required("Year required"),

          experience: Yup.string().required("Experience required"),
          description: Yup.string().required("Description required"),
        })}

        // initialValues={{ ...this.props.location }}
        // onSubmit={(fields) => {
        //   alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4));
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
            {/* 0th row */}
            <div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="location-boat">
                    <h2 className="add_new_sub_heading">
                      Tell us about your Experience
                    </h2>
                  </div>
                  <div className="form-group add_new_loctaion">
                    <label htmlFor="type">Address</label>
                    <MapContainer
                      handleChange={handleChange}
                      handleSelect={handleSelect}
                      address={address}
                      mapCenter={mapCenter}
                      // name="address"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="type">Type</label>
                    <Field
                      name="type"
                      type="text"
                      className={
                        "form-control" +
                        (errors.type && touched.type ? " is-invalid" : "")
                      }
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
                  <div className="form-group">
                    <label className="exp-title" htmlFor="experience">
                      Experiences Title
                    </label>
                    <Field
                      name="experience"
                      type="text"
                      className={
                        "form-control" +
                        (errors.experience && touched.experience
                          ? " is-invalid"
                          : "")
                      }
                    />
                    <ErrorMessage
                      name="experience"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="form-row both">
                    <div className="form-group col-12">
                      <label htmlFor="description">Description</label>
                      <Field
                        name="description"
                        type="text"
                        as="textarea"
                        rows="4"
                        className={
                          "form-control" +
                          (errors.description && touched.description
                            ? " is-invalid"
                            : "")
                        }
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
                    <button type="submit" className="btn btn-primary next">
                      Continue
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
        )}
      </Formik>
    </>
  );
};

// const StepOne = (props) => {
//   const handleSubmit = (values) => {
//     props.next(values);
//   };
//   return (
//     <React.Fragment>
//       <Typography variant="h5" fontWeight={1000} marginBottom="30px">
//         Experience Location
//       </Typography>
//       <Formik
//         initialValues={props.data}
//         onSubmit={handleSubmit}
//         // validationSchema={Yup.object().shape({
//         //   year: Yup.string().required('Year required'),
//         //   make: Yup.string().required('Make required'),
//         //   model: Yup.string().required('Model required'),
//         //   length: Yup.string().required('Length required'),
//         //   capacity: Yup.number()
//         //     .min(2, 'Too Short!')
//         //     .max(300, 'Too Long! max number is 300')
//         //     .required('Capacity required'),

//         //   boatType: Yup.string().required('BoatType required'),
//         //   engineYear: Yup.number()
//         //     .min(2, 'Too Short!')
//         //     .max(2022, 'Too Long! max number is 2022')
//         //     .required('Engine Year required'),
//         //   engineType: Yup.string().required('Engine Type required'),
//         //   noOfEngines: Yup.number()
//         //     .min(2, 'Too Short!')
//         //     .max(12, 'Too Long! max number is 10')
//         //     .required('No of engines required'),
//         //   totalHorsePower: Yup.string().required('Total Horse Power required'),
//         //   hullMaterial: Yup.string().required('Hull Material required'),
//         //   listingTitle: Yup.string().required('Listing Title required'),
//         //   description: Yup.string().required('Description required'),
//         // })}
//         // onSubmit={(fields) => {
//         //   alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4));
//         // }}
//         // onSubmit={async (fields) => {
//         //   await new Promise((r) => setTimeout(r, 300));
//         //   alert(JSON.stringify(fields, null, 2));
//         // }}
//       >
//         {({
//           errors,
//           status,
//           touched,
//           values,
//           setFieldValue,
//           handleBlur,
//           isValid,
//           dirty,
//         }) => (
//           <Form>
//             {/* 1st row */}
//             <div className="form-row both">
//               <div className="form-group col-12">
//                 <label htmlFor="make">Address</label>
//                 <Field
//                   name="make"
//                   type="text"
//                   className={
//                     "form-control" +
//                     (errors.make && touched.make ? " is-invalid" : "")
//                   }
//                 />
//                 <ErrorMessage
//                   name="make"
//                   component="div"
//                   className="invalid-feedback"
//                 />
//               </div>
//             </div>
//             {/* 2nd row */}
//             <div className="form-row both">
//               <div className="form-group col-12">
//                 <label htmlFor="model">Street address (optional)</label>
//                 <Field
//                   name="model"
//                   type="text"
//                   className={
//                     "form-control" +
//                     (errors.model && touched.model ? " is-invalid" : "")
//                   }
//                 />

//                 <ErrorMessage
//                   name="model"
//                   component="div"
//                   className="invalid-feedback"
//                 />
//               </div>
//             </div>
//             {/* 3rd row */}
//             <div className="form-row both">
//               <div className="form-group col-12">
//                 <label htmlFor="capacity">City</label>
//                 <Field
//                   name="capacity"
//                   type="text"
//                   className={
//                     "form-control" +
//                     (errors.capacity && touched.capacity ? " is-invalid" : "")
//                   }
//                 />

//                 <ErrorMessage
//                   name="capacity"
//                   component="div"
//                   className="invalid-feedback"
//                 />
//               </div>
//             </div>
//             {/* 4th row */}
//             <div className="form-row both">
//               <div className="form-group col-6">
//                 <label htmlFor="hullMaterial">State/ Province</label>
//                 <Field
//                   name="hullMaterial"
//                   type="text"
//                   className={
//                     "form-control" +
//                     (errors.hullMaterial && touched.hullMaterial
//                       ? " is-invalid"
//                       : "")
//                   }
//                 />

//                 <ErrorMessage
//                   name="hullMaterial"
//                   component="div"
//                   className="invalid-feedback"
//                 />
//               </div>
//               <div className="form-group col-6">
//                 <label htmlFor="listingTitle">Zip Code</label>
//                 <Field
//                   name="listingTitle"
//                   type="text"
//                   className={
//                     "form-control" +
//                     (errors.listingTitle && touched.listingTitle
//                       ? " is-invalid"
//                       : "")
//                   }
//                 />
//                 <ErrorMessage
//                   name="listingTitle"
//                   component="div"
//                   className="invalid-feedback"
//                 />
//               </div>
//             </div>

//             <div className="form-group mt-3 next-prev">
//               <button
//                 type="button"
//                 onClick={() => props.prev(values)}
//                 className="btn btn-primary back"
//               >
//                 Back
//               </button>
//               <button type="submit" className="btn btn-primary next">
//                 Continue
//               </button>
//             </div>
//           </Form>
//         )}
//       </Formik>
//     </React.Fragment>
//   );
// };

const StepTwo = (props) => {
  const dispatch = useDispatch();
  const userDropDownInfo = JSON.parse(localStorage.getItem("dropDownInfo"));
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (values) => {
    setIsLoading(true);

    let expData = {
      // type: values.payType,
      two_hours: values.twoHourPrice,
      four_hours: values.fourHourPrice,
      six_hours: values.sixHourPrice,
      eight_hours: values.eightHourPrice,
      step: 2,
    };
    await dispatch(addExperienceDetails(expData));
    props.next(values);
    setIsLoading(false);
  };
  return (
    <>
      {isLoading ? <div className="se-pre-con"></div> : ""}
      <h1 className="docks_heading">Experience Pricing</h1>
      <Formik
        // initialValues={{}}
        initialValues={props.data}
        onSubmit={handleSubmit}
        validationSchema={Yup.object().shape({
          // payType: Yup.string().required("Payment Type is required"),
          // twoHourPrice: Yup.string().required("Price required"),
        })}
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
            <div className="location-boat">
              <h2 className="add_new_sub_heading m-0">Now, add your prices.</h2>
            </div>
            <div>
              <h1 className="docks_heading">
                {" "}
                We suggested prices based on the average of similar experience
                in your area.
              </h1>
            </div>
            {/* 1st row */}
            {/* <div className="form-group">
              <label htmlFor="payType">How you want to be paid?</label>
              {/* <Select
                name="payType"
                // payType="text"
                className={
                  "form-control" +
                  (errors.payType && touched.payType ? " is-invalid" : "")
                }
              >
                <MenuItem value={10}>Diving</MenuItem>
                <MenuItem value={20}>Learning</MenuItem>
                <MenuItem value={30}>Expert</MenuItem>
              </Select> */}
            {/* <Field
                name="payType"
                as="select"
                className={
                  "form-control" +
                  (errors.payType && touched.payType ? " is-invalid" : "")
                }
              >
                <option value=""></option>
                <option value="Hourly">Hourly</option>
                <option value="Daily">Daily</option>
                <option value="Secondly">Secondly</option>
              </Field> */}
            {/* <ErrorMessage
                name="payType"
                component="div"
                className="invalid-feedback"
              />
            </div>  */}
            <div className="form-row both">
              <div className="form-group col-12">
                <label htmlFor="twoHourPrice">2 Hours (Price in $)</label>
                <Field
                  name="twoHourPrice"
                  type="text"
                  className={
                    "form-control" +
                    (errors.twoHourPrice && touched.twoHourPrice
                      ? " is-invalid"
                      : "")
                  }
                />
                <ErrorMessage
                  name="twoHourPrice"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
            </div>
            {/* 2nd row */}
            <div className="form-row both">
              <div className="form-group col-12">
                <label htmlFor="fourHourPrice">4 Hours (Price in $)</label>
                <Field
                  name="fourHourPrice"
                  type="text"
                  className={
                    "form-control" +
                    (errors.fourHourPrice && touched.fourHourPrice
                      ? " is-invalid"
                      : "")
                  }
                />

                <ErrorMessage
                  name="fourHourPrice"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
            </div>
            {/* 3rd row */}
            <div className="form-row both">
              <div className="form-group col-12">
                <label htmlFor="sixHourPrice">6 Hours (Price in $)</label>
                <Field
                  name="sixHourPrice"
                  type="text"
                  className={
                    "form-control" +
                    (errors.sixHourPrice && touched.sixHourPrice
                      ? " is-invalid"
                      : "")
                  }
                />

                <ErrorMessage
                  name="sixHourPrice"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
            </div>

            <div className="form-row both">
              <div className="form-group col-12">
                <label htmlFor="eightHourPrice">8 Hours (Price in $)</label>
                <Field
                  name="eightHourPrice"
                  type="text"
                  className={
                    "form-control" +
                    (errors.eightHourPrice && touched.eightHourPrice
                      ? " is-invalid"
                      : "")
                  }
                />

                <ErrorMessage
                  name="eightHourPrice"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
            </div>
            <div className="form-group mt-3 next-prev">
              <button
                type="button"
                onClick={() => props.prev(values)}
                className="btn btn-primary back"
              >
                Back
              </button>

              <button type="submit" className="btn btn-primary next">
                Continue
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

const StepThree = (props) => {
  const dispatch = useDispatch();
  const experienceDropDownInfo = JSON.parse(
    localStorage.getItem("expDropDownInfo")
  );
  // console.log('dropDownReducer', userDropDownInfo);

  const {
    data: { features },
  } = experienceDropDownInfo;

  const [boatThings, setBoatThings] = useState(features);
  const [featureExp, setFeatures] = useState([]);
  const feature = [];
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (values) => {
    setIsLoading(true);

    let expData = {
      features: feature,
      step: "4",
    };
    await dispatch(addExperienceDetails(expData));

    props.next(values);
    setIsLoading(false);
  };

  const handleChange = (e, things) => {
    feature.push(things.id);
  };
  return (
    <>
      {isLoading ? <div className="se-pre-con"></div> : ""}
      <h1 className="docks_heading">Experience Features</h1>
      <Formik
        // initialValues={{}}
        initialValues={props.data}
        onSubmit={handleSubmit}
        validationSchema={Yup.object().shape({})}
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
            {/* 9th row */}
            <div style={{ marginTop: "20px" }}>
              <div className="row">
                {boatThings.map((things, index) => (
                  <div
                    className="col-sm-12 col-md-6 col-lg-3"
                    key={things.name}
                  >
                    <div className="form-row">
                      <div className="inputGroup">
                        <input
                          id={things.name}
                          name="option1"
                          type="checkbox"
                          onChange={(e) => handleChange(e, things)}
                        />
                        <label htmlFor={things.name}>{things.name}</label>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="form-group mt-3 next-prev">
              <button
                type="button"
                onClick={() => props.prev(values)}
                className="btn btn-primary back"
              >
                Back
              </button>

              <button type="submit" className="btn btn-primary next">
                Continue
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

const StepFour = (props) => {
  const dispatch = useDispatch();
  // const [Images, setImages] = React.useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [addImage, setAddImage] = useState([]);
  const [imageData, setImages] = useState([]);

  // const [imageList, setImageList] = useState(false);
  const experienceData = useSelector(
    (state) => state.createExperienceReducer.createExperienceInfo
  );

  // let {
  //   experience: { images },
  // } = experienceData;
  let images =
    experienceData &&
    experienceData.experience &&
    experienceData.experience.images;

  console.log("userInfo::>", experienceData);

  const maxNumber = 69;
  let imagesList = [];
  // const onChange = (imageList, addUpdateIndex) => {
  //   // data for submit
  //   console.log("imageList::>", imageList.target.files[0]);

  //   //  console.log("imagesList", imagesList)

  //   setImages(imageList);
  // };

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

    formData.append("step", 4);
    // formData.append("id", id);

    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    await axios
      .post(
        `${process.env.REACT_APP_API_URL}/owner/experience/detail`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      )
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

  // const handleSubmit = async (values) => {
  //   if (imageData.length != 0) {
  //     setIsLoading(true);

  //     // let nearr = [];
  //     // let dat = images.map((item) => {
  //     //   nearr.push(item);
  //     // });

  //     // console.log("near::>", nearr);

  //     // nearr.push(images[0].file);
  //     // nearr.push(images[0].file);

  //     // console.log("userInfo::>", nearr);

  //     // formData.append("images", nearr);

  //     // let imagesData = Object.assign({}, images);

  //     let formData = new FormData();
  //     formData.append("images[]", imageData);
  //     formData.append("state", 5);

  //     const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  //     console.log("userInfo::>", formData);

  //     await axios
  //       .post(
  //         `${process.env.REACT_APP_API_URL}/owner/experience/detail`,
  //         formData,
  //         {
  //           headers: {
  //             "Content-Type": "multipart/form-data",
  //             Accept: "application/json",
  //             Authorization: `Bearer ${userInfo.token}`,
  //           },
  //         }
  //       )
  //       .then((res) => {
  //         console.log("response::>", res);
  //         setIsLoading(false);
  //         console.log(res);
  //       })
  //       .catch((er) => {
  //         console.log(er);
  //       });

  //     // return {};
  //     props.next(values);
  //     setIsLoading(false);
  //   } else {
  //     props.next(values);

  //     toast.error("Please Select an image");
  //   }

  //   // await dispatch(addExperienceDetails(expData));
  // };

  const handleImageDelete = async (item) => {
    setIsLoading(true);
    console.log("imageid:::>", item);
    let imageData = {
      experience_id: item.experience_id,
      image_id: item.id,
    };
    await dispatch(deleteExperienceImage(imageData));
    setIsLoading(false);
  };

  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };
  return (
    <>
      {isLoading ? <div className="se-pre-con"></div> : ""}
      <h1 className="docks_heading">Experience Pictures</h1>
      <Formik
        // initialValues={{
        //   profile: [],
        // }}
        initialValues={props.data}
        onSubmit={handleSubmit}
        // validationSchema={Yup.object().shape({
        //   profile: Yup.array().min(1, "Select at least 1 file"),
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
              {/* <div className="col-sm-12">
                <input
                  id="file"
                  name="profile"
                  type="file"
                  // className={
                  //   errors.profile && touched.profile ? " is-invalid" : ""
                  // }
                  // accept="*"
                  onChange={(event) => {
                    const files = event.target.files[0];
                    var reader = new FileReader();
                    reader.onload = function (event) {
                      var res = event.target.result;
                      console.log("files::>", res);
                      setAddImage(res);
                    };
                    var file = files;
                    reader.readAsDataURL(file);

                    // console.log("files::>", file);
                    // console.log("files::>", file);
                    // // alert("if");
                    // let myFiles = Array.from(files);
                    // console.log("files::>", files);

                    // setFieldValue("profile", myFiles);
                    setImages(files);
                  }}
                  multiple
                />
              </div> */}
              <Typography
                variant="p"
                fontWeight="500"
                margin="15px 0px 15px 0px"
              >
                Add 1 photo of your Experience
              </Typography>

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
                      Add min 4 photos of your Dock
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

              {/* {addImage ? (
                <div
                  className="img-block-boat"
                  // onClick={() => onImageUpdate(index)}
                >
                  <img src={addImage} />
                </div>
              ) : (
                ""
              )}

              {images?.map((item, index) => (
                <>
                  <div className="form-row">
                    <div
                      className="img-block-boat"
                      // onClick={() => onImageUpdate(index)}
                    >
                      {console.log("experienceDataImages::>", item.image)}

                      <img
                        src={item.image}
                        alt="image not found"
                        style={{ objectFit: "cover", borderRadius: "5px" }}
                      />
                    </div>

                    <div className="image-item__btn-wrapper">
                      <div
                        className="close-icon-boat-img"
                        onClick={() => handleImageDelete(item)}
                      >
                        <CancelRoundedIcon />
                      </div>
                    </div>
                  </div>
                </>
              ))} */}

              {/* <ImageUploading
                multiple
                value={images}
                onChange={(imageList, addUpdateIndex) => {
                  console.log({ imageList }, { addUpdateIndex });
                  setImages(imageList);
                }}
                // maxNumber={maxNumber}
                dataURLKey="data_url"
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
                      Add min 4 photos of your Experience
                    </div>

                    {imageList.map((image, index) => (
                      <div className="col-sm-12 col-md-6 col-lg-6" key={index}>
                        <div className="form-row">
                          <div
                            className="img-block-boat"
                            onClick={() => onImageUpdate(index)}
                          >
                            <img src={image.data_url} alt="" />
                          </div>
                          <div className="image-item__btn-wrapper">
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
                      className="mt-3"
                      style={{ cursor: "pointer" }}
                    >
                      <img src={UploadImage} alt="not found" />
                    </div>
                  </div>
                )}
              </ImageUploading> */}
            </div>
            <ErrorMessage
              style={{ color: "red" }}
              name="profile"
              component="div"
              // className="invalid-feedback"
            />
            <div className="form-group mt-3  next-prev">
              <button
                type="button"
                onClick={() => props.prev(values)}
                className="btn btn-primary back"
              >
                Back
              </button>
              <button type="submit" className="btn btn-primary next">
                Continue
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

const StepFive = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [availability, setAvailabilty] = useState([]);
  const experienceData = useSelector(
    (state) => state.createExperienceReducer.createExperienceInfo
  );

  let experienceId =
    experienceData && experienceData.experience && experienceData.experience.id;
  console.log("experienceId::>", experienceId);

  const feature = [];
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (values) => {
    setIsLoading(true);

    if (availability == "0") {
      setIsLoading(true);

      let expData = {
        id: experienceId,
        availability_type: "0",
        availability: [
          {
            day: "Monday",
            timeSlots: [
              {
                start_time: "8:00 AM",
                end_time: "6:00 PM",
              },
            ],
          },
          {
            day: "Tuesday",
            timeSlots: [
              {
                start_time: "8:00 AM",
                end_time: "6:00 PM",
              },
            ],
          },
          {
            day: "Wednesday",
            timeSlots: [
              {
                start_time: "8:00 AM",
                end_time: "6:00 PM",
              },
            ],
          },
          {
            day: "Thursday",
            timeSlots: [
              {
                start_time: "8:00 AM",
                end_time: "6:00 PM",
              },
            ],
          },
          {
            day: "Friday",
            timeSlots: [
              {
                start_time: "8:00 AM",
                end_time: "6:00 PM",
              },
            ],
          },
          {
            day: "Saturday",
            timeSlots: [
              {
                start_time: "8:00 AM",
                end_time: "6:00 PM",
              },
            ],
          },
          {
            day: "Sunday",
            timeSlots: [
              {
                start_time: "8:00 AM",
                end_time: "6:00 PM",
              },
            ],
          },
        ],
        step: 5,
      };
      await dispatch(addExperienceDetails(expData));
      props.next(values);
      setIsLoading(false);
    } else {
      // props.next(values);
      setIsLoading(false);

      toast.error("Under Development");
    }
    setIsLoading(false);
  };

  console.log("availability::>", availability);
  return (
    <>
      {isLoading ? <div className="se-pre-con"></div> : ""}
      <h1 className="docks_heading">Add Availability</h1>
      <Formik
        // initialValues={{
        //   insuranceCompany: '',
        //   insurancePolicy: '',
        //   boatRegistrationIdentification: '',
        //   lienRadioGroup: '',
        //   lienHolderName: '',
        //   statementCheck: '',
        // }}
        initialValues={props.data}
        onSubmit={handleSubmit}
        // validationSchema={Yup.object().shape({
        //   insuranceCompany: Yup.string().required('Insurance Company required'),
        //   insurancePolicy: Yup.string().required('Insurance Policy required'),
        //   boatRegistrationIdentification: Yup.string().required(
        //     'Boat Registration Identification required'
        //   ),
        //   lienRadioGroup: Yup.string().required('One option required'),
        //   lienHolderName: Yup.string().required('Lien HolderName required'),
        //   statementCheck: Yup.string().required('Statment required'),
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
            <div>
              <div className="row">
                <h2 className="add_new_sub_heading m-0">
                  Add availability of your boat
                </h2>
                {/* <Typography variant="h5" fontWeight={1000} marginBottom="30px">
                  Add Availability
                </Typography> */}

                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="form-row">
                    <div className="inputGroup">
                      <input
                        id="option5"
                        name="option9"
                        type="radio"
                        value=""
                        onChange={() => setOpen(false)}
                        onClick={() => setAvailabilty("0")}
                      />
                      <label htmlFor="option5">
                        Monday to Sunday, from 8:00 AM to 6:00 PM
                        <div className="boat-inusrance">
                          Your boat will be available
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="form-row">
                    <div
                      className="inputGroup"
                      onClick={() => toast.error("Under Development")}
                    >
                      <input
                        id="option6"
                        name="option9"
                        type="radio"
                        // checked={open}
                        disabled
                        onChange={() => setOpen(true)}
                      />
                      <label htmlFor="option6">
                        Custom Availability
                        <div className="boat-inusrance">
                          Customize start times for each day of the week.
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                {open ? <AddCustomAvailability /> : null}
              </div>
            </div>
            <div className="form-group mt-3 next-prev">
              <button
                type="button"
                onClick={() => props.prev(values)}
                className="btn btn-primary back"
              >
                Back
              </button>
              <button type="submit" className="btn btn-primary next">
                Continue
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

// const StepSix = (props) => {
//   const handleSubmit = (values) => {
//     props.next(values);
//   };
//   return (
//     <Formik
//       // initialValues={{}}
//       initialValues={props.data}
//       onSubmit={handleSubmit}
//       // validationSchema={Yup.object().shape({})}
//       // onSubmit={(fields) => {
//       //   alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4));
//       // }}
//       // onSubmit={async (fields) => {
//       //   await new Promise((r) => setTimeout(r, 300));
//       //   alert(JSON.stringify(fields, null, 2));
//       // }}
//     >
//       {({
//         errors,
//         status,
//         touched,
//         values,
//         setFieldValue,
//         handleBlur,
//         isValid,
//         dirty,
//       }) => (
//         <Form>
//           {/* 16th row */}
//           <div style={{ marginTop: "20px" }}>
//             <div className="row">
//               <div className="boat-detail">Add availability of your boat</div>

//               <div className="col-sm-12 col-md-6 col-lg-6">
//                 <div className="form-row">
//                   <div className="inputGroup">
//                     <input id="option5" name="option9" type="radio" />
//                     <label htmlFor="option5">
//                       Monday to Sunday, from 8:00 AM to 6:00 PM
//                       <div className="boat-inusrance">
//                         Your boat will be available
//                       </div>
//                     </label>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-sm-12 col-md-6 col-lg-6">
//                 <div className="form-row">
//                   <div className="inputGroup">
//                     <input id="option6" name="option9" type="radio" />
//                     <label htmlFor="option6">
//                       Custom Availability
//                       <div className="boat-inusrance">
//                         Customize start times for each day of the week.
//                       </div>
//                     </label>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="form-group mt-3 next-prev">
//             <button
//               type="button"
//               onClick={() => props.prev(values)}
//               className="btn btn-primary back"
//             >
//               Back
//             </button>
//             <button type="submit" className="btn btn-primary next">
//               Continue
//             </button>
//           </div>
//         </Form>
//       )}
//     </Formik>
//   );
// };

const StepSix = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  // const experienceData = useSelector((state) => state.createExperienceReducer);
  // const experienceDataImages = useSelector(
  //   (state) => state.createExperienceReducer.createExperienceInfo
  // );
  // const experienceData = useSelector(
  //   (state) => state.createExperienceReducer.createExperienceInfo || ""
  // );
  // let experienceDetails = JSON.parse(
  //   localStorage.getItem("createExpDetailsInfo")
  // );

  const experienceDataImages = useSelector(
    (state) => state.createExperienceReducer.createExperienceInfo
  );
  let experienceData =
    experienceDataImages &&
    experienceDataImages.experience &&
    experienceDataImages.experience;
  // let {
  //   experience: { images },
  // } = experienceData;
  console.log("experienceData::>");

  // let experienceData = experienceDetails.experience || [];
  console.log("experienceData::>", experienceData);
  const handleEdit = (exp, values) => {
    if (exp === "experienceDes") {
      props.edit(5);
    }
    if (exp === "location") {
      props.edit(6);
    }
    if (exp === "feature") {
      props.edit(3);
    }
    if (exp === "picture") {
      props.edit(2);
    }
    if (exp === "availability") {
      props.edit(1);
    }
  };

  // let {
  //   experience: { images },
  // } = experienceData;

  console.log("images::::>", experienceDataImages);
  const handleSubmit = async (values) => {
    setIsLoading(true);
    let expData = { step: 7 };
    await dispatch(addExperienceDetails(expData));
    // props.prev(values);
    navigate("/my-experiences");
    localStorage.removeItem("expDropDownInfo");
    setIsLoading(false);
  };
  // const handleImageDelete = async (item) => {
  //   setIsLoading(true);
  //   console.log("imageid:::>", item);
  //   let imageData = {
  //     experience_id: item.experience_id,
  //     image_id: item.id,
  //   };
  //   await dispatch(deleteExperienceImage(imageData));
  //   setIsLoading(false);
  // };

  return (
    <>
      {isLoading ? <div className="se-pre-con"></div> : ""}
      <Formik
        // initialValues={{
        //   cancellationPolicy: '',
        //   boatPricing: '',
        //   fuelPays: '',
        // }}
        initialValues={props.data}
        onSubmit={handleSubmit}
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
              {/* <Typography>
              Please Review Your Experience Before Submitting
            </Typography> */}
              <div className={classes.mainSection}>
                <Stack spacing={3}>
                  <div className="descriptionSec">
                    <h2>
                      We suggested prices based on the average of similar
                      Experience in your area
                    </h2>
                    <Typography
                      className={classes.editSection}
                      variant="p"
                      onClick={() => handleEdit("experienceDes", values)}
                    >
                      Edit
                    </Typography>
                  </div>
                  <div
                    className={classes.experienceData1}
                    // style={{ width: "50%" }}
                  >
                    <p className="my_docks_side-title">Type</p>
                    <Typography className="my_docks_side-decs">
                      {experienceData?.type}
                    </Typography>
                  </div>
                  <div className={classes.experienceData2}>
                    <p className="my_docks_side-title">Title</p>
                    <Typography className="my_docks_side-decs">
                      {experienceData?.title}
                    </Typography>
                  </div>
                  <div
                    className={classes.experienceData3}
                    // style={{ width: "50%" }}
                  >
                    <p className="my_docks_side-title">Description</p>
                    <Typography className="my_docks_side-decs">
                      {experienceData?.description}
                    </Typography>
                  </div>
                  <Divider />
                </Stack>
                <Stack spacing={3} style={{ marginTop: "25px" }}>
                  <div className="descriptionSec">
                    <h2>Location</h2>
                    <Typography
                      className={classes.editSection}
                      variant="p"
                      onClick={() => handleEdit("location", values)}
                    >
                      Edit
                    </Typography>
                  </div>
                  <div className={classes.experienceData1}>
                    <p className="my_docks_side-title">Location Type</p>
                    <Typography className="my_docks_side-decs">
                      Residence Slip
                    </Typography>
                  </div>

                  <div className={classes.experienceData3}>
                    <p className="my_docks_side-title">Address</p>
                    <Typography className="my_docks_side-decs">
                      {experienceData?.address}
                    </Typography>
                  </div>
                  <Divider />
                </Stack>
                <Stack spacing={3} style={{ marginTop: "25px" }}>
                  <div className="descriptionSec">
                    <h2>Features</h2>
                    <Typography
                      className={classes.editSection}
                      variant="p"
                      onClick={() => handleEdit("feature", values)}
                    >
                      Edit
                    </Typography>
                  </div>
                  {/* {experienceData.features.map((item, index) => ( */}

                  {experienceData?.features.map((item, index) => {
                    let feature = item.feature;
                    return (
                      <div
                        className={classes.experienceData1}
                        style={{ width: "50%" }}
                      >
                        <Typography fontWeight={1000}>
                          {feature.name}
                        </Typography>
                      </div>
                    );
                  })}

                  {/* ))} */}

                  <Divider />
                </Stack>
                <Stack spacing={3} style={{ marginTop: "25px" }}>
                  <div className="descriptionSec">
                    <h2>Pictures</h2>
                    <Typography
                      className={classes.editSection}
                      variant="p"
                      onClick={() => handleEdit("picture", values)}
                    >
                      Edit
                    </Typography>
                  </div>
                  <div
                    className={classes.experienceDataImage}
                    style={{ width: "70%" }}
                  >
                    {experienceData?.images?.map((item, index) => (
                      <div className="form-row">
                        <div
                          className="img-block-boat"
                          // onClick={() => onImageUpdate(index)}
                        >
                          {console.log("experienceDataImages::>", item.image)}

                          <img
                            src={item.image}
                            alt="image not found"
                            style={{ objectFit: "cover", borderRadius: "5px" }}
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
                  <div className="descriptionSec">
                    <h2>Availability</h2>
                    <Typography
                      className={classes.editSection}
                      variant="p"
                      onClick={() => handleEdit("availability", values)}
                    >
                      Edit
                    </Typography>
                  </div>
                  <div
                    className={classes.experienceData1}
                    style={{ width: "50%" }}
                  >
                    <Typography fontWeight={1000}>Monday to Friday</Typography>
                    <Typography fontWeight={1000} color="black" variant="p">
                      8:00AM-6:00PM
                    </Typography>
                  </div>

                  <Divider />
                </Stack>
              </div>
              <div className="form-group mt-3 next-prev">
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
              </div>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
};
