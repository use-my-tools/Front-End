import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import InventoryItem from "./InventoryItem";
import PaginationPage from "./PaginationPage";

const Main = ({ match }) => {
  return (
    <React.Fragment>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="4">
            <p>left section</p>
          </MDBCol>
          {/* right section */}
          <MDBCol md="8">
            <InventoryItem />
            <PaginationPage />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </React.Fragment>
  );
};

export default Main;
