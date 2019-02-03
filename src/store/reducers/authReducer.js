import {
  USER_LOADING,
  SET_CURRENT_USER,
  REGISTER_SUCCESS
} from "../actions/authAction";

const isEmpty = require("is-empty");

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false
};
export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
        loading: false
      };
    case USER_LOADING:
      return {
        ...state,
        loading: true
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
