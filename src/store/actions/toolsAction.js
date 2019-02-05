import axios from "axios";
import Alert from "react-s-alert";
import FormData from "form-data";
export const GET_ERRORS = "GET_ERRORS";
export const LOADING = "LOADING";

export const GET_TOOL_SUCCESS = "GET_TOOL_SUCCESS";
export const ADD_TOOL_SUCCESS = "ADD_TOOL_SUCCESS";
export const SUBMIT_UPDATED = "SUBMIT_UPDATED";

///form CRUD met
export const HANDLE_CHANGE = "HANDLE_CHANGE";
export const CLEAR_TOOLINPUTS = "CLEAR_TOOLINPUTS";
export const HANDLE_UPDATE = "HANDLE_UPDATE";
export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const UPLOAD_IMAGE = "UPLOAD_IMAGE";
export const CANCEL_IMAGE = "CANCEL_IMAGE";

const URL = `https://tools-backend.herokuapp.com/api/tools`;
const IMAGE = `https://tools-backend.herokuapp.com/api/upload/image`;
export const getToolsAction = () => dispatch => {
  dispatch(setLoading());
  axios
    .get(`${URL}`)
    .then(({ data: { data, total, last_page, per_page, current_page } }) =>
      dispatch({
        type: GET_TOOL_SUCCESS,
        data,
        total,
        last_page,
        per_page,
        current_page
      })
    )
    .catch(err => console.log(err));
};
export const addToolsAction = newpost => dispatch => {
  dispatch(setLoading());
  axios
    .post(`${URL}`, newpost)
    .then(({ data: { data } }) =>
      dispatch({
        type: ADD_TOOL_SUCCESS,
        data
      })
    )
    .then(() => Alert.success("Successfully added Tool"))
    .catch(err => console.log(err));
};
export const uploadImageAction = (file, id) => dispatch => {
  if (!file) {
    Alert.error("Please provide an image");
    return;
  }
  dispatch(setLoading());
  const formData = new FormData();
  formData.append("image", file);
  formData.append("tool_id", id);
  axios
    .post(`${IMAGE}`, formData)
    .then(({ data: { data } }) =>
      dispatch({
        type: UPLOAD_IMAGE
      })
    )
    .then(() => Alert.success("Successfully uploaded Image"));
};
// .catch(err => {
//   if (err) {
//     err.response.data.message && Alert.error(err.response.data.message);
//     dispatch({
//       type: GET_ERRORS,
//       payload: err.response.data.message
//     });
//   }
// });
//};
export const cancelImage = () => {
  return {
    type: CANCEL_IMAGE
  };
};
//CRUD form actions
export const handleUpdateAction = tool => {
  return {
    type: HANDLE_UPDATE,
    tool
  };
};
// export const submitUpdatedAction = () => {
//   return {
//     type: SUBMIT_UPDATED
//   };
// };
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
