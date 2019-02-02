import React from "react";
import Main from "../components/main/Main";
import { Route } from "react-router-dom";

const Dashboard = ({ match }) => {
  console.log("this.props", match);
  return (
    <React.Fragment>
      <Route path={`${match.path}`} render={props => <Main {...props} />} />
    </React.Fragment>
  );
};

export default Dashboard;
