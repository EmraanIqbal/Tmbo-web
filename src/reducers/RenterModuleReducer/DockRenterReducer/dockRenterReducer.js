export const dockRenterReducer = (state = {}, action) => {
  switch (action.type) {
    //----------------------****DOCK Listing From Renter Side****-----------------------
    case "GET_DOCK_LIST_RENTER_INIT":
      return { loading: true };
    case "GET_DOCK_LIST_RENTER_SUCCESS":
      return { loading: false, dockList: action.payload };
    case "GET_DOCK_LIST_RENTER_FAIL":
      return { loading: false, error: action.payload };

    //----------------------****Dock Details From Renter Side****-----------------------
    case "GET_DOCK_DETAILS_RENTER_INIT":
      return { loading: true };
    case "GET_DOCK_DETAILS_RENTER_SUCCESS":
      return { loading: false, dockDetails: action.payload };
    case "GET_DOCK_DETAILS_RENTER_FAIL":
      return { loading: false, error: action.payload };

    //----------------------****Dock Booking from Renter Side****-----------------------
    case "DOCK_BOOKING_INIT":
      return { loading: true };
    case "DOCK_BOOKING_SUCCESS":
      return { loading: false, dockBooking: action.payload };
    case "DOCK_BOOKING_FAIL":
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
