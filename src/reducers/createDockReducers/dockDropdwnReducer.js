export const dockDropDownReducer = (state = {}, action) => {
  switch (action.type) {
    case "DOCK_DROPDOWN_INIT":
      return { loading: true };
    case "DOCK_DROPDOWN_SUCCESS":
      return { loading: false, dockDropdown: action.payload };
    case "DOCK_DROPDOWN_FAIL":
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
