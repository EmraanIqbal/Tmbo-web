import React, { useState } from "react";
import { Button, ListItemButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { userLogoutAction } from "../../../actions/userAction";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const logoutHandler = async () => {
    setIsLoading(true);

    await dispatch(userLogoutAction(() => navigate("/login")));
    setIsLoading(false);
  };

  return (
    <div>
      {isLoading ? <div className="se-pre-con"></div> : ""}

      <Button onClick={logoutHandler}>Logout</Button>
    </div>
  );
};

export default Logout;
