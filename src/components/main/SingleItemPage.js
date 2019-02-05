import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import {
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBBadge,
  MDBCardTitle,
  MDBCardText,
  MDBContainer,
  MDBRow,
  MDBBtn
} from "mdbreact";
import tool10 from "../../assets/tool10.jpg";
import { Link, withRouter } from "react-router-dom";
import {
  handleUpdateAction,
  toggleModal,
  clearInputsAction
} from "../../store/actions/toolsAction";

import AddImageModal from "../AddImageModal";

const ToolStyle = styled.div`
  .toolcard {
    margin-top: 50px;
  }
  .avatar {
    margin-left: auto;
  }
  .username {
    font-size: 16px;
  }
`;

class SingleItemPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadModal: false
    };
  }

  handleUpdate = tool => {
    this.props.handleUpdateAction(tool);
    this.props.history.push("/dashboard");
    this.props.toggleModal();
  };
  // uploadImage = () => {
  //   this.props.history.push("/dashboard");
  //   this._toggleModal();
  // };

  _toggleModal = () => {
    this.setState({
      uploadModal: !this.state.uploadModal
    });
  };

  render() {
    const { match, tools, history } = this.props;
    //find which id has been clicked
    if (!tools.length) {
      return (
        <h2 style={{ margin: "335px auto" }}>
          This item is not available right now{" "}
        </h2>
      );
    }
    const tool = tools.find(
      ({ id }) => parseInt(id) === parseInt(match.params.id)
    );
    return (
      <ToolStyle>
        <MDBContainer>
          <MDBRow>
            <MDBCol
              lg="6"
              md="6"
              className="col-md-6 mb-6 toolcard"
              key={tool.id}
            >
              <Link to={`/tools/${tool.id}`}>
                <MDBCard className="align-items-center">
                  <MDBCardImage
                    src={!tool.images.length ? tool10 : tool.images[0].url}
                    top
                    alt="sample photo"
                    overlay="white-slight"
                  />
                  <MDBCardBody className="text-center">
                    <span href="#!" className="grey-text">
                      <h5>Sheet Finishing Sander</h5>
                    </span>
                    <h5>
                      <strong>
                        <span href="#!" className="dark-grey-text">
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
                  </MDBCardBody>
                </MDBCard>
              </Link>
            </MDBCol>

            {/* rightside */}
            <MDBCard
              lg="6"
              md="6"
              className="card-body"
              style={{ marginTop: "3rem" }}
            >
              <img
                src={window.localStorage.getItem("image_url")}
                className="rounded-circle z-depth-0 avatar"
                style={{ height: "60px", width: "60px", padding: 0 }}
                alt="avatar"
              />
              <MDBCardTitle className="text-right mt-4 username">
                {window.localStorage.getItem("username")}
              </MDBCardTitle>

              <div className="text-right mt-4">
                {/* buttons go back and add */}
                <MDBBtn color="unique" onClick={() => history.goBack()}>
                  Back
                </MDBBtn>
                <MDBBtn onClick={() => this.handleUpdate(tool)}>
                  EDIT TOOl
                </MDBBtn>
                <AddImageModal
                  toggleModal={this._toggleModal}
                  uploadModal={this.state.uploadModal}
                  id={tool.id}
                />
                <MDBBtn onClick={this._toggleModal}>UPLOAD IMAGE</MDBBtn>
              </div>
            </MDBCard>
          </MDBRow>

          <MDBRow>
            <MDBCard className="card-body" style={{ marginTop: "1rem" }}>
              <MDBCardTitle>Location</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the panel title and make up
                the bulk of the panel's content.
              </MDBCardText>
            </MDBCard>
          </MDBRow>

          <MDBRow>
            <MDBCard className="card-body" style={{ marginTop: "1rem" }}>
              <MDBCardTitle>Notes</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the panel title and make up
                the bulk of the panel's content.
              </MDBCardText>
            </MDBCard>
          </MDBRow>

          <MDBRow>
            <MDBCard className="card-body" style={{ marginTop: "1rem" }}>
              <MDBCardTitle>Review</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the panel title and make up
                the bulk of the panel's content.
              </MDBCardText>
            </MDBCard>
          </MDBRow>
        </MDBContainer>
      </ToolStyle>
    );
  }
}

const mapStateToProps = state => ({
  tools: state.toolsReducer.tools
});

export default connect(
  mapStateToProps,
  { handleUpdateAction, toggleModal, clearInputsAction }
)(withRouter(SingleItemPage));
