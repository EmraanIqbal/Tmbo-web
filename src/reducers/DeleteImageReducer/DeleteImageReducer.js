export const deleteImageReducer = (state = {}, action) => {
  switch (action.type) {
    // --------------- DELETE Experience IMAGE  ------------------//
    case "DELETE_EXPERIENCE_IMAGE_INIT":
      return { loading: true };
    case "DELETE_EXPERIENCE_IMAGE_SUCCESS":
      return { loading: false, deleteImage: action.payload };
    case "DELETE_EXPERIENCE_IMAGE_FAIL":
      return { loading: false, error: action.payload };

    // --------------- DELETE Boat IMAGE  ------------------//
    case "DELETE_BOAT_IMAGE_INIT":
      return { loading: true };
    case "DELETE_BOAT_IMAGE_SUCCESS":
      return { loading: false, deleteBoatImage: action.payload };
    case "DELETE_BOAT_IMAGE_FAIL":
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
