import axios from "axios";
import { toast } from "react-toastify";

//-----------------------------CREATE BOAT ACTION-----------------------------//
export const createBoat =
  ({ address, latitude, longitude, state }) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: "CREATE_BOAT_INIT",
      });

      const {
        userLogin: { userInfo },
      } = getState();

      // console.log("userInfo::>", userInfo);

      const config = {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        // 'https://tmbo.technerdstesting.net/api/boats/create',
        `${process.env.REACT_APP_API_URL}/owner/boats/create`,
        {
          address,
          latitude,
          longitude,
          state,
        },
        config
      );
      if (data.status) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
      dispatch({
        type: "CREATE_BOAT_SUCCESS",
        payload: data,
      });
    } catch (error) {
      toast.success(error.message);

      dispatch({
        type: "CREATE_BOAT_FAIL",
        payload: error,
        // error.response && error.response.data.message
        //   ? error.response.data.message
        //   : error.message,
      });
    }
  };

//-----------------------------Update BOAT ACTION-----------------------------//
export const updateBoat =
  ({ address, latitude, longitude, state, id }) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: "UPDATE_BOAT_INIT",
      });

      const {
        userLogin: { userInfo },
      } = getState();

      // console.log("userInfo::>", userInfo);

      const config = {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        // 'https://tmbo.technerdstesting.net/api/boats/create',
        `${process.env.REACT_APP_API_URL}/owner/boats/update`,
        {
          address,
          latitude,
          longitude,
          state,
          id,
        },
        config
      );
      if (data.status) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
      dispatch({
        type: "UPDATE_BOAT_SUCCESS",
        payload: data,
      });
    } catch (error) {
      toast.success(error.message);

      dispatch({
        type: "UPDATE_BOAT_FAIL",
        payload: error,
        // error.response && error.response.data.message
        //   ? error.response.data.message
        //   : error.message,
      });
    }
  };

//-----------------------------ADD BOAT Details------------------------------//
export const addBoatDetail =
  ({
    year_id,
    make_id,
    modal_id,
    length,
    capacity,
    boat_type_id,
    engine_year,
    engine_type,
    num_engine,
    horse_power,
    cooler_available,
    bt_stereo_available,
    fuel_type,
    anchor_available,
    gps_available,
    depth_finder_available,
    title,
    description,
    state,
    features,
    things,
    insurance_company,
    insurance_policy,
    line_holder,
    registration_no,
    claim_of_loss,
    availability,
    boat_id,
    type,
    operator_availability,
    cancel_policy,
    price_per_hour,
    fuel_payer,
    multiple_booking,
  }) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: "ADD_BOAT_DETAIL_INIT",
      });

      const {
        userLogin: { userInfo },
      } = getState();

      // console.log("userInfo::>", userInfo);

      const config = {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        // 'https://tmbo.technerdstesting.net/api/boats/create',
        `${process.env.REACT_APP_API_URL}/owner/boats/detail`,
        {
          year_id,
          make_id,
          modal_id,
          length,
          capacity,
          boat_type_id,
          engine_year,
          engine_type,
          num_engine,
          horse_power,
          cooler_available,
          bt_stereo_available,
          fuel_type,
          anchor_available,
          gps_available,
          depth_finder_available,
          title,
          description,
          state,
          features,
          things,
          insurance_company,
          insurance_policy,
          line_holder,
          registration_no,
          claim_of_loss,
          availability,
          boat_id,
          type,
          operator_availability,
          cancel_policy,
          price_per_hour,
          fuel_payer,
          multiple_booking,
        },
        config
      );
      if (data.status) {
        toast.success(data.message);
      }
      dispatch({
        type: "ADD_BOAT_DETAIL_SUCCESS",
        payload: data,
      });
    } catch (error) {
      toast.success(error.response.data.message);

      dispatch({
        type: "ADD_BOAT_DETAIL_FAIL",
        payload: error,
        // error.response && error.response.data.message
        //   ? error.response.data.message
        //   : error.message,
      });
    }
  };
