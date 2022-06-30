import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import profile from "../../Assets/profile.PNG";
import editProfile from "../../Assets/EditProfile.PNG";
import { useNavigate } from "react-router-dom";
import "../MyProfile/MyProfile.scss";

const MyProfile = () => {
  const navigate = useNavigate();
  return (
    <Sidebar>
      <h3 className="my_profile_heding">My Profile</h3>
      <div className="owner_my_profile_main">
        <div className="my_profile_inner">
          <div className="my_profile_marcus_img">
            <span>
              <img src={profile} />
            </span>
            <p>Marcus</p>
          </div>
          <div className="my_profile_details">
            <div className="my_pro_names_div">
              <h3 className="bold_text">First Name</h3>
              <p>Marcus</p>
            </div>
            <div className="my_pro_names_div">
              <h3 className="bold_text">Last Name</h3>
              <p>Jonny</p>
            </div>
            <div className="my_pro_names_div">
              <h3 className="bold_text">Phone</h3>
              <p>123-456-789-0</p>
            </div>
            <div className="my_pro_names_div">
              <h3>Email</h3>
              <p>marcus@gmail.com</p>
            </div>
            <div className="my_pro_names_div">
              <h3>City</h3>
              <p>Los Angeles</p>
            </div>
            <div className="my_pro_names_div">
              <h3>State</h3>
              <p>California</p>
            </div>
            <div className="my_pro_names_div">
              <h3>Zip Code</h3>
              <p>94204</p>
            </div>
            <div className="edit_me" onClick={() => navigate("/edit-profile")}>
              <img src={editProfile} alt="Image not found" />
            </div>
          </div>
        </div>
      </div>
      {/* <EditProfile classes={classes} /> */}
    </Sidebar>
  );
};

export default MyProfile;
