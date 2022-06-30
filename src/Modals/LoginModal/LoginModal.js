import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate, useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/userAction";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 400,
  bgcolor: "background.paper",
  //   border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const useStyles = makeStyles((theme) => ({
  confirmButton: {
    border: "none",
    color: "white",
    backgroundColor: "#1B3659",
    padding: "10px",
    width: "100%",
  },
}));

export default function LoginModal(props) {
  const dispatch = useDispatch();
  //   let { id } = useParams();
  //   const navigate = useNavigate();
  const classes = useStyles();
  const [isLoading, setIsLoading] = React.useState(false);

  //   const [data, setData] = React.useState("");
  //   //   const handleOpen = () => setOpen(true);
  //   //   const handleClose = () => setOpen(false);

  //   const handleClickForBooking = () => {
  //     if (data == 1 || data == 2) {
  //       navigate(`/docks-booking/${id}`);
  //     } else {
  //       toast.error("Please select day first");
  //     }
  //   };

  const userInfo = useSelector((state) => state.userInfo);

  React.useEffect(() => {
    if (userInfo) {
      props.handleClose();
    }
  }, [userInfo]);

  return (
    <div>
      {isLoading ? <div className="se-pre-con"></div> : ""}

      {/* <Button onClick={props?.handleOpen}>Open modal</Button> */}
      <Modal
        className="login_required_main"
        open={props?.open}
        onClose={props?.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* <div className="inner-center-card"> */}
        <Box sx={style}>
          <h3 className="login" style={{ color: "black" }}>
            Login
          </h3>

          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email("Email is invalid")
                .required("Email is required"),
              password: Yup.string()
                .min(6, "Password must be at least 6 characters")
                .required("Password is required"),
            })}
            // onSubmit={submitHandler}
            onSubmit={async (fields) => {
              // alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 2))
              setIsLoading(true);
              await dispatch(
                login(fields.email, fields.password, () => props.handleClose())
                // () => {
                //     navigate("/dashboard")}
              );
              setIsLoading(false);
            }}
          >
            {({ errors, status, touched }) => (
              <Form>
                <div className="form-row"></div>
                <div className="form-group space">
                  <label
                    htmlFor="email"
                    style={{
                      paddingBottom: "5px",
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    Email
                  </label>
                  <Field
                    name="email"
                    type="text"
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
                <div className="form-row">
                  <div className="form-group">
                    <label
                      htmlFor="password"
                      style={{
                        paddingBottom: "5px",
                        color: "black",
                        fontWeight: "bold",
                      }}
                    >
                      Password
                    </label>
                    <Field
                      name="password"
                      type="password"
                      className={
                        "form-control" +
                        (errors.password && touched.password
                          ? " is-invalid"
                          : "")
                      }
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                  <Link
                    to="/forgotpassword"
                    className="form-group space forgot"
                  >
                    Forgot Password?
                  </Link>
                </div>

                <div className="form-group" style={{ marginBottom: "25px" }}>
                  <button
                    type="submit"
                    // onClick={handleClick}
                    className="main-button-modal"
                  >
                    Log In
                    {/* {loading && (
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                        style={{ marginLeft: "12px" }}
                      ></span>
                    )} */}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
          <Link to="/signup" className="dont-accout" style={{ color: "black" }}>
            Don't have an account?{" "}
            <span className="New_register_now"> Register Now</span>
          </Link>
        </Box>
        {/* </div> */}
      </Modal>
      {/* <RenterDocksBookingStepOne data={data} /> */}
    </div>
  );
}
