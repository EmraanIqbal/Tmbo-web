import axios from "axios";
import { toast } from "react-toastify";

//-----------------------------Delete BOAT Image------------------------------//
export const deleteBoatImage =
  ({ id }) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: "DELETE_BOAT_IMAGE_INIT",
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
        `${process.env.REACT_APP_API_URL}/owner/boats/deleteImage`,
        { id },
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
        type: "DELETE_BOAT_IMAGE_SUCCESS",
        payload: data.data,
      });

      // localStorage.setItem("expDropDownInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: "DELETE_BOAT_IMAGE_FAIL",
        payload: error,
        // error.response && error.response.data.message
        //   ? error.response.data.message
        //   : error.message,
      });
    }
  };
