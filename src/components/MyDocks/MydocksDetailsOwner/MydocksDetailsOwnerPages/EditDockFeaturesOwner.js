import React, { useEffect, useState } from "react";
import uplaoddummy from "../../../../Assets/RenterImages/uploadImage.png";
import { useDispatch, useSelector } from "react-redux";

import SidebarDocks from "../../../Sidebar/SidebarDocks";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import MapContainer from "../../../GoogleMap/GoogleMap";
import { useNavigate } from "react-router-dom";

const EditDockFeaturesOwner = (props) => {
    const navigate=useNavigate()
    const dispatch = useDispatch();
    const dockDropDownInfo = JSON.parse(localStorage.getItem("dockDropDownInfo"));
    const features = JSON.parse(localStorage.getItem("features"));
  
    // const {
    //   data: { features },
    // } = dockDropDownInfo;
  
    // const dockReducer = useSelector((state) => state.dockReducer);
  
    // const { dockDropDown: { data: { features = [] } = {} } = {} } = dockReducer;
    // const { dockDropDown: { data: { dock: { id = "" } = {} } = {} } = {} } =
    //   dockReducer;
    const dockReducer = useSelector((state) => state.dockDropDownReducer);
  
    // const { dockDetails: { data: { dock: { id = "" } = {} } = {} } = {} } =
    //   dockReducer;
  
    console.log("dockDropDownInfo::>", dockDropDownInfo);
  
    let id = dockDropDownInfo?.data?.dock?.id || "";
  
    const [boatThings, setBoatThings] = useState(features);
    console.log("feature::>", boatThings);
  
    const [featureExp, setFeatures] = useState([]);
    const feature = [];
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = async (values) => {
      setIsLoading(true);
      let expData = {
        features: feature,
        id: id,
        step: 4,
      };
    //   await dispatch(addDockDetails(expData));
  
      props.next(values);
      setIsLoading(false);
    };
  
    const handleChange = (e, things) => {
      feature.push(things.id);
    };
    console.log("feature::>", feature);
  return (
    <>
      <SidebarDocks newBoat={true}>
        <div className="add-new-boats-wrapper edit_new_wrapper">
          {/* <div className="add-new">Add New Experience</div> */}
          <h1 className="docks_heading">Edit Dock Features</h1>
          <div className="boat-card">
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
                      {boatThings?.map((things, index) => (
                        <div
                          className="col-sm-6 col-md-6 col-lg-4 col-xl-3"
                          key={things.name}
                        >
                          <div className="form-row">
                            <div className="inputGroup add_new_dock_checkbox">
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

                  <div className="form-group mt-3" style={{textAlign:"right"}}>
                    {/* <button
                      type="button"
                      onClick={() => props.prev(values)}
                      className="btn btn-primary back"
                    >
                      Back
                    </button> */}

                    <button type="submit" className="btn btn-primary next" onClick={()=>navigate('/docks-details-owner')}>
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
export default EditDockFeaturesOwner;
