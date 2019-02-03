import React, { Component } from "react";
import { MDBCard, MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import styled from "styled-components";

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
      name: "",
      brand: "",
      marketprice: "",
      category: "",
      photo: "",
      priceperday: "",
      securitydeposit: "",
      address: "",
      notes: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const {
      name,
      brand,
      marketprice,
      category,
      photo,
      priceperday,
      securitydeposit,
      address,
      notes
    } = this.state;

    if (
      (!name.length,
      !brand.length,
      !marketprice.length,
      !category.length,
      !photo.length,
      !priceperday.length,
      !securitydeposit.length,
      !address.length,
      !notes.length)
    ) {
      return;
    }

    this.addTools();
  };
  addTools = () => {
    const newpost = {
      name: this.state.name,
      brand: this.state.brand,
      marketprice: this.state.marketprice,
      category: this.state.category,
      photo: this.state.photo,
      priceperday: this.state.priceperday,
      securitydeposit: this.state.securitydeposit,
      address: this.state.address,
      notes: this.state.notes
    };
    console.log(newpost);
  };

  render() {
    const { history } = this.props;
    return (
      <AddPageStyle>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="12">
              <form onSubmit={this.handleSubmit}>
                <MDBCard className="align-items-center card-addpage">
                  <h2>Description</h2>
                  <label>Name</label>
                  <input
                    placeholder="name"
                    type="text"
                    className="form-control"
                    onChange={this.handleChange}
                    name="name"
                    value={this.state.name}
                  />
                  <label>Brand</label>
                  <input
                    placeholder="brand"
                    type="text"
                    className="form-control"
                    onChange={this.handleChange}
                    name="brand"
                    value={this.state.brand}
                  />
                  <label>Market Price</label>
                  <input
                    placeholder="$"
                    type="number"
                    className="form-control"
                    onChange={this.handleChange}
                    name="marketprice"
                    value={this.state.marketprice}
                  />
                  <label>Category</label>
                  <input
                    placeholder="category"
                    type="text"
                    className="form-control"
                    onChange={this.handleChange}
                    name="category"
                    value={this.state.category}
                  />
                </MDBCard>
                <MDBCard className="align-items-center card-addpage">
                  <h2>Photo</h2>
                  <svg
                    width={100}
                    height={100}
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
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
                  <span className="noimage-info">No image yet</span>
                  <input
                    placeholder="Upload Photo"
                    type="number"
                    className="form-control"
                    onChange={this.handleChange}
                    name="photo"
                    value={this.state.photo}
                  />
                </MDBCard>
                <MDBCard className="align-items-center card-addpage">
                  <h2>Rental Agreement</h2>
                  <label>Price per day</label>
                  <input
                    placeholder="$"
                    type="text"
                    className="form-control"
                    onChange={this.handleChange}
                    name="priceperday"
                    value={this.state.priceperday}
                  />
                  <label>Security Deposit</label>
                  <input
                    placeholder="$"
                    type="text"
                    className="form-control"
                    onChange={this.handleChange}
                    name="securitydeposit"
                    value={this.state.securitydeposit}
                  />
                </MDBCard>
                <MDBCard className="align-items-center card-addpage">
                  <h2>Pick up location</h2>
                  <label>Address</label>
                  <input
                    placeholder="Enter the address"
                    type="text"
                    className="form-control"
                    onChange={this.handleChange}
                    name="address"
                    value={this.state.address}
                  />
                </MDBCard>
                <MDBCard className="align-items-center card-addpage">
                  <h2>Notes</h2>
                  <textarea
                    placeholder="Enter any extra information about the tool here. You can also use this section to specify your preferred time for pickups"
                    type="text"
                    className="form-control"
                    onChange={this.handleChange}
                    name="notes"
                    value={this.state.notes}
                    rows="5"
                  />
                </MDBCard>

                <div className="text-center mt-4">
                  {/* buttons go back and add */}
                  <MDBBtn color="unique" onClick={() => history.goBack()}>
                    Back
                  </MDBBtn>
                  <MDBBtn color="indigo" type="submit">
                    Submit
                  </MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </AddPageStyle>
    );
  }
}

export default AddProductPage;
