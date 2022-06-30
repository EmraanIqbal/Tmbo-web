export const boatRenterReducer = (state = {}, action) => {
  switch (action.type) {
    //----------------------****Boat Listing From Renter Side****-----------------------
    case "GET_BOAT_LIST_RENTER_INIT":
      return { loading: true };
    case "GET_BOAT_LIST_RENTER_SUCCESS":
      return { loading: false, boatList: action.payload };
    case "GET_BOAT_LIST_RENTER_FAIL":
      return { loading: false, error: action.payload };

    //----------------------****Boat Details From Renter Side****-----------------------
    case "GET_BOAT_DETAILS_RENTER_INIT":
      return { loading: true };
    case "GET_BOAT_DETAILS_RENTER_SUCCESS":
      return { loading: false, boatDetails: action.payload };
    case "GET_BOAT_DETAILS_RENTER_FAIL":
      return { loading: false, error: action.payload };

    // //----------------------****Experience BOOKING Slot From Renter Side****-----------------------
    // case "GET_EXPERIENCE_BOOKING_SLOT_INIT":
    //   return { loading: true };
    // case "GET_EXPERIENCE_BOOKING_SLOT_SUCCESS":
    //   return { loading: false, bookingSlot: action.payload };
    // case "GET_EXPERIENCE_BOOKING_SLOT_FAIL":
    //   return { loading: false, error: action.payload };
    default:
      return state;
  }
};
