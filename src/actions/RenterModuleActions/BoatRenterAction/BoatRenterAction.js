import axios from "axios";
import { toast } from "react-toastify";

//----------------------****Boat Listing From Renter Side****-----------------------
export const getBoatListingRenter =
  ({ type, latitude, longitude }) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: "GET_BOAT_LIST_RENTER_INIT",
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
        `${process.env.REACT_APP_API_URL}/renter/allBoats`,
        { type, latitude, longitude }
        //   config
      );

      //   console.log("data::>", data.message);
      //   if (data.status) {
      //     callBack();
      //   }
      toast.success(data.message);
      dispatch({
        type: "GET_BOAT_LIST_RENTER_SUCCESS",
        payload: data,
      });
    } catch (error) {
      toast.error(error.response.data.message);
      dispatch({
        type: "GET_BOAT_LIST_RENTER_FAIL",
        payload: error,
      });
    }
  };

//----------------------****Boat Listing From Renter Side****-----------------------
export const getBoatDetailsRenter = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: "GET_BOAT_DETAILS_RENTER_INIT",
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

    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/renter/boat?id=${id}`
      // { id }
      //   config
    );

    //   console.log("data::>", data.message);
    //   if (data.status) {
    //     callBack();
    //   }
    toast.success(data.message);
    dispatch({
      type: "GET_BOAT_DETAILS_RENTER_SUCCESS",
      payload: data,
    });
  } catch (error) {
    toast.error(error.response.data.message);
    dispatch({
      type: "GET_BOAT_DETAILS_RENTER_FAIL",
      payload: error,
    });
  }
};
