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
  toggleModal
} from "../../store/actions/toolsAction";
import Alert from "react-s-alert";
import { withRouter } from "react-router-dom";

const AddPageStyle = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Poppins:400,600");
  label {
    margin-top: 10px;
    text-align: left;
    width: 100%;
  }
  .card-addpage {
    padding: 40px;
    margin: 0 auto;
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
  handleSubmit = e => {
    e.preventDefault();
    const { name, brand, category } = this.props.toolinput;
    if (!name.length || !brand.length || !category.length) {
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
      owner_id: window.localStorage.getItem("user_id"),
      description: toolinput.description,
      deposit: toolinput.deposit
    };
    this.props.addToolsAction(newpost);
  };
  render() {
    const { toggle, modal, toolinput, handleChange, isUpdating } = this.props;
    return (
      <>
        <MDBContainer>
          <MDBModal isOpen={modal} toggle={toggle}>
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
    toggleModal
  }
)(withRouter(AddProductPage));
