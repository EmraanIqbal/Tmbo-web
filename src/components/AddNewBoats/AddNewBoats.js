import React, { useEffect, useState } from "react";
import ImageUploading from "react-images-uploading";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./AddNewBoats.scss";

import SidebarBoats from "../Sidebar/SidebarBoats";
import MapContainer from "../GoogleMap/GoogleMap";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";

import { RadioButton, RadioButtonGroup } from "./RadioInput";
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
import UploadImage from "../../Assets/uploadImage.png";
import axios from "axios";

import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { useDispatch, useSelector } from "react-redux";
import {
  addBoatDetail,
  createBoat,
  updateBoat,
} from "../../actions/createBoatActions/createBoatAction";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { deleteBoatImage } from "../../actions/createBoatActions/DeleteImageAction/DeleteImageAction";

const AddNewBoats = (props) => {
  const userDropDownInfo = JSON.parse(localStorage.getItem("dropDownInfo"));
  // console.log('dropDownReducer', userDropDownInfo);

  const {
    data: { features },
  } = userDropDownInfo;
  const {
    data: { things },
  } = userDropDownInfo;

  const [dropDownFeatures, setDropDownFeatures] = useState(features);

  const [boatThings, setBoatThings] = useState(things);
  // console.log('features', dropDownFeatures);
  // console.log('things', boatThings);

  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    // console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

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
    address: "",
    year: "",
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
    payForFuel: "",
    profile: [],
    boatPricing: "",
    fuelPays: "",
    images: [],
    gpsAvailable: "",
    depthFinder: "",
    fuelType: "",
    cooler: "",
    btStereo: "",
    anchor: "",
    operator_availability: "",
    hourlyRate: "",
    halfDayRate: "",
    fullDayRate: "",
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
    <StepZero next={hanleNextStep} data={data} />,
    <StepOne next={hanleNextStep} prev={hanlePrevStep} data={data} />,
    <StepTwo next={hanleNextStep} prev={hanlePrevStep} data={data} />,
    <StepThree next={hanleNextStep} prev={hanlePrevStep} data={data} />,
    <StepFour next={hanleNextStep} prev={hanlePrevStep} data={data} />,
    <StepFive next={hanleNextStep} prev={hanlePrevStep} data={data} />,
    <StepSix next={hanleNextStep} prev={hanlePrevStep} data={data} />,
    <StepSeven next={hanleNextStep} prev={hanlePrevStep} data={data} />,
    <StepEight next={hanleNextStep} prev={hanlePrevStep} data={data} />,
    <StepNine
      next={hanleNextStep}
      prev={hanlePrevStep}
      data={data}
      edit={hanlePrevStepEdit}
    ></StepNine>,
  ];

  // console.log("data", data);
  // console.log("data.location", data.location);
  // console.log("steps", steps);
  return (
    <>
      <SidebarBoats newBoat={true}>
        <div className="add-new-boats-wrapper">
          {/* <div className="add-new">Add Boat Deatils</div> */}
          <div className="boat-card">{steps[currentStep]}</div>
        </div>
      </SidebarBoats>
    </>
  );
};

export default AddNewBoats;

const StepZero = (props) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const [address, setAddress] = useState("");
  const [mapCenter, setMapCenter] = useState({
    lat: 31.5331,
    lng: 74.3162,
  });

  // let dock = dockDropDownInfo?.data?.dock || null;
  // const [addressOfDock, setAddress] = useState("");

  const boatData = useSelector((state) => state.dropDown);

  let boatAddress = boatData?.dropDownInfo?.data?.boat?.address || "";

  useEffect(() => {
    if (boatAddress) {
      setAddress(boatAddress);
    }
  }, [boatAddress]);

  const boat = boatData?.dropDownInfo?.data?.boat;
  const boatId = boatData?.dropDownInfo?.data?.boat?.id || "";

  console.log("boatData::>", typeof boat);

  const handleChange = (address) => {
    setAddress(address);
  };

  const handleSelect = async (address) => {
    setAddress(address);
    // console.log(address);
    await geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        console.log("Success", latLng);

        // update center state
        setMapCenter(latLng);
      })
      .catch((error) => console.error("Error", error));
  };

  const handleSubmit = async (values) => {
    setIsLoading(true);
    // let boatData = {
    //   address,
    //   latitude: mapCenter.lat,
    //   longitude: mapCenter.lng,
    //   state: 1,
    // };
    // await dispatch(createBoat(boatData));

    if (boat === null || boat == "") {
      let boatData = {
        address,
        latitude: mapCenter.lat,
        longitude: mapCenter.lng,
        state: 1,
        // id: id,
      };
      await dispatch(createBoat(boatData));
    } else {
      let dockData = {
        address,
        latitude: mapCenter.lat,
        longitude: mapCenter.lng,
        state: 1,
        // state: 1,
        id: boatId,
      };
      await dispatch(updateBoat(dockData));
    }

    setIsLoading(false);

    props.next(values);
  };

  console.log("final::>", mapCenter);
  return (
    <>
      {isLoading ? <div className="se-pre-con"></div> : ""}
      <Formik
        initialValues={props.data}
        onSubmit={handleSubmit}
        validationSchema={Yup.object().shape({})}

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
            <div style={{ marginTop: "20px" }}>
              <div className="row">
                <div className="col-sm-12">
                  <div className="location-boat">Add Boat Location</div>
                  <MapContainer
                    handleChange={handleChange}
                    handleSelect={handleSelect}
                    address={address}
                    mapCenter={mapCenter}
                  />

                  {/* <Field name='location' component={MapContainer} /> */}

                  {/* <ErrorMessage name='location.value' />
                <ErrorMessage name='location.address' /> */}
                </div>
              </div>
            </div>

            <div className="form-group mt-3 next-prev map">
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

const StepOne = (props) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [makerList, setMakerList] = useState([]);
  const [boatTypesList, setBoatTypesList] = useState([]);
  const [engineTypesList, setEngineTypesList] = useState([]);
  const [fuelTypeList, setFuelTypeList] = useState([]);

  const boatDropdown = useSelector((state) => state.dropDown);

  // const { dropDownInfo } = boatDropdown;

  const {
    dropDownInfo: {
      data: {
        makers = "",
        boatTypes = "",
        engineTypes = "",
        fuelTypes = "",
      } = {},
    } = {},
  } = boatDropdown;

  console.log("boatDropdown::>", engineTypesList);

  useEffect(() => {
    if (makers) {
      setMakerList(makers);
    }
    if (boatTypes) {
      setBoatTypesList(boatTypes);
    }
    if (engineTypes) {
      setEngineTypesList(engineTypes);
    }
    if (fuelTypes) {
      setFuelTypeList(fuelTypes);
    }
  }, [makers, boatTypes, engineTypes]);

  const handleSubmit = async (values) => {
    setIsLoading(true);
    console.log("values::>", values);
    let boatData = {
      year_id: values.year,
      make_id: values.make,
      modal_id: values.model,
      length: values.length,
      capacity: values.capacity,
      boat_type_id: values.boatType,
      engine_year: values.engineYear,
      engine_type: values.engineType,
      num_engine: values.noOfEngines,
      horse_power: values.totalHorsePower,
      cooler_available: values.cooler,
      bt_stereo_available: values.btStereo,
      fuel_type: values.fuelType,
      anchor_available: values.anchor,
      gps_available: values.gpsAvailable,
      depth_finder_available: values.depthFinder,
      title: values.listingTitle,
      description: values.description,
      state: 2,
    };

    console.log("boatData::>", boatData);
    await dispatch(addBoatDetail(boatData));

    props.next(values);
    setIsLoading(false);
  };
  return (
    <>
      {/* <div className="boat-detail">Boat Details</div> */}
      {isLoading ? <div className="se-pre-con"></div> : ""}
      <h1 className="docks_heading">Add Boat Details</h1>

      <Formik
        initialValues={props.data}
        onSubmit={handleSubmit}
        validationSchema={Yup.object().shape({
          year: Yup.number()
            .min(2, "Too Short!")
            // .max(5, "Too Long! max number is 2022")
            .required("Year Required"),
          make: Yup.string().required("Make required"),
          model: Yup.string().required("Model required"),
          length: Yup.string().required("Length required"),
          btStereo: Yup.string().required("BT Stereo required"),
          cooler: Yup.string().required("Cooler required"),
          gpsAvailable: Yup.string().required("Gps Available required"),
          depthFinder: Yup.string().required("Depth Finder required"),
          capacity: Yup.number()
            .min(2, "Too Short!")
            .max(300, "Too Long! max number is 300")
            .required("Capacity required"),

          boatType: Yup.string().required("BoatType required"),
          engineYear: Yup.number()
            .min(2, "Too Short!")
            .max(2022, "Too Long! max number is 2022")
            .required("Engine Year required"),
          engineType: Yup.string().required("Engine Type required"),

          noOfEngines: Yup.number()
            .min(2, "Too Short!")
            .max(12, "Too Long! max number is 10")
            .required("No of engines required"),
          totalHorsePower: Yup.string().required("Total Horse Power required"),
          anchor: Yup.string().required("Anchor required"),
          description: Yup.string().required("Description required"),
          fuelType: Yup.string().required("Fuel Type required"),
          listingTitle: Yup.string().required("Listing Title required"),
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
            <div className="tell-about">
              <h2 className="add_new_sub_heading mb-0">
                Tell us about your boat
              </h2>
            </div>
            {/* 1st row */}
            <div className="form-row both">
              <div className="form-group col-6">
                <label htmlFor="year">Year</label>
                <Field
                  name="year"
                  type="text"
                  className={
                    "form-control" +
                    (errors.year && touched.year ? " is-invalid" : "")
                  }
                ></Field>

                <ErrorMessage
                  name="year"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group col-6">
                <label htmlFor="make">Make</label>
                <Field
                  name="make"
                  // type="text"
                  as="select"
                  className={
                    "form-control" +
                    (errors.make && touched.make ? " is-invalid" : "")
                  }
                >
                  <option value=""></option>
                  {makerList?.map((item, index) => (
                    // <div key={index}>
                    <option value={item.name}>{item.name}</option>
                    // </div>
                  ))}
                </Field>
                <ErrorMessage
                  name="make"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
            </div>
            {/* 2nd row */}
            <div className="form-row both">
              <div className="form-group col-6">
                <label htmlFor="model">Modal</label>
                <Field
                  name="model"
                  type="text"
                  className={
                    "form-control" +
                    (errors.model && touched.model ? " is-invalid" : "")
                  }
                />

                <ErrorMessage
                  name="model"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group col-6">
                <label htmlFor="length">Length</label>
                <Field
                  name="length"
                  type="text"
                  className={
                    "form-control" +
                    (errors.length && touched.length ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="length"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
            </div>
            {/* 3rd row */}
            <div className="form-row both">
              <div className="form-group col-6">
                <label htmlFor="capacity">Capacity</label>
                <Field
                  name="capacity"
                  type="text"
                  className={
                    "form-control" +
                    (errors.capacity && touched.capacity ? " is-invalid" : "")
                  }
                />

                <ErrorMessage
                  name="capacity"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group col-6">
                <label htmlFor="boatType">Boat Type</label>
                <Field
                  name="boatType"
                  as="select"
                  className={
                    "form-control" +
                    (errors.boatType && touched.boatType ? " is-invalid" : "")
                  }
                >
                  <option value=""></option>
                  {boatTypesList?.map((item, index) => (
                    <option value={item.name}>{item.name}</option>
                  ))}
                </Field>
                <ErrorMessage
                  name="boatType"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
            </div>
            {/* 4th row */}
            <div className="form-row both">
              <div className="form-group col-6">
                <label htmlFor="engineYear">Engine Year</label>
                <Field
                  name="engineYear"
                  type="text"
                  className={
                    "form-control" +
                    (errors.engineYear && touched.engineYear
                      ? " is-invalid"
                      : "")
                  }
                />

                <ErrorMessage
                  name="engineYear"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group col-6">
                <label htmlFor="engineType">Engine Type</label>
                <Field
                  name="engineType"
                  as="select"
                  className={
                    "form-control" +
                    (errors.engineType && touched.engineType
                      ? " is-invalid"
                      : "")
                  }
                >
                  <option value=""></option>
                  {engineTypesList?.map((item, index) => (
                    // <div key={index}>
                    <option value={item.name}>{item.name}</option>
                    // </div>
                  ))}
                </Field>
                <ErrorMessage
                  name="engineType"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
            </div>

            {/* 5th row */}
            <div className="form-row both">
              <div className="form-group col-6">
                <label htmlFor="noOfEngines">No of Engines</label>
                <Field
                  name="noOfEngines"
                  type="text"
                  className={
                    "form-control" +
                    (errors.noOfEngines && touched.noOfEngines
                      ? " is-invalid"
                      : "")
                  }
                />

                <ErrorMessage
                  name="noOfEngines"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group col-6">
                <label htmlFor="totalHorsePower">Total Horse Power</label>
                <Field
                  name="totalHorsePower"
                  type="text"
                  className={
                    "form-control" +
                    (errors.totalHorsePower && touched.totalHorsePower
                      ? " is-invalid"
                      : "")
                  }
                />
                <ErrorMessage
                  name="totalHorsePower"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
            </div>
            {/* 6th row */}

            {/* <div className="form-row both">
              <div className="form-group col-6">
                <label htmlFor="hullMaterial">Hull Material</label>
                <Field
                  name="hullMaterial"
                  type="text"
                  className={
                    "form-control" +
                    (errors.hullMaterial && touched.hullMaterial
                      ? " is-invalid"
                      : "")
                  }
                />

                <ErrorMessage
                  name="hullMaterial"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group col-6">
                <label htmlFor="listingTitle">Listing Title</label>
                <Field
                  name="listingTitle"
                  type="text"
                  className={
                    "form-control" +
                    (errors.listingTitle && touched.listingTitle
                      ? " is-invalid"
                      : "")
                  }
                />
                <ErrorMessage
                  name="listingTitle"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
            </div> */}

            <div className="form-row both">
              <div className="form-group col-6">
                <label htmlFor="cooler">Cooler</label>
                <Field
                  name="cooler"
                  as="select"
                  className={
                    "form-control" +
                    (errors.cooler && touched.cooler ? " is-invalid" : "")
                  }
                >
                  <option value=""></option>
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </Field>

                <ErrorMessage
                  name="cooler"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group col-6">
                <label htmlFor="btStereo">BT stereo</label>
                <Field
                  name="btStereo"
                  as="select"
                  className={
                    "form-control" +
                    (errors.btStereo && touched.btStereo ? " is-invalid" : "")
                  }
                >
                  <option value=""></option>
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </Field>

                <ErrorMessage
                  name="btStereo"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
            </div>

            {/* 7th row */}
            <div className="form-row both">
              <div className="form-group col-6">
                <label htmlFor="fuelType">Fuel Type</label>
                <Field
                  name="fuelType"
                  as="select"
                  // as="textarea"
                  rows="4"
                  className={
                    "form-control" +
                    (errors.fuelType && touched.fuelType ? " is-invalid" : "")
                  }
                >
                  <option value=""></option>
                  {fuelTypeList?.map((item, index) => (
                    // <div key={index}>
                    <option value={item.type}>{item.type}</option>
                    // </div>
                  ))}
                </Field>

                <ErrorMessage
                  name="fuelType"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group col-6">
                <label htmlFor="anchor">Anchor</label>
                <Field
                  name="anchor"
                  as="select"
                  className={
                    "form-control" +
                    (errors.anchor && touched.anchor ? " is-invalid" : "")
                  }
                >
                  <option value=""></option>
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </Field>

                <ErrorMessage
                  name="anchor"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
            </div>

            {/* 8th row */}
            <div className="form-row both">
              <div className="form-group col-6">
                <label htmlFor="gpsAvailable">Gps Available</label>
                <Field
                  name="gpsAvailable"
                  as="select"
                  className={
                    "form-control" +
                    (errors.gpsAvailable && touched.gpsAvailable
                      ? " is-invalid"
                      : "")
                  }
                >
                  <option></option>
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </Field>

                <ErrorMessage
                  name="gpsAvailable"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group col-6">
                <label htmlFor="depthFinder">Depth Finder</label>
                <Field
                  name="depthFinder"
                  as="select"
                  className={
                    "form-control" +
                    (errors.depthFinder && touched.depthFinder
                      ? " is-invalid"
                      : "")
                  }
                >
                  <option></option>
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </Field>

                <ErrorMessage
                  name="depthFinder"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
            </div>
            <div className="form-row both">
              <div className="form-group col-12">
                <label htmlFor="listingTitle">Listing Title</label>
                <Field
                  name="listingTitle"
                  type="text"
                  className={
                    "form-control" +
                    (errors.listingTitle && touched.listingTitle
                      ? " is-invalid"
                      : "")
                  }
                />
                <ErrorMessage
                  name="listingTitle"
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

const StepTwo = (props) => {
  const dispatch = useDispatch();
  const userDropDownInfo = JSON.parse(localStorage.getItem("dropDownInfo"));
  const [isLoading, setIsLoading] = useState(false);
  // console.log('dropDownReducer', userDropDownInfo);
  const featureList = [];
  const {
    data: { features },
  } = userDropDownInfo;

  const [dropDownFeatures, setDropDownFeatures] = useState(features);

  const handleSubmit = async (values) => {
    if (featureList.length > 0) {
      setIsLoading(true);
      let boatData = {
        features: featureList,
        state: 4,
      };

      await dispatch(addBoatDetail(boatData));
      // console.log("feature::>", feature);

      props.next(values);
      setIsLoading(false);
    } else {
      toast.error("Please add Feature first");
    }
  };
  const handleChange = (e, things) => {
    featureList.push(things.id);
  };

  return (
    <>
      {isLoading ? <div className="se-pre-con"></div> : ""}

      <h1 className="docks_heading">Boat Features</h1>
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
            {/* 8th row */}
            <div>
              <div className="row">
                <div className="tell-about">
                  <h2 className="add_new_sub_heading m-0">
                    Please choose all Features that...
                  </h2>
                </div>
                {/* {dropDownFeatures.map((feature, index) => (
                        <div className='col-sm-3' key={feature.id}>
                          <div className='form-group form-check'>
                            <Field
                              type='checkbox'
                              name={feature.name}
                              className={
                                'form-check-input ' +
                                (errors.acceptTerms && touched.acceptTerms
                                  ? ' is-invalid'
                                  : '')
                              }
                            />
                            <label
                              htmlFor='acceptTerms'
                              className='form-check-label'
                            >
                              {feature.name}
                            </label>
                            <ErrorMessage
                              name='acceptTerms'
                              component='div'
                              className='invalid-feedback'
                            />
                          </div>
                        </div>
                      ))} */}
                {/* salman */}
                {dropDownFeatures.map((feature, index) => (
                  <div
                    className="col-sm-12 col-md-6 col-lg-3"
                    key={feature.name}
                  >
                    <div className="form-row">
                      <div className="inputGroup">
                        <input
                          id={feature.name}
                          name="option1"
                          type="checkbox"
                          onChange={(e) => handleChange(e, feature)}
                        />
                        <label htmlFor={feature.name}>{feature.name}</label>
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

const StepThree = (props) => {
  const dispatch = useDispatch();
  const userDropDownInfo = JSON.parse(localStorage.getItem("dropDownInfo"));
  const [isLoading, setIsLoading] = useState(false);
  // console.log('dropDownReducer', userDropDownInfo);
  const featureList = [];

  const {
    data: { things },
  } = userDropDownInfo;

  const [boatThings, setBoatThings] = useState(things);

  const handleSubmit = async (values) => {
    if (featureList.length > 0) {
      setIsLoading(true);
      let boatData = {
        things: featureList,
        state: 5,
      };

      await dispatch(addBoatDetail(boatData));
      // console.log("feature::>", feature);

      props.next(values);
      setIsLoading(false);
    } else {
      toast.error("Please Add first");
    }
  };

  const handleChange = (e, things) => {
    featureList.push(things.id);
  };

  return (
    <>
      {isLoading ? <div className="se-pre-con"></div> : ""}

      <h1 className="docks_heading">What's Not Allowed</h1>
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
                {/* <div className="boat-detail">What's Allowed</div> */}

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
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (values) => {
    console.log("values:>", values);
    let boatData = {
      insurance_company: values.insuranceCompany,
      insurance_policy: values.insurancePolicy,
      line_holder: values.lienHolderName,
      registration_no: values.boatRegistrationIdentification,
      claim_of_loss: values.lienRadioGroup,
      state: 6,
    };

    setIsLoading(true);
    // let boatData = {};
    await dispatch(addBoatDetail(boatData));
    // console.log("feature::>", feature);

    props.next(values);
    setIsLoading(false);
  };
  return (
    <>
      {isLoading ? <div className="se-pre-con"></div> : ""}
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
        validationSchema={Yup.object().shape({
          insuranceCompany: Yup.string().required("Insurance Company required"),
          insurancePolicy: Yup.string().required("Insurance Policy required"),
          boatRegistrationIdentification: Yup.string().required(
            "Boat Registration Identification required"
          ),
          lienRadioGroup: Yup.string().required("One option required"),
          lienHolderName: Yup.string().required("Lien HolderName required"),
          statementCheck: Yup.string().required("Statment required"),
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
            {/* 10th row */}
            <div>
              <div className="row">
                <div className="boat-detail"></div>
                <h1 className="docks_heading">Insurance's Detail</h1>
              </div>
            </div>
            {/* 11th row */}
            {/* <div className="boat-detail">Insurance's Detail</div> */}
            <div className="radion-lable-boat" style={{ fontWeight: "500" }}>
              Does your boat have liability coverge or existing recreational
              marine insurance?
            </div>
            <div className="row">
              <div className="col-sm-12 "></div>
            </div>
            {/* 12th row */}
            <div className="form-row both">
              <div className="form-group col-6">
                <label htmlFor="insuranceCompany">Insurance Company</label>
                <Field
                  name="insuranceCompany"
                  type="text"
                  className={
                    "form-control" +
                    (errors.insuranceCompany && touched.insuranceCompany
                      ? " is-invalid"
                      : "")
                  }
                />

                <ErrorMessage
                  name="insuranceCompany"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group col-6">
                <label htmlFor="insurancePolicy">Insurance Policy #</label>
                <Field
                  name="insurancePolicy"
                  type="text"
                  className={
                    "form-control" +
                    (errors.insurancePolicy && touched.insurancePolicy
                      ? " is-invalid"
                      : "")
                  }
                />
                <ErrorMessage
                  name="insurancePolicy"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
            </div>
            {/* 13th row */}
            <div className="form-row both">
              <div className="form-group col-6">
                <label htmlFor="boatRegistrationIdentification">
                  Boat Registration Identificaion
                </label>
                <Field
                  name="boatRegistrationIdentification"
                  type="text"
                  className={
                    "form-control" +
                    (errors.boatRegistrationIdentification &&
                    touched.boatRegistrationIdentification
                      ? " is-invalid"
                      : "")
                  }
                />

                <ErrorMessage
                  name="boatRegistrationIdentification"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group col-6">
                <label htmlFor="lienHolderName">Line Holder Name</label>
                <Field
                  name="lienHolderName"
                  type="text"
                  className={
                    "form-control" +
                    (errors.lienHolderName && touched.lienHolderName
                      ? " is-invalid"
                      : "")
                  }
                />

                <ErrorMessage
                  name="lienHolderName"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
            </div>
            {/* 14th row */}
            {/* <div className="form-row both"> */}
            <div className="form-group col-12">
              <label
                htmlFor="boatRegistrationIdentification"
                className="radion-lable-boat"
              >
                Can any person or organization claim ownership of your boat in
                the event of a loss?
              </label>
              <RadioButtonGroup
                id="lienRadioGroup"
                // label='One of these please'
                value={values.lienRadioGroup}
                error={errors.lienRadioGroup}
                touched={touched.lienRadioGroup}
              >
                <Field
                  component={RadioButton}
                  name="lienRadioGroup"
                  id="1"
                  label="Yes, my boat has a lien holder"
                />
                <Field
                  component={RadioButton}
                  name="lienRadioGroup"
                  id="0"
                  label="No"
                />
              </RadioButtonGroup>
            </div>
            {/* <Typography variant="h6" fontWeight={500}>
              What Type of Insurance do you have?
            </Typography> */}
            <label
              // htmlFor="boatRegistrationIdentification"
              className="radion-lable-boat"
            >
              What Type of Insurance do you have?
            </label>
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="form-row">
                  <div className="inputGroup">
                    <input id="option1" name="option11" type="radio" />
                    <label htmlFor="option1">
                      I have recreational boat Insurance
                      <div className="boat-inusrance">
                        Select this if you own a personal boat.
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="form-row">
                  <div className="inputGroup">
                    <input id="option2" name="option11" type="radio" />
                    <label htmlFor="option2">
                      I have commercial character Insurance
                      <div className="boat-inusrance">
                        Select this if you run a boat or character business.
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-group col-12">
              <label
                htmlFor="boatRegistrationIdentification"
                className="radion-lable-boat"
              >
                Statement Required
              </label>
              <RadioButtonGroup
                id="statementCheck"
                // label='One of these please'
                value={values.statementCheck}
                error={errors.statementCheck}
                touched={touched.statementCheck}
              >
                <Field
                  component={RadioButton}
                  name="statementCheck"
                  id="I certify that the above statements are true and correct."
                  label="I certify that the above statements are true and correct."
                />
              </RadioButtonGroup>
            </div>
            {/* </div> */}
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

const StepFive = (props) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [imageData, setImages] = useState([]);
  const maxNumber = 69;
  let imagesList = [];

  const boat = JSON.parse(localStorage.getItem("dropDownInfo"));

  const photo_requirement_type =
    boat && boat.data && boat.data.photo_requirement_type;

  const imageFromServer = useSelector((state) => state.deleteImageReducer);

  console.log("imageFromServer::>", imageFromServer);

  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };
  const handleSubmit = async (values) => {
    setIsLoading(true);

    // let data = [];
    let formData = new FormData();

    let list = imageData.map((item, ind) => {
      formData.append("images[][type_id]", ind);
      formData.append("images[][file]", item.file);
    });

    // console.log("userInfo::>", data);

    // Array.from(data).forEach((image) => {
    // });

    formData.append("state", 8);

    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    await axios
      .post(`${process.env.REACT_APP_API_URL}/owner/boats/detail`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      })
      .then((res) => {
        console.log("response::>", res);
        toast.success("Boat pictures added successfully");
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

  const handleImageDelete = async (item) => {
    setIsLoading(true);
    console.log("imageid:::>", item);
    let imageData = { id: item.id };
    await dispatch(deleteBoatImage(imageData));
    setIsLoading(false);
  };
  return (
    <>
      {isLoading ? <div className="se-pre-con"></div> : ""}

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
            <div className="row mt-2">
              <h1 className="docks_heading">Boat Photos</h1>
              <div className="col-sm-12" style={{ marginBottom: "10px" }}>
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
                    <div className="boat-detail">
                      Add min 4 photos of your Experience
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
                              // onClick={() => onImageRemove(index)}
                              onClick={() => handleImageDelete(image)}
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
                      className="mt-3"
                      style={{ cursor: "pointer" }}
                    >
                      <img src={UploadImage} alt="not found" />
                    </div>
                  </div>
                )}
              </ImageUploading>
            </div>

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

const StepSix = (props) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const boatDropdown = JSON.parse(localStorage.getItem("dropDownInfo"));

  const { boatDropdown: { data: { boat: { id = "" } = {} } = {} } = {} } =
    boatDropdown;
  const handleSubmit = async (values) => {
    setIsLoading(true);

    let boatData = {
      // boat_id: id,
      type: "0",
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
      state: 9,
    };
    await dispatch(addBoatDetail(boatData));
    props.next(values);
    setIsLoading(false);
    // props.next(values);
  };
  return (
    <>
      {isLoading ? <div className="se-pre-con"></div> : ""}
      <Formik
        // initialValues={{}}
        initialValues={props.data}
        onSubmit={handleSubmit}
        // validationSchema={Yup.object().shape({})}
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
            {/* 16th row */}
            <div style={{ marginTop: "20px" }}>
              <div className="row">
                <div className="boat-detail"></div>
                <h1 className="docks_heading">Add availability of your boat</h1>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="form-row">
                    <div className="inputGroup">
                      <input id="option5" name="option9" type="radio" />
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
                      onClick={() => toast.error("Under Development !")}
                    >
                      <input
                        id="option6"
                        name="option9"
                        type="radio"
                        disabled
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

const StepSeven = (props) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [operates, setOperates] = useState("");
  const [booking, setBooking] = useState("");

  const handleSubmit = async (values) => {
    console.log(values);
    setIsLoading(true);

    let boatData = {
      multiple_booking: booking,
      operator_availability: operates,
      cancel_policy: values.cancellationPolicy,
      price_per_hour: values.boatPricing,
      fuel_payer: values.fuelPays,
      state: 10,
    };

    await dispatch(addBoatDetail(boatData));
    // props.next(values);
    setIsLoading(false);
    props.next(values);
  };

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
        validationSchema={Yup.object().shape({
          cancellationPolicy: Yup.string().required(
            "Cancellation Policy required"
          ),
          // boatPricing: Yup.number()
          //   .min(2, "Too Short!")
          //   .max(300, "Too Long! max number is 300")
          //   .required("Boat Pricing required"),
          // fuelPays: Yup.string().required("Fule Pays required"),
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
            {/* 17th row */}
            <div style={{ marginTop: "20px" }}>
              <div className="row">
                <h1 className="docks_heading">Multiple Bookings</h1>
                <div className="boat-detail">
                  Do you want to allow multiple bookings in a single day?
                </div>

                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="form-row">
                    <div className="inputGroup">
                      <input
                        id="option15"
                        name="option19"
                        type="radio"
                        onClick={() => setBooking("0")}
                      />
                      <label htmlFor="option15">
                        No
                        <div className="boat-inusrance">
                          This boat can only be booked once a day.
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="form-row">
                    <div className="inputGroup">
                      <input
                        id="option16"
                        name="option19"
                        type="radio"
                        onClick={() => setBooking("1")}
                      />
                      <label htmlFor="option16">
                        Yes{" "}
                        <div className="boat-inusrance">
                          boat can be booked multiple times in a single day{" "}
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 18th row */}
            <div style={{ marginTop: "20px" }}>
              <div className="row">
                <div className="boat-detail">Choose who operates your boat</div>

                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="form-row">
                    <div className="inputGroup">
                      <input
                        id="operator_availability"
                        name="operator_availability"
                        type="radio"
                        onClick={() => setOperates("0")}
                      />
                      <label htmlFor="operator_availability">
                        Renter operates my boat
                        <div className="boat-inusrance">most common </div>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="form-row">
                    <div className="inputGroup caption">
                      <input
                        id="option26"
                        name="operator_availability"
                        type="radio"
                        value="1"
                        onClick={() => setOperates("1")}
                      />
                      <label htmlFor="option26" className="uscg-certified">
                        <p>A USCG-Certified caption operates my boat</p>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 19th row */}
            <div className="form-row both">
              <div className="form-group">
                <div className="boat-detail">
                  How would you like to handle reservation cancellations?
                </div>
                <RadioButtonGroup
                  id="cancellationPolicy"
                  // label='One of these please'
                  value={values.cancellationPolicy}
                  error={errors.cancellationPolicy}
                  touched={touched.cancellationPolicy}
                >
                  <Field
                    component={RadioButton}
                    name="cancellationPolicy"
                    id="0"
                    label="Flexible"
                  />
                  <Field
                    component={RadioButton}
                    name="cancellationPolicy"
                    id="1"
                    label="Moderate"
                  />
                  <Field
                    component={RadioButton}
                    name="cancellationPolicy"
                    id="2"
                    label="Strict"
                  />
                </RadioButtonGroup>
              </div>
            </div>
            {/* 20th row   hourlyRate: "",
    halfDayRate: "",
    fullDayRate: "",*/}
            {/* <div className="form-row both">
              <div className="form-group col-6">
                <label htmlFor="boatPricing">Hourly Rate ($)</label>
                <Field
                  name="boatPricing"
                  type="text"
                  className={
                    "form-control" +
                    (errors.boatPricing && touched.boatPricing
                      ? " is-invalid"
                      : "")
                  }
                />

                <ErrorMessage
                  name="boatPricing"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group col-6">
                <div className="boat-detail">Who pays for fuel? </div>
                <RadioButtonGroup
                  id="fuelPays"
                  // label='One of these please'
                  value={values.fuelPays}
                  error={errors.fuelPays}
                  touched={touched.fuelPays}
                >
                  <Field
                    component={RadioButton}
                    name="fuelPays"
                    id="0 "
                    label="Rental Pays"
                  />
                  <Field
                    component={RadioButton}
                    name="fuelPays"
                    id="1 "
                    label="Owner Pays"
                  />
                </RadioButtonGroup>
              </div>
            </div> */}
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

const StepEight = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (values) => {
    console.log("values::>", values);
    setIsLoading(true);

    let boatData = {
      // multiple_booking: booking,
      // operator_availability: operates,
      // cancel_policy: values.cancellationPolicy,
      price_per_hour: values.hourlyRate,
      fuel_payer: values.payForFuel,
      state: 10,
    };

    await dispatch(addBoatDetail(boatData));
    // props.next(values);
    setIsLoading(false);
    props.next(values);
  };

  // console.log("final::>", mapCenter);
  return (
    <>
      {isLoading ? <div className="se-pre-con"></div> : ""}

      <h1 className="docks_heading">Boat Pricing</h1>
      <Formik
        initialValues={props.data}
        onSubmit={handleSubmit}
        validationSchema={Yup.object().shape({
          hourlyRate: Yup.string().required("Hourly Rate required"),
          payForFuel: Yup.string().required("Pay For Fuel required"),

          // halfDayRate: Yup.string().required("Half Day Rate required"),
          // fullDayRate: Yup.string().required("Full Day Rate required"),
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
                      Please set your hourly, half day and full day rates. You
                      do not have to provide rates for all 3 options.
                    </h2>
                  </div>
                  <div className="form-group">
                    <label htmlFor="hourlyRate">Hourly Rate ($)</label>

                    <Field
                      name="hourlyRate"
                      type="text"
                      className={
                        "form-control" +
                        (errors.hourlyRate && touched.hourlyRate
                          ? " is-invalid"
                          : "")
                      }
                    />
                    {/* <Field
                      name="hourlyRate"
                      as="select"
                      className={
                        "form-control" +
                        (errors.hourlyRate && touched.hourlyRate ? " is-invalid" : "")
                      }
                    >
                      <option value=""></option>
                      <option value="Diving">Diving</option>
                      <option value="Permanent">Permanent</option>
                      <option value="Expert">Expert</option>
                      <option value="Interny">Interny</option>
                    </Field> */}
                    <ErrorMessage
                      name="hourlyRate"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                  {/* <div className="form-group">
                    <label className="exp-title" htmlFor="halfDayRate">
                      Half Day Rate ($)
                    </label>
                    <Field
                      name="halfDayRate"
                      type="text"
                      className={
                        "form-control" +
                        (errors.halfDayRate && touched.halfDayRate
                          ? " is-invalid"
                          : "")
                      }
                    />
                    <ErrorMessage
                      name="halfDayRate"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="form-group">
                    <label className="exp-title" htmlFor="fullDayRate">
                      Full Day Rate ($)
                    </label>
                    <Field
                      name="fullDayRate"
                      type="text"
                      className={
                        "form-control" +
                        (errors.fullDayRate && touched.fullDayRate
                          ? " is-invalid"
                          : "")
                      }
                    />
                    <ErrorMessage
                      name="fullDayRate"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div> */}
                  {/* <div className="form-row both">
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
                  </div> */}
                  <div className="form-row both">
                    <div className="form-group">
                      <div className="boat-detail">Who Pays for fuel? </div>
                      <RadioButtonGroup
                        id="payForFuel"
                        // label='One of these please'
                        value={values.payForFuel}
                        // error={errors.cancellationPolicy}
                        // touched={touched.cancellationPolicy}
                      >
                        <Field
                          component={RadioButton}
                          name="payForFuel"
                          id="0"
                          label="Renter Pays"
                        />
                        <Field
                          component={RadioButton}
                          name="payForFuel"
                          id="1"
                          label="Owner Pays"
                        />
                      </RadioButtonGroup>
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

const StepNine = (props) => {
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
    (state) => state.createBoatReducer.createExperienceInfo
  );
  let experienceData =
    experienceDataImages &&
    experienceDataImages.experience &&
    experienceDataImages.experience;
  // let {
  //   experience: { images },
  // } = experienceData;
  const addBoatDetailData = useSelector(
    (state) => state.createBoatReducer.addBoatDetail
  );
  console.log("experienceData::>", addBoatDetailData);

  let boatData =
    addBoatDetailData && addBoatDetailData.data && addBoatDetailData.data.boat;

  // let experienceData = experienceDetails.experience || [];
  console.log("experienceData::>", boatData);
  const handleEdit = (exp, values) => {
    if (exp === "location") {
      props.edit(9);
    }
    if (exp === "experienceDes") {
      props.edit(8);
    }
    if (exp === "feature") {
      props.edit(7);
    }
    if (exp === "things") {
      props.edit(6);
    }
    if (exp === "insurance") {
      props.edit(5);
    }
    if (exp === "picture") {
      props.edit(4);
    }
    if (exp === "availability") {
      props.edit(3);
    }
  };

  // let {
  //   experience: { images },
  // } = experienceData;

  console.log("images::::>", experienceDataImages);
  const handleSubmit = async (values) => {
    setIsLoading(true);
    let expData = { state: "14" };
    await dispatch(addBoatDetail(expData));
    props.prev(values);
    navigate("/boats");
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

      <h1 className="docks_heading" style={{ margin: "20px 0px 25px 0px" }}>
        Please Review your listing details before Submitting
      </h1>
      <Divider />
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
                <Stack spacing={3} style={{ marginTop: "25px" }}>
                  <div className="descriptionSec">
                    <h2>Boat Location</h2>
                    <Typography
                      className={classes.editSection}
                      variant="p"
                      onClick={() => handleEdit("location", values)}
                    >
                      Edit
                    </Typography>
                  </div>
                  <div className={classes.experienceData1}>
                    <Typography className="my_docks_side-title">
                      Location Type
                    </Typography>
                    <Typography className="my_docks_side-decs" variant="p">
                      Residence Slip
                    </Typography>
                  </div>

                  <div className={classes.experienceData3}>
                    <Typography className="my_docks_side-title">
                      Address
                    </Typography>
                    <Typography variant="p" className="my_docks_side-decs">
                      {boatData?.address}
                    </Typography>
                  </div>
                  <Divider />
                </Stack>
                <Stack spacing={3} style={{ marginTop: "25px" }}>
                  <div className="descriptionSec">
                    <h2>Boat Detail</h2>
                    <Typography
                      className={classes.editSection}
                      variant="p"
                      onClick={() => handleEdit("experienceDes", values)}
                    >
                      Edit
                    </Typography>
                  </div>
                  <div className={classes.experienceData1}>
                    <Typography className="my_docks_side-title">
                      Boat Year
                    </Typography>
                    <Typography
                      className="my_docks_side-decs"
                      variant="p"
                      fontWeight="1000"
                      color="#1B3659"

                      // paddingLeft={5}
                    >
                      {boatData?.year_id}
                    </Typography>
                  </div>
                  <div className={classes.experienceData2}>
                    <Typography className="my_docks_side-title">
                      Boat Make
                    </Typography>
                    <Typography
                      className="my_docks_side-decs"
                      variant="p"
                      fontWeight="1000"
                      color="#1B3659"
                      // paddingLeft={5}
                    >
                      {boatData?.make_id}
                    </Typography>
                  </div>
                  <div className={classes.experienceData3}>
                    <Typography className="my_docks_side-title">
                      Boat Model
                    </Typography>
                    <Typography
                      className="my_docks_side-decs"
                      variant="p"
                      fontWeight="1000"
                      color="#1B3659"
                    >
                      {boatData?.model_id}
                    </Typography>
                  </div>

                  <div className={classes.experienceData3}>
                    <Typography className="my_docks_side-title">
                      Boat Length
                    </Typography>
                    <Typography
                      className="my_docks_side-decs"
                      variant="p"
                      fontWeight="1000"
                      color="#1B3659"
                    >
                      {boatData?.length}
                    </Typography>
                  </div>
                  <div className={classes.experienceData3}>
                    <Typography className="my_docks_side-title">
                      Boat Capacity
                    </Typography>
                    <Typography
                      className="my_docks_side-decs"
                      variant="p"
                      fontWeight="1000"
                      color="#1B3659"
                    >
                      {boatData?.capacity}
                    </Typography>
                  </div>
                  <div className={classes.experienceData3}>
                    <Typography className="my_docks_side-title">
                      Boat Type
                    </Typography>
                    <Typography
                      className="my_docks_side-decs"
                      variant="p"
                      fontWeight="1000"
                      color="#1B3659"
                    >
                      {boatData?.boat_type_id}
                    </Typography>
                  </div>
                  <div
                    className={classes.experienceData3}
                    // style={{ width: "50%" }}
                  >
                    <Typography className="my_docks_side-title">
                      Engine Year
                    </Typography>
                    <Typography
                      className="my_docks_side-decs"
                      variant="p"
                      fontWeight="1000"
                      color="#1B3659"
                    >
                      {boatData?.engine_year}
                    </Typography>
                  </div>
                  <div
                    className={classes.experienceData3}
                    // style={{ width: "50%" }}
                  >
                    <Typography className="my_docks_side-title">
                      Engine Type
                    </Typography>
                    <Typography
                      className="my_docks_side-decs"
                      variant="p"
                      fontWeight="1000"
                      color="#1B3659"
                    >
                      {boatData?.engine_type}
                    </Typography>
                  </div>
                  <div className={classes.experienceData3}>
                    <Typography className="my_docks_side-title">
                      Number Of Engines
                    </Typography>
                    <Typography
                      className="my_docks_side-decs"
                      variant="p"
                      fontWeight="1000"
                      color="#1B3659"
                    >
                      {boatData?.num_engine}
                    </Typography>
                  </div>
                  <div className={classes.experienceData3}>
                    <Typography className="my_docks_side-title">
                      Total Horse Power
                    </Typography>
                    <Typography
                      className="my_docks_side-decs"
                      variant="p"
                      fontWeight="1000"
                      color="#1B3659"
                    >
                      {boatData?.horse_power}
                    </Typography>
                  </div>
                  <div className={classes.experienceData3}>
                    <Typography className="my_docks_side-title">
                      Title
                    </Typography>
                    <Typography
                      className="my_docks_side-decs"
                      variant="p"
                      fontWeight="1000"
                      color="#1B3659"
                    >
                      {boatData?.title}
                    </Typography>
                  </div>
                  <div className={classes.experienceData3}>
                    <Typography className="my_docks_side-title">
                      Description
                    </Typography>
                    <Typography
                      className="my_docks_side-decs"
                      variant="p"
                      fontWeight="1000"
                      color="#1B3659"
                    >
                      {boatData?.description}
                    </Typography>
                  </div>
                  <Divider />
                </Stack>

                <Stack spacing={3} style={{ marginTop: "25px" }}>
                  <div className="descriptionSec">
                    <h2>Boat Features</h2>
                    <Typography
                      className={classes.editSection}
                      variant="p"
                      onClick={() => handleEdit("feature", values)}
                    >
                      Edit
                    </Typography>
                  </div>
                  {/* {experienceData.features.map((item, index) => ( */}

                  {boatData?.features.map((item, index) => {
                    let feature = item.feature;
                    return (
                      <div
                        className={classes.experienceData1}
                        style={{ width: "50%" }}
                      >
                        <Typography fontWeight={500}>{feature.name}</Typography>
                      </div>
                    );
                  })}

                  {/* ))} */}

                  <Divider />
                </Stack>

                <Stack spacing={3} style={{ marginTop: "25px" }}>
                  <div className="descriptionSec">
                    <h2>Allowed Things</h2>
                    <Typography
                      className={classes.editSection}
                      variant="p"
                      onClick={() => handleEdit("things", values)}
                    >
                      Edit
                    </Typography>
                  </div>
                  {/* {experienceData.features.map((item, index) => ( */}

                  {boatData?.things.map((item, index) => {
                    let feature = item.thing;
                    return (
                      <div
                        className={classes.experienceData1}
                        style={{ width: "50%" }}
                      >
                        <Typography fontWeight={500}>{feature.name}</Typography>
                      </div>
                    );
                  })}

                  {/* ))} */}

                  <Divider />
                </Stack>

                <Stack spacing={3} style={{ marginTop: "25px" }}>
                  <div className="descriptionSec">
                    <h2>Boat Insurance Detail</h2>
                    <Typography
                      className={classes.editSection}
                      variant="p"
                      onClick={() => handleEdit("insurance", values)}
                    >
                      Edit
                    </Typography>
                  </div>
                  <div className={classes.experienceData3}>
                    <Typography fontWeight={500} width="300px">
                      Insurance Company
                    </Typography>
                    <Typography
                      variant="p"
                      fontWeight="1000"
                      color="#1B3659"
                      width="400px"
                    >
                      {boatData?.insurance_company}
                    </Typography>
                  </div>
                  <div className={classes.experienceData3}>
                    <Typography fontWeight={500} width="300px">
                      Insurance Policy
                    </Typography>
                    <Typography
                      variant="p"
                      fontWeight="1000"
                      color="#1B3659"
                      width="400px"
                    >
                      {boatData?.insurance_policy}
                    </Typography>
                  </div>
                  <div className={classes.experienceData3}>
                    <Typography fontWeight={500} width="300px">
                      Boat Registration #
                    </Typography>
                    <Typography
                      variant="p"
                      fontWeight="1000"
                      color="#1B3659"
                      width="400px"
                    >
                      {boatData?.registration_no}
                    </Typography>
                  </div>
                  <div className={classes.experienceData3}>
                    <Typography fontWeight={500} width="300px">
                      Line Holder
                    </Typography>
                    <Typography
                      variant="p"
                      fontWeight="1000"
                      color="#1B3659"
                      width="400px"
                    >
                      {boatData?.line_holder}
                    </Typography>
                  </div>

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
                  <div className="experienceDataImage">
                    {boatData?.images?.map((item, index) => (
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
                      </div>
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
