import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

import { userLoginReducer } from "./reducers/userReducer";
import { userSignUpReducer } from "./reducers/signUpReducer";
import { forgotPasswordReducer } from "./reducers/forgotPasswordReducer";
import { changePasswordReducer } from "./reducers/changePasswordReducer";
import { dropDownReducer } from "./reducers/dropDownReducer";
import { experienceDropdownReducer } from "./reducers/createExperienceReducers/experienceDropdownReducer";
import { createExperienceReducer } from "./reducers/createExperienceReducers/createExperienceReducer";
import { createBoatReducer } from "./reducers/createBoatReducers/createBoatReducer";
import { deleteImageReducer } from "./reducers/DeleteImageReducer/DeleteImageReducer";
import { getBoatListReducer } from "./reducers/createBoatReducers/GetBoatLists/GetBoatListReducer";
import { createDockReducer } from "./reducers/createDockReducers/createDockReducer";
import { dockDropDownReducer } from "./reducers/createDockReducers/dockDropdwnReducer";
import { experienceRenterReducer } from "./reducers/RenterModuleReducer/ExperienceRenterReducer/experienceRenterReducer";
import { boatRenterReducer } from "./reducers/RenterModuleReducer/BoatRenterReducer/boatRenterReducer";
import { dockRenterReducer } from "./reducers/RenterModuleReducer/DockRenterReducer/dockRenterReducer";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userSignUp: userSignUpReducer,
  forgotPassword: forgotPasswordReducer,
  changePassword: changePasswordReducer,
  dropDown: dropDownReducer,
  expDropdown: experienceDropdownReducer,
  createBoatReducer: createBoatReducer,
  createExperienceReducer: createExperienceReducer,
  deleteImageReducer: deleteImageReducer,
  getBoatListReducer: getBoatListReducer,
  createDockReducer: createDockReducer,
  dockDropDownReducer: dockDropDownReducer,

  // Renter Reducers
  experienceRenterReducer: experienceRenterReducer,
  boatRenterReducer: boatRenterReducer,
  dockRenterReducer: dockRenterReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const dropDownInfoFromStorage = localStorage.getItem("dropDownInfo")
  ? JSON.parse(localStorage.getItem("dropDownInfo"))
  : null;

const experienceDropDownInfoFromStorage = localStorage.getItem(
  "expDropDownInfo"
)
  ? JSON.parse(localStorage.getItem("expDropDownInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  dropDown: { dropDownInfo: dropDownInfoFromStorage },
  expDropdown: { expDropDownInfo: experienceDropDownInfoFromStorage },
};

const middleWare = [thunk, logger];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
