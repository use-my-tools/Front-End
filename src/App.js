import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./container/LoginPage";
import NavbarPage from "./components/NavbarPage";
import InventoryItem from "./components/main/InventoryItem";
import PricingPage from "./components/main/PricingPage";
import ContactPage from "./components/main/ContactPage";
import { MDBContainer } from "mdbreact";
import FooterPage from "./components/FooterPage";
import Alert from "react-s-alert";
import { setCurrentUser, logoutUser } from "./store/actions/authAction";
import store from "./store/store";
import setAuthToken from "./utils/setAuthToken";
import jwt_decode from "jwt-decode";
import Register from "./container/Register";
import Landing from "./components/main/Landing";
import PrivateRoute from "./components/PrivateRoute";
import SingleItemPage from "./components/main/SingleItemPage";
import styled from "styled-components";

const AppStyle = styled.div``;

//check for token to keep user logged in
if (localStorage.jwtToken) {
  //Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  //Decode token and get user info and exp
  const decoded = jwt_decode(token);
  //set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  //check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "/login";
  }
}

const NoMatchFound = () => <h1>No Match Found</h1>;
class App extends Component {
  render() {
    return (
      <AppStyle>
        <NavbarPage />
        <MDBContainer className="main">
          <Switch>
            <Route path="/pricing" component={PricingPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={LoginPage} />
            <Route path="/tools/:id" component={SingleItemPage} />
            {/* created HOC for private route and have check inside navbar to hide dashboard if it's not authenticated */}
            <PrivateRoute path="/dashboard" component={InventoryItem} />
            {/* <Route path="/" component={Landing} /> */}
            <Route component={NoMatchFound} />
          </Switch>
        </MDBContainer>
        {/* <FooterPage /> */}
        <Alert
          //stack={{ limit: 3 }}
          stack={{ limit: 3, spacing: 50 }}
          position="top-right"
          effect="slide"
        />
      </AppStyle>
    );
  }
}

export default App;
