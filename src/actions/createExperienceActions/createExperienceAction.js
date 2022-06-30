import { Alert } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";

export const createExperience =
  ({
    address,
    latitude,
    longitude,
    state,
    title,
    type,
    description,
    step,
    city,
    featured_image,
  }) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: "CREATE_EXPERIENCE_INIT",
      });

      const {
        userLogin: { userInfo },
      } = getState();

      console.log("userInfo::>", userInfo);

      const config = {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        // 'https://tmbo.technerdstesting.net/api/boats/create',
        `${process.env.REACT_APP_API_URL}/owner/experience/create`,
        {
          address,
          latitude,
          longitude,
          state,
          title,
          type,
          description,
          city,
          featured_image,
          step,
        },
        config
      );

      toast.success(data.message);
      // <Alert security="success">{data.message}</Alert>;

      console.log("data::>", data);
      dispatch({
        type: "CREATE_EXPERIENCE_SUCCESS",
        payload: data.data,
      });

      // localStorage.setItem("expDropDownInfo", JSON.stringify(data));
    } catch (error) {
      toast.error(error.response.data.message);

      dispatch({
        type: "CREATE_EXPERIENCE_FAIL",
        payload: error,
        // error.response && error.response.data.message
        //   ? error.response.data.message
        //   : error.message,
      });
    }
  };

export const addExperienceDetails =
  ({
    description,
    eight_hours,
    four_hours,
    id,
    step,
    images,
    six_hours,
    state,
    title,
    two_hours,
    type,
    features,
    availability_type,
    availability,
    city,
    address,
    latitude,
    longitude,
  }) =>
  async (dispatch, getState) => {
    // debugger;
    try {
      dispatch({
        type: "ADD_EXPERIENCE_DETAILS_INIT",
      });

      // let formData = new FormData();
      // // formData.append("images", images);
      // formData.append("state", 5);

      // let nearr = [];

      // nearr.push(images[0].file.name);
      // nearr.push(images[0].file.name);

      // console.log(nearr);

      // formData.append("images", nearr);

      const {
        userLogin: { userInfo },
      } = getState();

      // console.log("userInfo::>", userInfo);

      const config = {
        headers: {
          // "Content-Type": "multipart/form-data",
          Accept: "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.post(
        // 'https://tmbo.technerdstesting.net/api/boats/create',
        `${process.env.REACT_APP_API_URL}/owner/experience/detail`,
        {
          description,
          eight_hours,
          four_hours,
          six_hours,
          state,
          step,
          title,
          two_hours,
          type,
          features,
          availability,
          availability_type,
          id,
          city,
          address,
          latitude,
          longitude,
          // formData,
        },
        config
      );
      console.log("images::>", images);

      if (data?.response_code == 200) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
      // <Alert security="success">{data.message}</Alert>;

      console.log("data::>", data);
      dispatch({
        type: "ADD_EXPERIENCE_DETAILS_SUCCESS",
        payload: data.data,
      });

      // localStorage.setItem("createExpDetailsInfo", JSON.stringify(data.data));
    } catch (error) {
      toast.error(error.response.data.message);

      dispatch({
        type: "ADD_EXPERIENCE_DETAILS_FAIL",
        payload: error,
        // error.response && error.response.data.message
        //   ? error.response.data.message
        //   : error.message,
      });
    }
  };

export const experienceListingAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: "EXPERIENCE_LISTING_INIT",
    });

    const {
      userLogin: { userInfo },
    } = getState();

    console.log("userInfo::>", userInfo);

    const config = {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/owner/experience/listing`,
      {},
      config
    );

    toast.success(data.message);
    // <Alert security="success">{data.message}</Alert>;

    console.log("data::>", data);
    dispatch({
      type: "EXPERIENCE_LISTING_SUCCESS",
      payload: data.data,
    });

    // localStorage.setItem("expDropDownInfo", JSON.stringify(data));
  } catch (error) {
    toast.error(error.response.data.message);

    dispatch({
      type: "EXPERIENCE_LISTING_FAIL",
      payload: error,
      // error.response && error.response.data.message
      //   ? error.response.data.message
      //   : error.message,
    });
  }
};

export const deleteExperienceImage =
  ({ image_id, experience_id }) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: "DELETE_EXPERIENCE_IMAGE_INIT",
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/owner/experience/delete-image`,
        { image_id, experience_id },
        config
      );

      // <Alert security="success">{data.message}</Alert>;
      if (data.status) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }

      console.log("data::>", data);
      dispatch({
        type: "DELETE_EXPERIENCE_IMAGE_SUCCESS",
        payload: data.data,
      });

      // localStorage.setItem("expDropDownInfo", JSON.stringify(data));
    } catch (error) {
      toast.error(error.response.data.message);

      dispatch({
        type: "DELETE_EXPERIENCE_IMAGE_FAIL",
        payload: error,
        // error.response && error.response.data.message
        //   ? error.response.data.message
        //   : error.message,
      });
    }
  };
