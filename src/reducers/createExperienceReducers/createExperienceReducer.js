export const createExperienceReducer = (state = {}, action) => {
  switch (action.type) {
    case "CREATE_EXPERIENCE_INIT":
      return { loading: true };
    case "CREATE_EXPERIENCE_SUCCESS":
      return { loading: false, experienceDropdownInfo: action.payload };
    case "CREATE_EXPERIENCE_FAIL":
      return { loading: false, error: action.payload };

    // --------------- ADD Experience Details ------------------//
    case "ADD_EXPERIENCE_DETAILS_INIT":
      return { loading: true };
    case "ADD_EXPERIENCE_DETAILS_SUCCESS":
      return { loading: false, createExperienceInfo: action.payload };
    case "ADD_EXPERIENCE_DETAILS_FAIL":
      return { loading: false, error: action.payload };

    // --------------- ADD Experience Details ------------------//
    case "EXPERIENCE_LISTING_INIT":
      return { loading: true };
    case "EXPERIENCE_LISTING_SUCCESS":
      return { loading: false, experienceListing: action.payload };
    case "EXPERIENCE_LISTING_FAIL":
      return { loading: false, error: action.payload };

    // --------------- DELETE Experience IMAGE  ------------------//
    case "DELETE_EXPERIENCE_IMAGE_INIT":
      return { loading: true };
    case "DELETE_EXPERIENCE_IMAGE_SUCCESS":
      return { loading: false, deleteImage: action.payload };
    case "DELETE_EXPERIENCE_IMAGE_FAIL":
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
