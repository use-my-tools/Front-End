import axios from "axios";

export const GET_ERRORS = "GET_ERRORS";
export const LOADING = "LOADING";
export const ADD_TOOL_SUCCESS = "ADD_TOOL_SUCCESS";
export const ADD_TOOL_FAIL = "ADD_TOOL_FAIL";

export const addToolsAction = newpost => {
  //dispatch(setLoading());
  return {
    type: ADD_TOOL_SUCCESS,
    payload: newpost
  };
};

export const setLoading = () => {
  return {
    type: LOADING
  };
};
