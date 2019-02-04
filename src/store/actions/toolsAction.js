import axios from "axios";
import Alert from "react-s-alert";

export const GET_ERRORS = "GET_ERRORS";
export const LOADING = "LOADING";

export const GET_TOOL_SUCCESS = "GET_TOOL_SUCCESS";
export const ADD_TOOL_SUCCESS = "ADD_TOOL_SUCCESS";

///form CRUD met
export const HANDLE_CHANGE = "HANDLE_CHANGE";
export const CLEAR_TOOLINPUTS = "CLEAR_TOOLINPUTS";
export const HANDLE_UPDATE = "HANDLE_UPDATE";
export const TOGGLE_MODAL = "TOGGLE_MODAL";

const URL = `https://tools-backend.herokuapp.com/api/tools`;

export const getToolsAction = () => dispatch => {
  // dispatch(setLoading());
  axios.get(`${URL}`).then(({ data: { data } }) =>
    dispatch({
      type: GET_TOOL_SUCCESS,
      data
    })
  );
  // .catch(err => console.log(err));
};
export const addToolsAction = newpost => dispatch => {
  //  dispatch(setLoading());
  axios
    .post(`${URL}`, newpost)
    .then(({ data: { data } }) =>
      dispatch({
        type: ADD_TOOL_SUCCESS,
        data
      })
    )
    .then(() => Alert.success("Successfully added Tool"));

  // .catch(err => console.log(err));
};

//CRUD form actions
export const handleUpdateAction = tool => {
  return {
    type: HANDLE_UPDATE,
    tool
  };
};
export const toggleModal = () => {
  return {
    type: TOGGLE_MODAL
  };
};

export const clearInputsAction = () => {
  return {
    type: CLEAR_TOOLINPUTS
  };
};
export const handleChange = e => {
  e.persist();
  return {
    type: HANDLE_CHANGE,
    e
  };
};
export const setLoading = () => {
  return {
    type: LOADING
  };
};