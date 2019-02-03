import { combineReducers } from "redux";
import toolsReducer from "./toolsReducer";
import authReducer from "./authReducer";
export default combineReducers({
  toolsReducer,
  authReducer
});
