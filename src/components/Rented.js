import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBBadge
} from "mdbreact";

import tool10 from "../assets/tool10.jpg";
import { toggleModal, clearInputsAction } from "../store/actions/toolsAction";
import styled from "styled-components";
import SpinnerPage from "./Spinner";
const MyInvStyle = styled.div`
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
  img {
    max-width: 100%;
  }
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .card {
      min-height: 300px;
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
  }
`;

class Rented extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      rented: null
    };
  }
  componentDidMount() {
    this._isMounted = true;
    if (this._isMounted) {
      axios
        .get(`https://tools-backend.herokuapp.com/api/tools/rented/`)
        .then(res =>
          this.setState({
            rented: res.data
          })
        );
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    const { rented } = this.state;
    if (!rented) {
      return <h5>There is Currently no item in Rented Tools </h5>;
    }

    return (
      <MyInvStyle>
        <MDBRow>
          {this.props.loading && <SpinnerPage />}
          <div className="container">
            {!rented ? (
              <h5>There is Currently no item in Rented Tools </h5>
            ) : (
              rented.map(tool => {
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
                          style={{ maxWidth: 300 }}
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
                            <h5>{tool.brand}</h5>
                          </span>
                          <h5>
                            <strong>
                              <span
                                href="#!"
                                className="dark-grey-text card-title"
                              >
                                {tool.name}{" "}
                                {`(${Math.floor(Math.random() * 1000)})`}
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
                            <strong>{tool.dailyCost}$</strong>
                          </h4>
                        </MDBCardBody>
                      </MDBCard>
                    </Link>
                  </MDBCol>
                );
              })
            )}
          </div>
        </MDBRow>
      </MyInvStyle>
    );
  }
}
const mapStateToProps = state => ({
  tools: state.toolsReducer.tools,
  modal: state.toolsReducer.modal,
  loading: state.toolsReducer.loading
});
export default connect(
  mapStateToProps,
  { toggleModal, clearInputsAction }
)(withRouter(Rented));
