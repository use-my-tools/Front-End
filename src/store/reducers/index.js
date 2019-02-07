import { combineReducers } from "redux";
import toolsReducer from "./toolsReducer";
import authReducer from "./authReducer";
import errorReducers from "./errorReducer";
export default combineReducers({
  toolsReducer: toolsReducer,
  auth: authReducer,
  errors: errorReducers
});
