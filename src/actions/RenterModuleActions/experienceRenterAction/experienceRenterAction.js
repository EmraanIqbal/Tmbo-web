import axios from "axios";
import { toast } from "react-toastify";

//----------------------****Experience Listing From Renter Side****-----------------------
export const getExperienceListingRenter = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: "GET_EXPERIENCE_LIST_RENTER_INIT",
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
      `${process.env.REACT_APP_API_URL}/renter/all-experience`,
      {},
      config
    );

    //   console.log("data::>", data.message);
    //   if (data.status) {
    //     callBack();
    //   }
    toast.success(data.message);
    dispatch({
      type: "GET_EXPERIENCE_LIST_RENTER_SUCCESS",
      payload: data,
    });
  } catch (error) {
    toast.error(error.response.data.message);
    dispatch({
      type: "GET_EXPERIENCE_LIST_RENTER_FAIL",
      payload: error,
    });
  }
};

//----------------------****Experience Details From Renter Side****-----------------------
export const getExperienceDetailsRenter =
  (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: "GET_EXPERIENCE_DETAIL_RENTER_INIT",
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
        `${process.env.REACT_APP_API_URL}/renter/experience-detail?id=${id}`,
        {},
        config
      );

      toast.success(data.message);
      dispatch({
        type: "GET_EXPERIENCE_DETAIL_RENTER_SUCCESS",
        payload: data,
      });
    } catch (error) {
      toast.error(error.response.data.message);
      dispatch({
        type: "GET_EXPERIENCE_DETAIL_RENTER_FAIL",
        payload: error,
      });
    }
  };

//----------------------****Experience Booking Slot From Renter Side****-----------------------
export const experienceBookingSlots =
  ({ id, hours, start_time, end_time, date }) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: "GET_EXPERIENCE_BOOKING_SLOT_INIT",
      });

      const {
        userLogin: { userInfo },
      } = getState();

      console.log("userInfo::>", userInfo.token);

      const config = {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/renter/experience/slots`,
        { id, hours, start_time, end_time, date },
        config
      );

      toast.success(data.message);
      dispatch({
        type: "GET_EXPERIENCE_BOOKING_SLOT_SUCCESS",
        payload: data,
      });
    } catch (error) {
      toast.error(error.response.data.message);
      dispatch({
        type: "GET_EXPERIENCE_BOOKING_SLOT_FAIL",
        payload: error,
      });
    }
  };

//----------------------****Experience Booking From Renter Side****-----------------------
export const experienceBooking =
  (
    { id, hours, slot_start_time, slot_end_time, date },
    stripe_token,
    callback
  ) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: "GET_EXPERIENCE_BOOKING_INIT",
      });

      const {
        userLogin: { userInfo },
      } = getState();

      console.log("userInfo::>", userInfo.token);

      const config = {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/renter/experience/book`,
        {
          id,
          hours,
          start_time: slot_start_time,
          end_time: slot_end_time,
          date,
          stripe_token,
        },
        config
      );

      if (data.response_code == 200) {
        callback();
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
      dispatch({
        type: "GET_EXPERIENCE_BOOKING_SUCCESS",
        payload: data,
      });
    } catch (error) {
      toast.error(error.response.data.message);
      dispatch({
        type: "GET_EXPERIENCE_BOOKING_FAIL",
        payload: error,
      });
    }
  };
