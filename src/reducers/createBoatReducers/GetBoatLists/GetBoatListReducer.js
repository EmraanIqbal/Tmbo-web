export const getBoatListReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_BOAT_LIST_INIT":
      return { loading: true };
    case "GET_BOAT_LIST_SUCCESS":
      return { loading: false, getBoatList: action.payload };
    case "GET_BOAT_LIST_FAIL":
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
