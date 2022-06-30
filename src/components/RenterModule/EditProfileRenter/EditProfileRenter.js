import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./EditProfileRenter.scss";
import LastFooterRenter from "../HomePageRenterSide/LastFooterRenter/LastFooterRenter";
import NavbarRenter from "../HomePageRenterSide/NavbarRenter/NavbarRenter";
import CompProImg from "../../../Assets/RenterImages/owner-pro.png";
const EditProfileRenter = () => {
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
  return (
    <>
      <div className="boats_booking_main">
        <NavbarRenter />

        <div className="custom-container">
          <div className="edit_pro_back">
            <Link className="back_to_detail" to="/boats-booking-two">
              <span>
                <i className="fa-solid fa-angle-left"></i>
              </span>
              Back
            </Link>
            <h2 className="complete_profile_text">Complete Profile</h2>
          </div>
          <div className="boats_booking_inner_box mb-0">
            <div className="">
              <form className="edit_profile_form">
                <div className="edit_photo_renter text-center">
                  <div>
                    <label htmlFor="upload-button">
                      {image.preview ? (
                        <img src={image.preview} alt="dummy" />
                      ) : (
                        <>
                          <span><img src={CompProImg}/></span>
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
                </div>
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Marcus"
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Marcus"
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="123-456-789-0"
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    className="form-control"
                    type="email"
                    placeholder="tmbo@gmail.com"
                  />
                </div>
                <div className="form-group">
                  <label>City</label>
                  <select className="form-control select_down">
                    <option>Lahore</option>
                    <option>Karachi</option>
                    <option>Isd</option>
                  </select>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>State</label>
                      <select className="form-control select_down">
                        <option>California</option>
                        <option>Karachi</option>
                        <option>Isd</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Zip Code</label>
                      <select className="form-control select_down">
                        <option>34343</option>
                        <option>Karachi</option>
                        <option>Isd</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="text-center edit_save">
                  <Link to="/boats-booking-three" className="blue_btn">
                    Save
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        <LastFooterRenter />
      </div>
    </>
  );
};

export default EditProfileRenter;
