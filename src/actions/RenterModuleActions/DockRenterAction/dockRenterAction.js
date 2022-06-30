import axios from "axios";
import { toast } from "react-toastify";

//----------------------****Dock Listing from Renter Side****-----------------------
export const getDockListing = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: "GET_DOCK_LIST_RENTER_INIT",
    });

    const {
      userLogin: { userInfo },
    } = getState();

    // const config = {
    //   headers: {
    //     Accept: "application/json",
    //     Authorization: `Bearer ${userInfo.token}`,
    //   },
    // };

    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/renter/all-docks`,
      {}
      //   config
    );

    //   console.log("data::>", data.message);
    //   if (data.status) {
    //     callBack();
    //   }
    toast.success(data.message);
    dispatch({
      type: "GET_DOCK_LIST_RENTER_SUCCESS",
      payload: data,
    });
  } catch (error) {
    toast.error(error.response.data.message);
    dispatch({
      type: "GET_DOCK_LIST_RENTER_FAIL",
      payload: error,
    });
  }
};

//----------------------****Dock Listing from Renter Side****-----------------------
export const getDockDetailsListing = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: "GET_DOCK_DETAILS_RENTER_INIT",
    });

    const {
      userLogin: { userInfo },
    } = getState();

    // const config = {
    //   headers: {
    //     Accept: "application/json",
    //     Authorization: `Bearer ${userInfo.token}`,
    //   },
    // };

    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/renter/dock-detail?id=${id}`
      // {}
      //   config
    );

    //   console.log("data::>", data.message);
    //   if (data.status) {
    //     callBack();
    //   }
    toast.success(data.message);
    dispatch({
      type: "GET_DOCK_DETAILS_RENTER_SUCCESS",
      payload: data,
    });
  } catch (error) {
    toast.error(error.response.data.message);
    dispatch({
      type: "GET_DOCK_DETAILS_RENTER_FAIL",
      payload: error,
    });
  }
};

//----------------------****Dock Booking from Renter Side****-----------------------
export const dockBooking =
  (id, startDate, endDate, stripe_token, callback) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: "DOCK_BOOKING_INIT",
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          Accept: "application/json",
          // Authorization: `Bearer 148|uHLdt5OOuvsbqOjBtcGFxLYD4odlCxqj17kTZwRE`,
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      console.log("config::>", id, endDate, startDate);
      // renter/dock/book?id=${id}&start_date=${start_date}&end_date=${end_date}&stripe_token=${stripe_token}
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/renter/dock/book`,
        {
          start_date: startDate,
          end_date: endDate,
          stripe_token: stripe_token,
          id: id,
        },
        config
      );

      //   console.log("data::>", data.message);
      if (data.response_code == 200) {
        callback();
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
      dispatch({
        type: "DOCK_BOOKING_SUCCESS",
        payload: data,
      });
    } catch (error) {
      toast.error(error.response.data.message);
      dispatch({
        type: "DOCK_BOOKING_FAIL",
        payload: error,
      });
    }
  };
