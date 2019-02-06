import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
// import { loadState, saveState } from "../localstorage/index";
// import throttle from "lodash/throttle";

const middleware = [thunk];
//const persistedState = loadState();

const store = createStore(
  rootReducer,
  //persistedState,
  compose(
    applyMiddleware(...middleware)
    //    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

// store.subscribe(
//   throttle(() => {
//     saveState({
//       d: store.getState().toolsReducer.tools
//     });
//   }, 1000)
// );

export default store;
