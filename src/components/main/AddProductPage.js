import React, { Component } from "react";
import {
  MDBCard,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalFooter
} from "mdbreact";
import styled from "styled-components";
import { connect } from "react-redux";
import uuid from "uuid";
import {
  addToolsAction,
  clearInputsAction,
  handleChange,
  toggleModal,
  uploadImageAction,
  cancelImage
} from "../../store/actions/toolsAction";
import Alert from "react-s-alert";
import { withRouter } from "react-router-dom";
import SpinnerPage from "../Spinner";

const AddPageStyle = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Poppins:400,600");
  label {
    margin-top: 10px;
    text-align: left;
    width: 100%;
  }
  .card-addpage {
    padding: 40px;
  }
  h2 {
    text-align: left;
    width: 100%;
    font-weight: 300;
    font-size: 1.4rem;
    font-family: "Poppins", sans-serif;
  }
  .no-image {
    opacity: 0.5;
  }
  .noimage-info {
    opacity: 0.5;
    margin-bottom: 30px;
  }
  form {
    margin-top: 40px;
  }
`;
class AddProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: ""
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    const { name, brand, category } = this.props.toolinput;
    if (!name || !brand || !category) {
      Alert.error("All field are required");
      return;
    }
    this.addTools();
    this.props.clearInputsAction();
    this.props.toggleModal();
  };
  addTools = () => {
    const { toolinput } = this.props;
    const newpost = {
      name: toolinput.name,
      brand: toolinput.brand,
      category: toolinput.category,
      dailyCost: parseInt(toolinput.dailyCost),
      address: toolinput.address,
      owner_id: uuid(),
      description: toolinput.description,
      deposit: toolinput.deposit
    };
    this.props.addToolsAction(newpost);
  };
  fileChangedHandler = e => {
    // if (!this.state.selectedFile) return;
    const file = e.target.files[0];
    this.setState({ selectedFile: file });
  };

  render() {
    const {
      toggle,
      modal,
      toolinput,
      handleChange,
      isUpdating,
      uploadImageAction,
      loading,
      isUploading,
      cancelImage
    } = this.props;
    return (
      <>
        <MDBContainer>
          <MDBModal isOpen={modal} toggle={toggle}>
            {/* <MDBModalHeader toggle={toggle}>MDBModal title</MDBModalHeader> */}
            <MDBModalBody>
              <AddPageStyle>
                <MDBContainer>
                  <MDBRow>
                    <MDBCol md="12">
                      <form onSubmit={this.handleSubmit}>
                        <MDBCard className="align-items-center card-addpage">
                          <h2>{isUpdating ? "EDIT TOOLS" : "ADD ITEM"}</h2>
                          <label>Name</label>
                          <input
                            placeholder="name"
                            type="text"
                            className="form-control"
                            onChange={handleChange}
                            name="name"
                            value={toolinput.name}
                          />
                          <label>Brand</label>
                          <input
                            placeholder="brand"
                            type="text"
                            className="form-control"
                            onChange={handleChange}
                            name="brand"
                            value={toolinput.brand}
                          />
                          <label>Category</label>
                          <input
                            placeholder="category"
                            type="text"
                            className="form-control"
                            onChange={handleChange}
                            name="category"
                            value={toolinput.category}
                          />
                        </MDBCard>

                        <MDBCard className="align-items-center card-addpage">
                          <h2>Rental Agreement</h2>
                          <label>Price per day</label>
                          <input
                            placeholder="$"
                            type="text"
                            className="form-control"
                            onChange={handleChange}
                            name="dailyCost"
                            value={toolinput.dailyCost}
                          />
                          <label>Security Deposit</label>
                          <input
                            placeholder="$"
                            type="text"
                            className="form-control"
                            onChange={handleChange}
                            name="deposit"
                            value={toolinput.deposit}
                          />
                        </MDBCard>
                        <MDBCard className="align-items-center card-addpage">
                          <h2>Pick up location</h2>
                          <label>Address</label>
                          <input
                            placeholder="Enter the address"
                            type="text"
                            className="form-control"
                            onChange={handleChange}
                            name="address"
                            value={toolinput.address}
                          />
                        </MDBCard>
                        <MDBCard className="align-items-center card-addpage">
                          <h2>description</h2>
                          <textarea
                            placeholder="Enter any extra information about the tool here. You can also use this section to specify your preferred time for pickups"
                            type="text"
                            className="form-control"
                            onChange={handleChange}
                            name="description"
                            value={toolinput.description}
                            rows="5"
                          />
                        </MDBCard>
                        <MDBModalFooter>
                          <MDBBtn color="secondary" onClick={toggle}>
                            Close
                          </MDBBtn>
                          <MDBBtn color="primary" type="submit">
                            Save changes
                          </MDBBtn>
                        </MDBModalFooter>
                        {/* <MDBCard className="align-items-center card-addpage">
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
                            {isUploading
                              ? "Image added successfuly"
                              : "No image yet"}
                          </span>
                          <input
                            placeholder="Upload Photo"
                            type="file"
                            className="form-control"
                            onChange={this.fileChangedHandler}
                            // value={toolinput.photo}
                          />
                          <div
                            className="btn-group"
                            style={{ margin: "20px 0" }}
                          >
                            <MDBBtn
                              onClick={() =>
                                uploadImageAction(this.state.selectedFile)
                              }
                              style={{ zIndex: 1000 }}
                              color="deep-orange"
                            >
                              Upload
                            </MDBBtn>
                            <MDBBtn
                              style={{ marginLeft: 20, zIndex: 1000 }}
                              color="unique"
                              onClick={() => cancelImage()}
                            >
                              Cancel
                            </MDBBtn>
                          </div>
                        </MDBCard> */}
                      </form>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </AddPageStyle>
            </MDBModalBody>
          </MDBModal>
        </MDBContainer>
      </>
    );
  }
}
const mapStateToProps = state => ({
  tools: state.toolsReducer.tools,
  toolinput: state.toolsReducer.toolinput,
  isUpdating: state.toolsReducer.isUpdating,
  isUploading: state.toolsReducer.isUploading,
  loading: state.toolsReducer.loading
});
export default connect(
  mapStateToProps,
  {
    addToolsAction,
    clearInputsAction,
    handleChange,
    toggleModal,
    uploadImageAction,
    cancelImage
  }
)(withRouter(AddProductPage));
