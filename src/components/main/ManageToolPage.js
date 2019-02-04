import React from "react";
import styled from "styled-components";
import { Route, withRouter } from "react-router-dom";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBBadge
} from "mdbreact";

import tool1 from "../../assets/tool1.jpg";
import tool2 from "../../assets/tool2.jpg";
import tool3 from "../../assets/tool3.jpg";
import tool4 from "../../assets/tool4.jpg";
// import tool5 from "../../assets/tool5.jpg";
// import tool6 from "../../assets/tool6.jpg";
// import tool7 from "../../assets/tool7.jpg";
// import tool8 from "../../assets/tool8.jpg";
// import tool9 from "../../assets/tool9.jpg";
// import tool10 from "../../assets/tool10.jpg";
import PaginationPage from "./PaginationPage";
import SingleItemPage from "./SingleItemPage";
const ManageToolStyle = styled.div`
  .pagination {
    margin-top: 100px;
  }
  .add-btn {
    padding: 40px 0 10px 0;
    margin-left: -15px;
    button {
      border-radius: 50%;
      outline: none;
      cursor: pointer;
    }
    p {
      padding-top: 20px;
    }
  }
`;

const ManageToolPage = ({ history, match }) => {
  return (
    <ManageToolStyle>
      <MDBCol className="col-md-4 mb-4">
        <MDBCard className="align-items-center add-btn">
          <button
            onClick={() => history.push("/addtools")}
            className="roundedbtn btn-floating btn-deep-purple btn-lg"
          >
            <i className="fas fa-plus" />
          </button>
          <p>ADD TOOL</p>
        </MDBCard>
      </MDBCol>
      {/* cards */}
      <MDBRow>
        <MDBCol md="6" sm="12" lg="4" md="12" className="col-md-4 mb-4">
          <MDBCard className="align-items-center">
            <MDBCardImage
              src={tool1}
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody className="text-center">
              <a href="#!" className="grey-text">
                <h5>hammer drill</h5>
              </a>
              <h5>
                <strong>
                  <a href="#!" className="dark-grey-text">
                    1/2 hammer drill (6929){" "}
                    <MDBBadge pill color="danger">
                      NEW
                    </MDBBadge>
                  </a>
                </strong>
              </h5>
              <h4 className="font-weight-bold blue-text">
                <strong>120$</strong>
              </h4>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="6" sm="12" lg="4" className="col-md-4 mb-4">
          <MDBCard className="align-items-center">
            <MDBCardImage
              src={tool2}
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody className="text-center">
              <a href="#!" className="grey-text">
                <h5>Router</h5>
              </a>
              <h5>
                <strong>
                  <a href="#!" className="dark-grey-text">
                    1 1/2 Router (1767)
                  </a>
                </strong>
              </h5>
              <h4 className="font-weight-bold blue-text">
                <strong>139$</strong>
              </h4>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="6" sm="12" lg="4" className="col-md-4 mb-4">
          <MDBCard className="align-items-center">
            <MDBCardImage
              src={tool3}
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody className="text-center">
              <a href="#!" className="grey-text">
                <h5>Brake Cylinder Hone</h5>
              </a>
              <h5>
                <strong>
                  <a href="#!" className="dark-grey-text">
                    1/2 " - 2-1/2" Brake Cylinder Hone{" "}
                    <MDBBadge pill color="primary">
                      BEST
                    </MDBBadge>
                  </a>
                </strong>
              </h5>
              <h4 className="font-weight-bold blue-text">
                <strong>99$</strong>
              </h4>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="6" sm="12" lg="4" className="col-md-4 mb-4">
          <MDBCard className="align-items-center">
            <MDBCardImage
              src={tool4}
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody className="text-center">
              <a href="#!" className="grey-text">
                <h5>Sheet Finishing Sander</h5>
              </a>
              <h5>
                <strong>
                  <a href="#!" className="dark-grey-text">
                    1/3-Sheet Finishing Sander (6894)
                    <MDBBadge pill color="primary">
                      BEST
                    </MDBBadge>
                  </a>
                </strong>
              </h5>
              <h4 className="font-weight-bold blue-text">
                <strong>219$</strong>
              </h4>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        {/* when posting items is being display here for listsssss */}
        {

        }
      </MDBRow>
      <PaginationPage className="pagination" />
      <Route path="/tool/:id" component={SingleItemPage} />
    </ManageToolStyle>
  );
};

export default withRouter(ManageToolPage);
const mapStateToProps = state => ({
    tools: state.toolsReducer.tools
});

export default connect(
mapStateToProps,
)(ManageToolPage);