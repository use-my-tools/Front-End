import { LOADING, ADD_TOOL_SUCCESS } from "../actions/toolsAction";

const initialState = {
  tools: [],
  loading: false,
  error: ""
};

export default function toolsReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true
      };
    case ADD_TOOL_SUCCESS:
      return {
        ...state,
        loading: false,
        tools: [...state.tools, action.payload]
      };
    default:
      return state;
  }
}
