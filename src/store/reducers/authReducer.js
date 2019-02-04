import { USER_LOADING, SET_CURRENT_USER } from "../actions/authAction";
const isEmpty = require("is-empty");

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false,
  loggedinuser: {}
};
export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload.decoded),
        user: action.payload.decoded,
        loading: false,
        loggedinuser: action.payload.data
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
