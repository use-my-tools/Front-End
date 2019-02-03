import React, { Component } from "react";
import Dashboard from "./container/Dashboard";
import { Route, Switch } from "react-router-dom";
import SignupPage from "./container/SignupPage";
import LoginPage from "./container/LoginPage";
import NavbarPage from "./components/NavbarPage";
import InventoryItem from "./components/main/InventoryItem";
import PricingPage from "./components/main/PricingPage";
import ContactPage from "./components/main/ContactPage";
import { MDBContainer } from "mdbreact";
import FooterPage from "./components/FooterPage";
import AddProductPage from "./components/main/AddProductPage";
import Alert from "react-s-alert";

const NoMatchFound = () => <h1>No Match Found</h1>;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavbarPage />
        <MDBContainer>
          <Switch>
            <Route path="/inventory" component={InventoryItem} />
            <Route path="/pricing" component={PricingPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/addtools" component={AddProductPage} />
            <Route path="/register" component={SignupPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/" component={Dashboard} />
            <Route component={NoMatchFound} />
          </Switch>
        </MDBContainer>
        <FooterPage />
        <Alert
          //stack={{ limit: 3 }}
          stack={{ limit: 3, spacing: 50 }}
          position="top-right"
          effect="slide"
        />
      </React.Fragment>
    );
  }
}

export default App;
