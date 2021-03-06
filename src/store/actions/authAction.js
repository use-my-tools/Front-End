import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import Alert from "react-s-alert";

export const GET_ERRORS = "GET_ERRORS";
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const USER_LOADING = "USER_LOADING";
export const FAIL_REGISTER = "FAIL_REGISTER";
const URL = `https://tools-backend.herokuapp.com/api/registration`;
export const registerUser = (userData, history) => dispatch => {
  dispatch(setUserLoading());
  axios
    .post(`${URL}/register`, userData)
    .then(res => history.push("/login"))
    .then(() => Alert.success("Successfully registered !"))
    .catch(err => {
      if (err) {
        err.response.data.message && Alert.error(err.response.data.message);
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data.message
        });
        dispatch(disableLoading());
      }
    });
};

export const loginUser = userData => dispatch => {
  dispatch(setUserLoading());
  axios
    .post(`${URL}/login`, userData)
    .then(res => {
      //Save to localStorage
      // Set token to localstorage
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      localStorage.setItem("username", res.data.username);
      localStorage.setItem("user_id", res.data.user_id);
      localStorage.setItem("image_url", res.data.image_url);
      // Set token to AUth header
      setAuthToken(token);
      //Decode token to get user data
      const decoded = jwt_decode(token);
      //Set current user
      dispatch(setCurrentUser(decoded));
    })

    .then(() =>
      Alert.success(`You are now logged in ! Hello ${userData.username}
    `)
    )
    .catch(err => {
      if (err) {
        err.response.data.message && Alert.error(err.response.data.message);
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data.message
        });
        dispatch(disableLoading());
      }
    });
};
// Set logged in user

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: {
      decoded
    }
  };
};
// stop loading when there's error
export const disableLoading = () => {
  return {
    type: FAIL_REGISTER
  };
};
// User Loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};
// Log user out
export const logoutUser = history => dispatch => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  //Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
  history.push("/login");
};
