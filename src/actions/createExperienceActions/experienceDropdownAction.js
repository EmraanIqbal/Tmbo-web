import axios from "axios";
import { toast } from "react-toastify";

export const experienceDropdown = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: "EXPERIENCE_DROPDOWN_INIT",
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

    const { data } = await axios.get(
      // 'https://tmbo.technerdstesting.net/api/boats/create',
      `${process.env.REACT_APP_API_URL}/owner/experience/dropdowns`,
      config
    );

    console.log("data::>", data.message);
    dispatch({
      type: "EXPERIENCE_DROPDOWN_SUCCESS",
      payload: data,
    });

    localStorage.setItem("expDropDownInfo", JSON.stringify(data));
  } catch (error) {
    toast.error(error.response.data.message);

    dispatch({
      type: "EXPERIENCE_DROPDOWN_FAIL",
      payload: error,
      // error.response && error.response.data.message
      //   ? error.response.data.message
      //   : error.message,
    });
  }
};
