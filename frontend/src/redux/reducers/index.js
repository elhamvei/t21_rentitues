import { ACTION_STRING } from "../actions/actionString";
import { combineReducers } from "redux";

import authReducer from "./auth";
import listApplianceReducer from "./listAppliance";
import storage from "redux-persist/lib/storage";

const reducers = combineReducers({
  auth: authReducer,
  listAppliance: listApplianceReducer,
});

const rootReducer = (state, action) => {
  const { logout } = ACTION_STRING;
  if (action.type === logout) {
    storage.removeItem("persist:root");
    state = undefined;
  }
  return reducers(state, action);
};

export default rootReducer;
