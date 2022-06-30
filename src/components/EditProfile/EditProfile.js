import { Stack, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import ImageUploading from "react-images-uploading";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import profile from "../../Assets/profile.PNG";
import { useNavigate } from "react-router-dom";

let useStyles = makeStyles((theme) => ({
  profile: {
    backgroundColor: "#F9F9FB",
    width: "80%",
    height: "contained",
    borderRadius: theme.shape.borderRadius,
    marginTop: theme.spacing(2),
  },
  image: {
    marginTop: theme.spacing(),
    textAlign: "center",
  },
  profileStyling: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
  },
  firstLast: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  saveButton: {
    textAlign: "center",
    // marginLeft: "100px",
  },
  saveButtonStyling: {
    color: "white",
    backgroundColor: "#0E2B4F",
    padding: "5px 50px 5px 50px",
    borderRadius: theme.shape.borderRadius,
    border: "none",
    marginBottom: "50px",
  },
}));

const EditProfile = (props) => {
  // edit image code strat
  const [image, setImage] = useState({ preview: "", raw: "" });

  const handleChange = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image.raw);

    await fetch("YOUR_URL", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    });
  };
  // end edit img code
  let classes = useStyles();
  const navigate = useNavigate();
  return (
    <Sidebar>
      <h3 className="my_profile_heding">Edit Profile</h3>
      <div className="owner_my_profile_main">
        <div className="my_profile_inner">
          <div className="my_profile_marcus_img my_profile_edit_img">
            <div className="edit_photo_renter text-center">
              <div>
                <label htmlFor="upload-button">
                  {image.preview ? (
                    <img src={image.preview} alt="dummy" />
                  ) : (
                    <>
                      <span>
                        <img src={profile} />
                      </span>
                    </>
                  )}
                </label>
                <input
                  type="file"
                  id="upload-button"
                  style={{ display: "none" }}
                  onChange={handleChange}
                />
              </div>
              <p>Marcus</p>
            </div>
          </div>
          <div className="my_profile_details edit_profile_details">
            <Formik
              initialValues={{
                // firstName: "Marcus",
                // lastName: "Modi",
                // phone: "+1-123-456-789",
                // email: "marcus@dev.com",
                // city: "Los Angeles",
                // state: "California",
                // zipCode: "94203",
                firstName: "",
                lastName: "",
                phone: "",
                email: "",
                city: "",
                state: "",
                zipCode: "",
              }}
              validationSchema={Yup.object().shape({
                firstName: Yup.string().required("First Name is required"),
                lastName: Yup.string().required("Last Name is required"),
                city: Yup.string().required("City is required"),
                state: Yup.string().required("State is required"),
                zipCode: Yup.string().required("Zip code is required"),
                email: Yup.string()
                  .email("Email is invalid")
                  .required("Email is required"),
                phone: Yup.string("Enter a valid Phone Number").required(
                  "Phone number required"
                ),
                // .length(17, "Phone number is not valid"),
              })}
              onSubmit={(fields) => {
                // alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
                navigate("/profile");
              }}
              render={({ errors, status, touched }) => (
                <Form>
                  <Stack spacing={2}>
                    <div className={classes.firstLast}>
                      <div className="my_pro_names_div">
                        <label htmlFor="firstName">First Name</label>
                        <Field
                          name="firstName"
                          type="text"
                          placeholder="Marcus"
                          className={
                            "form-control" +
                            (errors.firstName && touched.firstName
                              ? " is-invalid"
                              : "")
                          }
                        />
                        <ErrorMessage
                          name="firstName"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="my_pro_names_div">
                        <label htmlFor="lastName">Last Name</label>
                        <Field
                          name="lastName"
                          type="text"
                          placeholder="Marcus"
                          className={
                            "form-control" +
                            (errors.lastName && touched.lastName
                              ? " is-invalid"
                              : "")
                          }
                        />
                        <ErrorMessage
                          name="lastName"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="phone">Phone</label>
                      <Field
                        name="phone"
                        type="text"
                        placeholder="123-456-789-0"
                        className={
                          "form-control" +
                          (errors.phone && touched.phone ? " is-invalid" : "")
                        }
                        // placeholder="123-456-789"
                      />
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                    <div>
                      <label htmlFor="email">Email</label>
                      <Field
                        name="email"
                        type="text"
                        placeholder="tmbo@gmail.com"
                        className={
                          "form-control" +
                          (errors.email && touched.email ? " is-invalid" : "")
                        }
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className={classes.firstLast}>
                      <div className="my_pro_names_div">
                        <label htmlFor="city">City</label>
                        <Field
                          name="city"
                          type="text"
                          placeholder="Los Angeles"
                          className={
                            "form-control" +
                            (errors.city && touched.city ? " is-invalid" : "")
                          }
                          // placeholder="Los Angeles"
                        />
                        <ErrorMessage
                          name="city"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="my_pro_names_div">
                        <label htmlFor="state">State</label>
                        <Field
                          name="state"
                          type="text"
                          placeholder="California"
                          className={
                            "form-control" +
                            (errors.state && touched.state ? " is-invalid" : "")
                          }
                          // placeholder="California"
                        />
                        <ErrorMessage
                          name="state"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="zipCode">Zip Code</label>
                      <Field
                        name="zipCode"
                        type="text"
                        placeholder="94203"
                        className={
                          "form-control" +
                          (errors.zipCode && touched.zipCode
                            ? " is-invalid"
                            : "")
                        }
                      />
                      <ErrorMessage
                        name="zipCode"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="text-center">
                      <button type="submit" className="blue_btn mt-3">
                        Save
                      </button>
                    </div>
                  </Stack>
                </Form>
              )}
            />
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default EditProfile;
