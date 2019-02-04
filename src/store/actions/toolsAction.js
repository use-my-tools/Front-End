import axios from "axios";
import Alert from "react-s-alert";

export const GET_ERRORS = "GET_ERRORS";
export const LOADING = "LOADING";
export const GET_TOOL_SUCCESS = "GET_TOOL_SUCCESS";
export const ADD_TOOL_SUCCESS = "ADD_TOOL_SUCCESS";

const URL = `https://tools-backend.herokuapp.com/api/tools`;

export const getToolsAction = () => dispatch => {
  dispatch(setLoading());
  axios
    .get(`${URL}`)
    .then(({ data: { data } }) =>
      dispatch({
        type: GET_TOOL_SUCCESS,
        tools: data
      })
    )
    .catch(err => {
      if (err) {
        Alert.error(err);
      }
      dispatch({
        type: GET_ERRORS,
        payload: err
      });
    });
};
export const addToolsAction = newpost => dispatch => {
  dispatch(setLoading());
  axios
    .post(`${URL}`, newpost)
    .then(({ data: { data } }) =>
      dispatch({
        type: ADD_TOOL_SUCCESS,
        tools: data
      })
    )
    .catch(err => {
      if (err) {
        Alert.error(err);
      }
      dispatch({
        type: GET_ERRORS,
        payload: err
      });
    });
};

export const setLoading = () => {
  return {
    type: LOADING
  };
};
