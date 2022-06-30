export const createBoatReducer = (state = {}, action) => {
  switch (action.type) {
    case "CREATE_BOAT_INIT":
      return { loading: true };
    case "CREATE_BOAT_SUCCESS":
      return { loading: false, createBoat: action.payload };
    case "CREATE_BOAT_FAIL":
      return { loading: false, error: action.payload };

    case "UPDATE_BOAT_INIT":
      return { loading: true };
    case "UPDATE_BOAT_SUCCESS":
      return { loading: false, updateBoat: action.payload };
    case "UPDATE_BOAT_FAIL":
      return { loading: false, error: action.payload };

    //-------------------- Add Boat Detail-------------------//

    case "ADD_BOAT_DETAIL_INIT":
      return { loading: true };
    case "ADD_BOAT_DETAIL_SUCCESS":
      return { loading: false, addBoatDetail: action.payload };
    case "ADD_BOAT_DETAIL_FAIL":
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
