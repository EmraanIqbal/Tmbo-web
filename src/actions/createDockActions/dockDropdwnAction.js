import axios from "axios";
import { toast } from "react-toastify";

export const dockDropdown = (callBack) => async (dispatch, getState) => {
  try {
    dispatch({
      type: "DOCK_DROPDOWN_INIT",
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
      `${process.env.REACT_APP_API_URL}/owner/dock/dropdowns`,
      config
    );

    console.log("data::>", data.data.features);
    if (data.status) {
      callBack();
    }
    localStorage.setItem("dockDropDownInfo", JSON.stringify(data));
    localStorage.setItem("features", JSON.stringify(data?.data?.features));
    toast.success(data.message);
    dispatch({
      type: "DOCK_DROPDOWN_SUCCESS",
      payload: data,
    });
  } catch (error) {
    toast.error(error.response.data.message);
    dispatch({
      type: "DOCK_DROPDOWN_FAIL",
      payload: error,
    });
  }
};
