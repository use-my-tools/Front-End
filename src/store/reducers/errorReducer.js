import { GET_ERRORS } from "../actions/toolsAction";

const initialState = {
  errors: null
};

export default function errorReducers(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        ...state,
        errors: action.payload
      };
    default:
      return state;
  }
}
