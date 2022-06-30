export const experienceRenterReducer = (state = {}, action) => {
  switch (action.type) {
    //----------------------****Experience Listing From Renter Side****-----------------------
    case "GET_EXPERIENCE_LIST_RENTER_INIT":
      return { loading: true };
    case "GET_EXPERIENCE_LIST_RENTER_SUCCESS":
      return { loading: false, experienceList: action.payload };
    case "GET_EXPERIENCE_LIST_RENTER_FAIL":
      return { loading: false, error: action.payload };

    //----------------------****Experience Details From Renter Side****-----------------------
    case "GET_EXPERIENCE_DETAIL_RENTER_INIT":
      return { loading: true };
    case "GET_EXPERIENCE_DETAIL_RENTER_SUCCESS":
      return { loading: false, experienceDetails: action.payload };
    case "GET_EXPERIENCE_DETAIL_RENTER_FAIL":
      return { loading: false, error: action.payload };

    //----------------------****Experience BOOKING Slot From Renter Side****-----------------------
    case "GET_EXPERIENCE_BOOKING_SLOT_INIT":
      return { loading: true };
    case "GET_EXPERIENCE_BOOKING_SLOT_SUCCESS":
      return { loading: false, bookingSlot: action.payload };
    case "GET_EXPERIENCE_BOOKING_SLOT_FAIL":
      return { loading: false, error: action.payload };

    //----------------------****Experience BOOKING From Renter Side****-----------------------
    case "GET_EXPERIENCE_BOOKING_INIT":
      return { loading: true };
    case "GET_EXPERIENCE_BOOKING_SUCCESS":
      return { loading: false, booking: action.payload };
    case "GET_EXPERIENCE_BOOKING_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
