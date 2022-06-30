import axios from "axios";
import { toast } from "react-toastify";

//-----------------------------Get BOAT lists ACTION-----------------------------//
export const getBoatLists = (state, page) => async (dispatch, getState) => {
  try {
    dispatch({
      type: "GET_BOAT_LIST_INIT",
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

    const { data } = await axios.get(
      // 'https://tmbo.technerdstesting.net/api/boats/create',
      `${process.env.REACT_APP_API_URL}/owner/boats/list?state=${state}&page=${page}`,
      config
    );
    if (data.status) {
      toast.success(data.message);
    } else {
      toast.error(data.message);
    }
    dispatch({
      type: "GET_BOAT_LIST_SUCCESS",
      payload: data,
    });
  } catch (error) {
    toast.success(error.response.data.message);

    dispatch({
      type: "GET_BOAT_LIST_FAIL",
      payload: error,
      // error.response && error.response.data.message
      //   ? error.response.data.message
      //   : error.message,
    });
  }
};
