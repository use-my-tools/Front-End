import React, { Component } from "react";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBBadge
} from "mdbreact";

import tool10 from "../../assets/tool10.jpg";
import PaginationPage from "./PaginationPage";
import AddProductPage from "./AddProductPage";
import {
  toggleModal,
  clearInputsAction
} from "../../store/actions/toolsAction";
import {
  FloatingMenu,
  MainButton,
  ChildButton
} from "react-floating-button-menu";
import MdAdd from "@material-ui/icons/Add";
import MdClose from "@material-ui/icons/Clear";
//import MdFavorite from "@material-ui/icons/MdFavorite";

const ManageToolStyle = styled.div`
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
  img {
    max-width: 100%;
  }
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .card {
      min-height: 340px;
      max-height: 300px;
    }
  }
  .add-card {
    box-sizing: border-box;
  }
  .floating-btn {
    position: fixed;
    bottom: 30px;
    right: 45px;
    z-index: 99999;
  }
`;

class ManageToolPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  addTool = () => {
    this.props.toggleModal();
    this.props.clearInputsAction();
  };
  render() {
    const { tools, toggleModal, modal } = this.props;
    return (
      <ManageToolStyle>
        <PaginationPage className="pagination float-right" />
        <FloatingMenu
          slideSpeed={500}
          direction="up"
          spacing={8}
          isOpen={this.state.isOpen}
          className="floating-btn"
        >
          <MainButton
            iconResting={<MdAdd style={{ fontSize: 20 }} nativeColor="white" />}
            iconActive={
              <MdClose style={{ fontSize: 20 }} nativeColor="white" />
            }
            backgroundColor="#0070F7"
            onClick={() => this.setState({ isOpen: !this.state.isOpen })}
            size={56}
          />
          <ChildButton
            icon={<i className="fas fa-plus" />}
            backgroundColor="white"
            size={40}
            onClick={this.addTool}
          />
        </FloatingMenu>
        <AddProductPage toggle={toggleModal} modal={modal} />
        {/* cards */}
        <MDBRow>
          <div className="container">
            {/* when posting items is being display here for listsssss */}
            {tools &&
              tools.map(tool => {
                return (
                  <MDBCol
                    md="6"
                    sm="12"
                    lg="4"
                    className="col-md-4 mb-4 card"
                    key={tool.id}
                  >
                    <Link
                      to={`/tools/${tool.id}`}
                      style={{ cursor: "pointer" }}
                    >
                      <MDBCard className="align-items-center">
                        <MDBCardImage
                          src={
                            !tool.images.length ? tool10 : tool.images[0].url
                          }
                          top
                          alt="sample photo"
                          className="card-img-top"
                          overlay="white-slight"
                        />
                        <MDBCardBody className="text-center">
                          <span href="#!" className="grey-text card-subtitle">
                            <h5>Sheet Finishing Sander</h5>
                          </span>
                          <h5>
                            <strong>
                              <span
                                href="#!"
                                className="dark-grey-text card-title"
                              >
                                1/3-Sheet Finishing Sander (6894)
                                {tool.id % 2 === 0 ? (
                                  <MDBBadge pill color="primary">
                                    BEST
                                  </MDBBadge>
                                ) : (
                                  <MDBBadge pill color="danger">
                                    NEW
                                  </MDBBadge>
                                )}
                              </span>
                            </strong>
                          </h5>
                          <h4 className="font-weight-bold blue-text">
                            <strong>219$</strong>
                          </h4>
                          <div>
                            {tool.isAvailable ? (
                              <MDBBadge pill>AVAILABLE</MDBBadge>
                            ) : (
                              <MDBBadge pill color="danger">
                                NOT AVAILABLE
                              </MDBBadge>
                            )}
                          </div>
                        </MDBCardBody>
                      </MDBCard>
                    </Link>
                  </MDBCol>
                );
              })}
          </div>
        </MDBRow>
      </ManageToolStyle>
    );
  }
}

const mapStateToProps = state => ({
  tools: state.toolsReducer.tools,
  modal: state.toolsReducer.modal
});

export default connect(
  mapStateToProps,
  { toggleModal, clearInputsAction }
)(withRouter(ManageToolPage));
