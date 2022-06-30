export const createDockReducer = (state = {}, action) => {
  switch (action.type) {
    // --------------- Create Dock ------------------//
    case "CREATE_DOCK_DROPDOWN_INIT":
      return { loading: true };
    case "CREATE_DOCK_DROPDOWN_SUCCESS":
      return { loading: false, createDock: action.payload };
    case "CREATE_DOCK_DROPDOWN_FAIL":
      return { loading: false, error: action.payload };

    // --------------- Add/Update Dock Details ------------------//
    case "DOCK_DROPDOWN_DETAILS_INIT":
      return { loading: true };
    case "DOCK_DROPDOWN_DETAILS_SUCCESS":
      return { loading: false, addDockDetails: action.payload };
    case "DOCK_DROPDOWN_DETAILS_FAIL":
      return { loading: false, error: action.payload };

    // --------------- ADD Experience Details ------------------//
    case "GET_DOCK_DROPDOWN_LIST_INIT":
      return { loading: true };
    case "GET_DOCK_DROPDOWN_LIST_SUCCESS":
      return { loading: false, dockLists: action.payload };
    case "GET_DOCK_DROPDOWN_LIST_FAIL":
      return { loading: false, error: action.payload };

    // --------------- DELETE Experience IMAGE  ------------------//
    // case "DELETE_EXPERIENCE_IMAGE_INIT":
    //   return { loading: true };
    // case "DELETE_EXPERIENCE_IMAGE_SUCCESS":
    //   return { loading: false, deleteImage: action.payload };
    // case "DELETE_EXPERIENCE_IMAGE_FAIL":
    //   return { loading: false, error: action.payload };

    default:
      return state;
  }
};
