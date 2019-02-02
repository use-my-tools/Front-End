import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
const AppWithRouter = withRouter(App);
const app = (
  <Provider store={store}>
    <Router>
      <AppWithRouter />
    </Router>
  </Provider>
);
ReactDOM.render(app, document.getElementById("root"));
