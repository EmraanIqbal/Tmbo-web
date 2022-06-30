import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import ImageUploading from "react-images-uploading";
// import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
// import UploadImage from "../../../Assets/uploadImage.png";

import SidebarDocks from "../../Sidebar/SidebarDocks";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import MonthlyAvailability from "../../../Modals/DocksModol/AvailabilityModol/MonthlyAvailability";
// import MapContainer from "../../../GoogleMap/GoogleMap";

// import uplaoddummy from "../../../../Assets/RenterImages/uploadImage.png";

const EditDockAvailabiltyOwner = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
//   const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [season, setSeason] = useState(false);
  // const [year, setYear] = useState(false);
  const [dailyAvailable, setDailyAvailabilable] = useState(0);
  const [dock_id, setDock_id] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState([]);

  const dockDropDownInfo = JSON.parse(localStorage.getItem("dockDropDownInfo"));

  let id = dockDropDownInfo?.data?.dock?.id || "";
  console.log("id::>", id);
  useEffect(() => {
    if (id) {
      setDock_id(id);
    }
  }, []);

  // const dockReducer = useSelector((state) => state.dockDropDownReducer);

  // const { dockDropDown: { data: { dock: { id = "" } = {} } = {} } = {} } =
  //   dockReducer;

  const [isLoading, setIsLoading] = useState(false);

  // console.log({ type_id });
  const handleSubmit = async (values) => {
    setIsLoading(true);

    // if (availability == "0") {
    // setIsLoading(true);

    // let availabilityData = {
    //   id: id,
    //   availability: {
    //     availability_type_id: "0",
    //     monthly: [],
    //     year: "",
    //     seasonal: "",
    //   },
    //   state: 5,
    // };

    //   {
    //     month :January,
    //     month_id:1,
    //     is_active :true
    // },
    // let availabiltyMonth = month.map((item, index) => {
    //   return {
    //     month: item.name,
    //     month_id: item.id,
    //     is_active: true,
    //   };
    // });

    console.log("availabiltyMonth::>", dock_id);

    if (dailyAvailable === 0) {
      let availabilityData = {
        id: dock_id,
        step: 5,
        availability: {
          year: year,
          daily_available: dailyAvailable, // available
          monthly: month,
          yearly: [year],
        },
      };
    //   await dispatch(addDockDetails(availabilityData));
      props.next(values);
      setIsLoading(false);
    } else {
      let availabilityData = {
        id: dock_id,
        step: 5,
        availability: {
          // year: year,
          daily_available: dailyAvailable, // available
          // monthly: month,
          // yearly: [year],
        },
      };
    //   await dispatch(addDockDetails(availabilityData));
      props.next(values);
      setIsLoading(false);
    }

    // } else {
    //   // props.next(values);
    //   setIsLoading(false);

    //   toast.error("Under Development");
    // }
    // setIsLoading(false);
  };

  const handleClose = () => {
    setOpen(false);
    setSeason(false);
    // setYear(false);
  };

  const updateParentState = (params) => {
    console.log("params::>", params);
    setYear(params.year);
    var result = params?.selected?.map((person, index) => ({
      month: person,
      month_id: index,
      is_active: true,
    }));
    console.log("availability::>", result);
    setMonth(result);
  };

  console.log("availability::>", month);
  console.log("availability::>", year);

  return (
    <>
      <SidebarDocks newBoat={true}>
        <div className="add-new-boats-wrapper edit_new_wrapper">
          {/* <div className="add-new">Add New Experience</div> */}
          <h1 className="docks_heading">Edit Dock Availability</h1>
          <div className="boat-card">
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
                        {" "}
                        Add availability of your boat
                      </h2>
                      {/* <Typography variant="h5" fontWeight={1000} marginBottom="30px">
                  Add Availability
                </Typography> */}

                      <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="form-row">
                          <div
                            className="inputGroup"
                            // onClick={() => toast.error("Under Construction😂")}
                            onClick={() => setDailyAvailabilable(1)}
                          >
                            <input
                              id="option5"
                              name="option9"
                              type="radio"
                              // checked={open}
                              // disabled
                              // onChange={() => setOpen(true)}
                            />
                            <label htmlFor="option5">
                              Daily Availability
                              <div className="boat-inusrance">
                                Your dock will be available for monthly basis
                                rentls
                              </div>
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="form-row">
                          {/* onClick={() => setType_id("1")} */}
                          <div className="inputGroup">
                            <input
                              id="option10"
                              name="option9"
                              type="radio"
                              data-bs-toggle="modal"
                              data-bs-target="#calenderModal"
                              // checked={open}
                              // disabled
                              onClick={() => setOpen(true)}
                            />
                            <label htmlFor="option10">
                              Availabilabe on monthly bases
                              <div className="boat-inusrance">
                                Your dock will be available from monthly bases
                              </div>
                            </label>
                          </div>
                        </div>
                      </div>

                      {/* <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="form-row">
                    <div className="inputGroup" onClick={() => setSeason(true)}>
                      <input
                        id="option7"
                        name="option9"
                        type="radio"
                        // checked={open}
                        // disabled
                        // onChange={() => setOpen(true)}
                      />
                      <label htmlFor="option7">
                        Availabilabe on Seasonal bases
                        <div className="boat-inusrance">
                          Your dock will be available from Seasonal bases
                        </div>
                      </label>
                    </div>
                  </div>
                </div> */}

                      {/* <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="form-row">
                    <div className="inputGroup" onClick={() => setYear(true)}>
                      <input
                        id="option8"
                        name="option9"
                        type="radio"
                        // checked={open}
                        // disabled
                        // onChange={() => setOpen(true)}
                      />
                      <label htmlFor="option8">
                        Availability on Yearly bases
                        <div className="boat-inusrance">
                          Your dock will be available from Yearly bases
                        </div>
                      </label>
                    </div>
                  </div>
                </div> */}
                      {/* {open ? <AddCustomAvailability /> : null} */}
                    </div>
                  </div>
                  <div className="form-group mt-3" style={{textAlign:"right"}}>
                    {/* <button
                      type="button"
                      onClick={() => props.prev(values)}
                      className="btn btn-primary back"
                    >
                      Back
                    </button> */}
                    <button type="submit" className="btn btn-primary next" onClick={() => navigate("/docks-details-owner")}>
                      Submit
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
            <MonthlyAvailability
              open={open}
              handleClose={handleClose}
              updateParentState={updateParentState}
            />
          </div>
        </div>
      </SidebarDocks>
    </>
  );
};
export default EditDockAvailabiltyOwner;
