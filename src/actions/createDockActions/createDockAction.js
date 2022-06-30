import axios from "axios";
import { toast } from "react-toastify";

//----------------------****Create Dock****-----------------------
export const createDock =
  ({
    address,
    featured_image,
    city,
    state,
    type,
    title,
    description,
    step,
    latitude,
    longitude,
  }) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: "CREATE_DOCK_DROPDOWN_INIT",
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
        `${process.env.REACT_APP_API_URL}/owner/dock/create`,
        {
          address,
          featured_image,
          city,
          state,
          type,
          title,
          description,
          step,
          latitude,
          longitude,
        },
        config
      );

      //   console.log("data::>", data.message);
      // if (data.status) {
      //   callBack();
      // }
      localStorage.setItem("dockDropDownInfo", JSON.stringify(data));
      toast.success(data.message);
      dispatch({
        type: "CREATE_DOCK_DROPDOWN_SUCCESS",
        payload: data,
      });
    } catch (error) {
      toast.error(error.response.data.message);
      dispatch({
        type: "CREATE_DOCK_DROPDOWN_FAIL",
        payload: error,
      });
    }
  };

//----------------------****Add/Update Dock DETAILS****-----------------------
export const addDockDetails =
  ({
    type,
    title,
    description,
    step,
    prices,
    id,
    address,
    latitude,
    longitude,
    features,
    images,
    availability,
    featured_image,
    city,
    state,
    is_completed,
  }) =>
  // callBack
  async (dispatch, getState) => {
    try {
      dispatch({
        type: "DOCK_DROPDOWN_DETAILS_INIT",
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
        `${process.env.REACT_APP_API_URL}/owner/dock/update`,
        {
          type,
          title,
          description,
          step,
          prices,
          id,
          address,
          latitude,
          longitude,
          features,
          images,
          availability,
          featured_image,
          city,
          state,
          latitude,
          longitude,
          is_completed,
        },
        config
      );

      console.log("data::>", data.message);
      // if (data.status) {
      localStorage.setItem("dockDropDownInfo", JSON.stringify(data));
      // }
      toast.success(data.message);
      dispatch({
        type: "DOCK_DROPDOWN_DETAILS_SUCCESS",
        payload: data,
      });
    } catch (error) {
      toast.error(error.response.data.message);
      dispatch({
        type: "DOCK_DROPDOWN_DETAILS_FAIL",
        payload: error,
      });
    }
  };

//----------------------****Dock Listing****-----------------------
export const getDockListing = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: "GET_DOCK_DROPDOWN_LIST_INIT",
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
      `${process.env.REACT_APP_API_URL}/owner/dock/listing`,
      {},
      config
    );

    //   console.log("data::>", data.message);
    //   if (data.status) {
    //     callBack();
    //   }
    toast.success(data.message);
    dispatch({
      type: "GET_DOCK_DROPDOWN_LIST_SUCCESS",
      payload: data,
    });
  } catch (error) {
    toast.error(error.response.data.message);
    dispatch({
      type: "GET_DOCK_DROPDOWN_LIST_FAIL",
      payload: error,
    });
  }
};

//----------------------****Clear Dock states****-----------------------
export function clearDockStates() {
  return async (dispatch) => {
    dispatch({
      type: "CLEAR_DOCK_STATES",
    });
  };
}
