import { USER_LOADING, SET_CURRENT_USER } from "../actions/authAction";
const isEmpty = require("is-empty");

const initialState = {
  isAuthenticated: true,
  user: {},
  loading: false
};
export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload.decoded),
        user: action.payload.decoded,
        loading: false
      };
    case USER_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
