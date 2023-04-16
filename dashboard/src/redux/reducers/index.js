import { combineReducers } from "redux";
import { profileReducers } from "./ProfileReducers";
const reducers = combineReducers({
  allProfiles: profileReducers,
});
export default reducers;
