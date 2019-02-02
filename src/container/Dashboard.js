import React from "react";
import { MDBContainer } from "mdbreact";
import Main from "../components/main/Main";
import { Route } from "react-router-dom";

const Dashboard = ({ match }) => {
  console.log("this.props", match);
  return (
    <React.Fragment>
      <MDBContainer>
        <Route path={`${match.path}`} render={props => <Main {...props} />} />
      </MDBContainer>
    </React.Fragment>
  );
};

export default Dashboard;
