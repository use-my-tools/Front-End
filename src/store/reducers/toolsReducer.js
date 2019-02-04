import {
  GET_TOOL_SUCCESS,
  LOADING,
  ADD_TOOL_SUCCESS,
  HANDLE_CHANGE,
  CLEAR_TOOLINPUTS,
  HANDLE_UPDATE,
  TOGGLE_MODAL,
  // SUBMIT_UPDATED,
  UPLOAD_IMAGE
} from "../actions/toolsAction";

const initialState = {
  tools: [],
  toolinput: {
    name: "",
    brand: "",
    category: "",
    dailyCost: "",
    address: "",
    owner_id: "",
    description: "",
    deposit: ""
  },
  loading: false,
  modal: false,
  currentToolId: null,
  isUpdating: false
};
//images need id
export default function toolsReducer(state = initialState, action) {
  switch (action.type) {
    case HANDLE_CHANGE:
      return {
        ...state,
        toolinput: {
          ...state.toolinput,
          [action.e.target.name]: action.e.target.value
        }
      };
    case CLEAR_TOOLINPUTS:
      return {
        ...state,
        toolinput: {
          name: "",
          brand: "",
          category: "",
          dailyCost: "",
          address: "",
          owner_id: "",
          description: "",
          deposit: "",
          isAvailable: 1,
          rating: 0
        },
        currentToolId: null,
        isUpdating: false
      };
    case LOADING:
      return {
        ...state,
        loading: true
      };
    case TOGGLE_MODAL:
      return {
        ...state,
        modal: !state.modal
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
        tools: action.data,
        isUpdating: false
      };
    // case SUBMIT_UPDATED:
    //   return {
    //     ...state,
    //     loading: false,
    //     toolinput: {
    //       name: state.toolinput.name,
    //       brand: state.toolinput.brand,
    //       category: state.toolinput.category,
    //       dailyCost: state.toolinput.dailyCost,
    //       address: state.toolinput.address,
    //       owner_id: state.toolinput.owner_id,
    //       description: state.toolinput.description,
    //       deposit: state.toolinput.deposit,
    //       isAvailable: state.toolinput.isAvailable,
    //       rating: state.toolinput.rating
    //     },
    //     isUpdating: false
    //   };
    case HANDLE_UPDATE:
      return {
        ...state,
        loading: false,
        toolinput: {
          name: action.tool.name,
          brand: action.tool.brand,
          category: action.tool.category,
          dailyCost: action.tool.dailyCost,
          address: action.tool.address,
          owner_id: action.tool.owner_id,
          description: action.tool.description,
          deposit: action.tool.deposit,
          isAvailable: action.tool.isAvailable,
          rating: action.tool.rating
        },
        currentToolId: action.tool.id,
        isUpdating: true
      };
    case UPLOAD_IMAGE:
      return {
        ...state,
        loading: false,
        tools: action.data
      };
    default:
      return state;
  }
}
