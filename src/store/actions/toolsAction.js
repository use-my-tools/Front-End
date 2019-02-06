import axios from "axios";
import Alert from "react-s-alert";
import FormData from "form-data";
export const GET_ERRORS = "GET_ERRORS";
export const LOADING = "LOADING";

///form CRUD met
export const GET_TOOL_SUCCESS = "GET_TOOL_SUCCESS";
export const ADD_TOOL_SUCCESS = "ADD_TOOL_SUCCESS";
export const SUBMIT_UPDATED = "SUBMIT_UPDATED";
export const DELETE_SUCCESS = "DELETE_SUCCESS";

export const HANDLE_CHANGE = "HANDLE_CHANGE";
export const CLEAR_TOOLINPUTS = "CLEAR_TOOLINPUTS";
export const HANDLE_UPDATE = "HANDLE_UPDATE";
export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const UPLOAD_IMAGE = "UPLOAD_IMAGE";
export const GET_DATA_PAG = "GET_DATA_PAG";
export const POST_REVIEWS_SUCCESS = "POST_REVIEWS_SUCCESS";
export const GET_SINGLE_SUCCESS = "GET_SINGLE_SUCCESS";

const URL = `https://tools-backend.herokuapp.com/api/tools`;
const REVIEWS = `https://tools-backend.herokuapp.com/api/reviews`;
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
    .catch(err => {
      if (err) {
        err.response.data.message && Alert.error(err.response.data.message);
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data.message
        });
      }
    });
};
export const getToolsPagination = URLPagination => dispatch => {
  dispatch(setLoading());
  axios
    .get(`${URLPagination}`)
    .then(({ data: { data } }) =>
      dispatch({
        type: GET_DATA_PAG,
        data
      })
    )
    .catch(err => {
      if (err) {
        err.response.data.message && Alert.error(err.response.data.message);
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data.message
        });
      }
    });
};
export const addToolsAction = newpost => dispatch => {
  dispatch(setLoading());
  axios
    .post(`${URL}`, newpost)
    .then(res =>
      dispatch({
        type: ADD_TOOL_SUCCESS,
        data: res.data
      })
    )
    .then(() => Alert.success("Successfully added Tool"))
    .then(() => Alert.info("Check out your inventory to add image"))
    .catch(err => {
      if (err) {
        err.response.data.message && Alert.error(err.response.data.message);
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data.message
        });
      }
    });
};
export const addReviewsAction = reviews => dispatch => {
  console.log("reviews", reviews);

  dispatch(setLoading());
  axios
    .post(`${REVIEWS}`, reviews)
    .then(({ data: { data } }) =>
      dispatch({
        type: POST_REVIEWS_SUCCESS,
        data
      })
    )
    .then(() => Alert.success("Successfully added Review"))
    .catch(err => {
      if (err) {
        err.response.data.message && Alert.error(err.response.data.message);
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data.message
        });
      }
    });
};

export const deleteToolsAction = id => dispatch => {
  dispatch(setLoading());
  axios
    .delete(`${URL}/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_SUCCESS
      })
    )
    .then(() => Alert.success("Successfully deleted Tool"))
    .catch(err => {
      if (err) {
        err.response.data.message && Alert.error(err.response.data.message);
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data.message
        });
      }
    });
};
//bandaid fixed to reload page since we don't get the res back
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
    .then(res =>
      dispatch({
        type: UPLOAD_IMAGE,
        data: res.data
      })
    )
    .then(() => window.location.reload())
    .then(() => Alert.success("Successfully Uploaded Image"))
    .catch(err => {
      if (err) {
        err.response.data.message && Alert.error(err.response.data.message);
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data.message
        });
      }
    });
};
export const handleUpdateAction = tool => {
  return {
    type: HANDLE_UPDATE,
    tool
  };
};
export const submitUpdatedToolAction = (tool, id) => dispatch => {
  dispatch(setLoading());
  axios
    .put(`${URL}/${id}`, tool)
    .then(res =>
      dispatch({
        type: SUBMIT_UPDATED,
        data: res.data
      })
    )
    .then(() => Alert.success("Successfully Updated Tool"))
    .catch(err => {
      if (err) {
        err.response.data.message && Alert.error(err.response.data.message);
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data.message
        });
      }
    });
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
