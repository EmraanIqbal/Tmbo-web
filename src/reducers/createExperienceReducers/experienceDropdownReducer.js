export const experienceDropdownReducer = (state = {}, action) => {
  switch (action.type) {
    case "EXPERIENCE_DROPDOWN_INIT":
      return { loading: true };
    case "EXPERIENCE_DROPDOWN_SUCCESS":
      return { loading: false, experienceDropdownInfo: action.payload };
    case "EXPERIENCE_DROPDOWN_FAIL":
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
