import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddNewBoats from "../components/AddNewBoats/AddNewBoats";
import Boats from "../components/Bookings/Boats/Boats";
import BoatsDetail from "../components/Bookings/Boats/BoatsShowDetails/BoatsDetail";
import Docks from "../components/Bookings/Docks/Docks";
import Experiences from "../components/Bookings/Experiences/Experiences";
import Dashboard from "../components/Dashboard/Dashboard";
import ChangePassword from "../components/Login/ChangePassword/ChangePassword";
import ForgotPassword from "../components/Login/ForgotPassword/ForgotPassword";
import Login from "../components/Login/Login";
import SignUp from "../components/Login/SignUp/SignUp";
import Messages from "../components/Messages/Messages";
import MyBoats from "../components/MyBoats/MyBoats";
import MyDocks from "../components/MyDocks/MyDocks";
import MyExperiences from "../components/MyExperiences/MyExperiences";
import ProtectedRoutes from "./ProtectedRoutes";
import "../App.css";
import PayoutHistory from "../components/PayoutHistory/PayoutHistory";
import MyProfile from "../components/MyProfile/MyProfile";
import EditProfile from "../components/EditProfile/EditProfile";
import AddNewExperiences from "../components/AddNewExperiences/AddNewExperiences";
import AddNewDocks from "../components/AddNewDocks/AddNewDocks";

// Reter side compunents start
import HomeRenter from "../components/RenterModule/HomePageRenterSide/HomeRenter";
import BoatsRenter from "../components/RenterModule/BoatsRenter/BoatsRenter";
import BoatsDetails from "../components/RenterModule/BoatsDetails/BoatsDetails";
import ExperiencesRenter from "../components/RenterModule/ExperiencesRenter/ExperiencesRenter";
import DocksRenter from "../components/RenterModule/DocksRenter/DocksRenter";
import MessagesRenter from "../components/RenterModule/MessagesRenter/MessagesRenter";
import MyProfileRenter from "../components/RenterModule/MyDashboard/MyProfileRenter/MyProfileRenter";
import MyTripsBoats from "../components/RenterModule/MyDashboard/MyTripsBoats/MyTripsBoats";
import MyTripsBoatsDetails from "../components/RenterModule/MyDashboard/MyTripsBoatsDetails/MyTripsBoatsDetails";
import MyTripsBoatsInspection from "../components/RenterModule/MyDashboard/MyTripsBoatsInspection/MyTripsBoatsInspection";
import RenterFavorites from "../components/RenterModule/MyDashboard/RenterFavorites/RenterFavorites";
import RenterPayments from "../components/RenterModule/MyDashboard/RenterPayments/RenterPayments";
import RenterAddNewPayments from "../components/RenterModule/MyDashboard/RenterAddNewPayments/RenterAddNewPayments";
import RenterNotificationSettings from "../components/RenterModule/MyDashboard/RenterNotificationSettings/RenterNotificationSettings";
import RenterBoatsBooking from "../components/RenterModule/BoatsRenter/RenterBoatsBooking/RenterBoatsBooking";
import RenterBoatsBookingStepTwo from "../components/RenterModule/BoatsRenter/RenterBoatsBooking/RenterBoatsBookingStepTwo/RenterBoatsBookingStepTwo";
import EditProfileRenter from "../components/RenterModule/EditProfileRenter/EditProfileRenter";
import RenterBoatsBookingStepThree from "../components/RenterModule/BoatsRenter/RenterBoatsBooking/RenterBoatsBookingStepThree/RenterBoatsBookingStepThree";
import DocksDetails from "../components/RenterModule/DocksRenter/DocksDetails/DocksDetails";
import RenterDocksBookingStepOne from "../components/RenterModule/DocksRenter/RenterDocksBooking/RenterDocksBookingStepOne/RenterDocksBookingStepOne";
// import RenterDocksBookingStepTwo from "../components/RenterModule/DocksRenter/RenterDocksBooking/RenterDocksBookingStepTwo/RenterDocksBookingStepTwo";
// import RenterDocksBookingStepThree from "../components/RenterModule/DocksRenter/RenterDocksBooking/RenterDocksBookingStepThree/RenterDocksBookingStepThree";
// import RenterDocksBookingStepFour from "../components/RenterModule/DocksRenter/RenterDocksBooking/RenterDocksBookingStepFour/RenterDocksBookingStepFour";
// import RenterDocksBookingStepFive from "../components/RenterModule/DocksRenter/RenterDocksBooking/RenterDocksBookingStepFive/RenterDocksBookingStepFive";
import DocksBookingDetails from "../components/RenterModule/DocksRenter/DocksBookingDetails/DocksBookingDetails";
import ExperienceDetails from "../components/RenterModule/ExperiencesRenter/ExperienceDetails/ExperienceDetails";
import ExperiencesBookingStepOne from "../components/RenterModule/ExperiencesRenter/ExperiencesBooking/ExperiencesBookingStepOne/ExperiencesBookingStepOne";
// import ExperiencesBookingStepTwo from "../components/RenterModule/ExperiencesRenter/ExperiencesBooking/ExperiencesBookingStepTwo/ExperiencesBookingStepTwo";
import ExperiencesBookingStepThree from "../components/RenterModule/ExperiencesRenter/ExperiencesBooking/ExperiencesBookingStepThree/ExperiencesBookingStepThree";
import ExperienceDetailsAbout from "../components/RenterModule/ExperiencesRenter/ExperienceDetails/ExperienceDetailsAbout/ExperienceDetailsAbout";
import BoatsDetailsOwner from "../components/MyBoats/BoatsDetailsOwner/BoatsDetailsOwner";
import Notifications from "../components/Notifications/Notifications";
import ExperiencesDetailsOwner from "../components/MyExperiences/ExperiencesDetailsOwner/ExperiencesDetailsOwner";
import MydocksDetailsOwner from "../components/MyDocks/MydocksDetailsOwner/MydocksDetailsOwner";
import EditDockDetailOwner from "../components/MyDocks/MydocksDetailsOwner/MydocksDetailsOwnerPages/EditDockDetailOwner";
import EditDockFeaturesOwner from "../components/MyDocks/MydocksDetailsOwner/MydocksDetailsOwnerPages/EditDockFeaturesOwner";
import EditDockPicturesOwner from "../components/MyDocks/MydocksDetailsOwner/MydocksDetailsOwnerPages/EditDockPicturesOwner";
import EditDockAvailabiltyOwner from "../components/MyDocks/MydocksDetailsOwner/EditDockAvailabiltyOwner";
// import BoatsDetailsOwner from "../components/RenterModule/BoatsDetails/BoatsDetailsOwner/BoatsDetailsOwner";
// end retnter

const My404Component = () => {
  return (
    <>
      {/* <h3>Something Went Wrong</h3> */}
      <h1 className="_404">404 - Not found</h1>
    </>
  );
};
function TmboRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeRenter />} />
          <Route path="/boats-renter" element={<BoatsRenter />} />
          <Route path="/boat-detail/:id" element={<BoatsDetails />} />
          <Route path="/experiences" element={<ExperiencesRenter />} />
          <Route
            path="/experience-details/:id"
            element={<ExperienceDetails />}
          />
          <Route
            path="/experience-booking/:id"
            element={<ExperiencesBookingStepOne />}
          />

          <Route
            path="/experience-booking-one"
            element={<ExperiencesBookingStepOne />}
          />
          {/* <Route
            path="/experience-booking-two"
            element={<ExperiencesBookingStepTwo />}
          /> */}
          <Route
            path="/experience-booking-three"
            element={<ExperiencesBookingStepThree />}
          />

          {/* End Experience Mudule */}
          <Route path="/docks" element={<DocksRenter />} />
          <Route path="/renter-messages" element={<MessagesRenter />} />
          <Route path="/profile-renter" element={<MyProfileRenter />} />
          <Route path="/trip-boats" element={<MyTripsBoats />} />
          <Route path="/trip-boats-detail" element={<MyTripsBoatsDetails />} />
          <Route
            path="/trip-boats-inspection"
            element={<MyTripsBoatsInspection />}
          />
          <Route path="/favorites" element={<RenterFavorites />} />
          <Route path="/payments" element={<RenterPayments />} />
          <Route path="/addnew-payments" element={<RenterAddNewPayments />} />
          <Route
            path="/notification-settings"
            element={<RenterNotificationSettings />}
          />
          <Route path="/boats-booking/:id" element={<RenterBoatsBooking />} />
          <Route
            path="/boats-booking-two"
            element={<RenterBoatsBookingStepTwo />}
          />
          <Route
            path="/boats-booking-three"
            element={<RenterBoatsBookingStepThree />}
          />
          <Route path="/edit-profile-renter" element={<EditProfileRenter />} />
          <Route path="/docks-detail/:id" element={<DocksDetails />} />
          <Route
            path="/docks-booking/:id"
            element={<RenterDocksBookingStepOne />}
          />
          <Route path="/edit-dock-detail" element={<EditDockDetailOwner/>}></Route>
          <Route path="/edit-dock-feature" element={<EditDockFeaturesOwner/>}></Route>
          <Route path="/edit-dock-pictures" element={<EditDockPicturesOwner/>}></Route>
          <Route path="/edit-dock-availability" element={<EditDockAvailabiltyOwner/>}></Route>
          {/* <Route
            path="/docks-booking-two"
            element={<RenterDocksBookingStepTwo />}
          />
          <Route
            path="/docks-booking-three"
            element={<RenterDocksBookingStepThree />}
          /> */}
          {/* <Route
            path="/docks-booking-four"
            element={<RenterDocksBookingStepFour />}
          /> */}
          {/* <Route
            path="/docks-booking-five"
            element={<RenterDocksBookingStepFive />}
          /> */}
          <Route
            path="/docks-booking-details"
            element={<DocksBookingDetails />}
          />

          <Route path="/docks" element={<DocksRenter />} />
          <Route path="/renter-messages" element={<MessagesRenter />} />
          {/* <Route path="/profile" element={<MyProfileRenter />} /> */}
          <Route path="/trip-boats" element={<MyTripsBoats />} />
          <Route path="/trip-boats-detail" element={<MyTripsBoatsDetails />} />

          {/* New pages Path end  */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          {/* Protected Routes */}
          <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/boats" element={<MyBoats />} />
            <Route path="/addnewboats" element={<AddNewBoats />} />
            <Route path="/addnewExperiences" element={<AddNewExperiences />} />
            <Route path="/add-new-docks" element={<AddNewDocks />} />
            <Route path="/bookings/boats" element={<Boats />} />
            <Route path="/bookings/experiences" element={<Experiences />} />
            <Route path="/bookings/docks" element={<Docks />} />
            <Route path="/changepassword" element={<ChangePassword />} />
            <Route
              path="/bookings/boats/more-details"
              element={<BoatsDetail />}
            />
            {/* <Route path="/boats-details-owner" element={<BoatsDetailsOwner />} /> */}
            <Route
              path="/boats-details-owner"
              element={<BoatsDetailsOwner />}
            />
            <Route path="/notifications" element={<Notifications />} />
            <Route
              path="/experience-details-owner"
              element={<ExperiencesDetailsOwner />}
            />
            <Route
              path="/docks-details-owner"
              element={<MydocksDetailsOwner />}
            />

            <Route path="/my-experiences" element={<MyExperiences />} />
            <Route path="/my-docks" element={<MyDocks />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/payout-history" element={<PayoutHistory />} />
            <Route path="/profile" element={<MyProfile />} />
            <Route path="/edit-profile" element={<EditProfile />} />
          </Route>
          {/* Renter routes start  */}

          {/* Renter routes end  */}
          <Route path="*" element={<My404Component />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default TmboRoutes;
