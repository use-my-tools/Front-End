import {
  GET_TOOL_SUCCESS,
  LOADING,
  ADD_TOOL_SUCCESS
} from "../actions/toolsAction";

const initialState = {
  tools: [],
  loading: false
};

export default function toolsReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_TOOL_SUCCESS:
      return {
        ...state,
        loading: false,
        tools: action.data
      };
    case ADD_TOOL_SUCCESS:
      return {
        ...state,
        loading: false,
        tools: action.data
      };
    default:
      return state;
  }
}
