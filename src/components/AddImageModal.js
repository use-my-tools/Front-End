import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { uploadImageAction } from "../store/actions/toolsAction";
import SpinnerPage from "./Spinner";
import { withRouter } from "react-router-dom";
import Alert from "react-s-alert";

import {
  MDBCard,
  MDBContainer,
  MDBRow,
  MDBBtn,
  MDBModal,
  MDBModalBody
} from "mdbreact";

const AddPageStyle = styled.div``;

class AddImageModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null
    };
  }
  fileChangedHandler = e => {
    const file = e.target.files[0];
    this.setState({ selectedFile: file });
  };
  _sendImage = () => {
    this.props.uploadImageAction(this.state.selectedFile, this.props.id);
    this.props.toggleModal();
    this.props.history.push("/dashboard");
  };
  _cancelUpload = () => {
    this.props.toggleModal();
    Alert.warning("Cancel Uploading Image");
  };
  render() {
    const { loading, isUploading, toggleModal, uploadModal } = this.props;
    return (
      <MDBContainer>
        <MDBModal isOpen={uploadModal} toggle={toggleModal}>
          <MDBModalBody style={{ display: "flex", justifyContent: "center" }}>
            <AddPageStyle>
              <MDBContainer>
                <MDBRow>
                  <MDBCard className="align-items-center card-addpage">
                    <h2>Photo</h2>
                    {loading ? (
                      <SpinnerPage />
                    ) : isUploading ? (
                      <img src={this.state.selectedFile} alt="" />
                    ) : (
                      <svg
                        width={100}
                        height={100}
                        viewBox="0 0 20 20"
                        xmlns={this.state.selectedFile}
                        className="no-image"
                      >
                        {" "}
                        <circle cx="16.1" cy="6.1" r="1.1" />{" "}
                        <rect
                          fill="none"
                          stroke="#000"
                          x="0.5"
                          y="2.5"
                          width={19}
                          height={15}
                        />{" "}
                        <polyline
                          fill="none"
                          stroke="#000"
                          strokeWidth="1.01"
                          points="4,13 8,9 13,14"
                        />{" "}
                        <polyline
                          fill="none"
                          stroke="#000"
                          strokeWidth="1.01"
                          points="11,12 12.5,10.5 16,14"
                        />
                      </svg>
                    )}
                    <span className="noimage-info">
                      {isUploading ? "Image added successfuly" : "No image yet"}
                    </span>
                    <input
                      placeholder="Upload Photo"
                      type="file"
                      className="form-control"
                      onChange={this.fileChangedHandler}
                      // value={toolinput.photo}
                    />
                    <div className="btn-group" style={{ margin: "20px 0" }}>
                      <MDBBtn
                        onClick={() => this._sendImage()}
                        style={{ zIndex: 1000 }}
                        color="deep-orange"
                      >
                        Upload
                      </MDBBtn>
                      <MDBBtn
                        style={{ marginLeft: 20, zIndex: 1000 }}
                        color="unique"
                        onClick={() => this._cancelUpload()}
                      >
                        Cancel
                      </MDBBtn>
                    </div>
                  </MDBCard>
                </MDBRow>
              </MDBContainer>
            </AddPageStyle>
          </MDBModalBody>
        </MDBModal>
      </MDBContainer>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.toolsReducer.loading,
  isUploading: state.toolsReducer.isUploading
});

export default connect(
  mapStateToProps,
  { uploadImageAction }
)(withRouter(AddImageModal));
