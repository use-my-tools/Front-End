import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import axios from "axios";
import StarRatingComponent from "react-star-rating-component";

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
  clearInputsAction,
  deleteToolsAction,
  addReviewsAction
} from "../../store/actions/toolsAction";

import AddImageModal from "../AddImageModal";
import Alert from "react-s-alert";
import SpinnerPage from "../Spinner";
import {
  FloatingMenu,
  MainButton,
  ChildButton
} from "react-floating-button-menu";
import MdAdd from "@material-ui/icons/Add";
import MdClose from "@material-ui/icons/Clear";

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
  .add-card {
    box-sizing: border-box;
  }
  .floating-btn {
    position: fixed;
    bottom: 30px;
    right: 45px;
    z-index: 99999999999999;
  }
  .fa-trash-alt {
    &:hover {
      color: red;
    }
  }
  .fa-upload {
    &:hover {
      color: orange;
    }
  }
  .fa-edit {
    &:hover {
      color: blueviolet;
    }
  }
  .reviews {
    display: flex;
    flex-direction: column;
    padding: 0 50px;
  }
`;

class SingleItemPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadModal: false,
      singleTools: null,
      ssOpen: false,
      for_user: "",
      stars: 0,
      review: "",
      reviews: null
    };
  }

  _reviewHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onStarClick = nextValue => {
    this.setState({ stars: nextValue });
  };
  _submitReview = (e, user_id) => {
    e.preventDefault();
    const reviews = {
      for_user: user_id,
      stars: this.state.stars,
      review: this.state.review
    };
    this.props.addReviewsAction(reviews);
  };

  componentDidMount() {
    axios
      .get(
        `https://tools-backend.herokuapp.com/api/tools/${
          this.props.match.params.id
        }`
      )
      .then(res => this.setState({ singleTools: res.data }))
      .catch(err => Alert.error(err.response.data.message));
    axios
      .get(`https://tools-backend.herokuapp.com/api/users/2`)
      .then(res => this.setState({ reviews: res.data }))
      .catch(err => Alert.error(err.response.data.message));
  }

  handleUpdate = tool => {
    this.props.handleUpdateAction(tool);
    this.props.history.push("/dashboard");
    this.props.toggleModal();
  };
  _toggleModal = () => {
    this.setState({
      uploadModal: !this.state.uploadModal
    });
  };
  _deleteTool = () => {
    const { singleTools } = this.state;
    this.props.deleteToolsAction(singleTools.id);
    this.props.history.push("/dashboard");
  };
  render() {
    const { loading, user_id } = this.props;
    const { singleTools, reviews } = this.state;
    if (!singleTools) {
      return (
        <h2 style={{ margin: "335px auto" }}>
          This item is not available right now{" "}
        </h2>
      );
    }
    console.log(reviews);
    return (
      <ToolStyle>
        <MDBContainer>
          {loading && <SpinnerPage />}
          <AddImageModal
            toggleModal={this._toggleModal}
            uploadModal={this.state.uploadModal}
            id={singleTools.id}
          />
          <FloatingMenu
            slideSpeed={500}
            direction="up"
            spacing={8}
            isOpen={this.state.ssOpen}
            className="floating-btn"
          >
            <MainButton
              hidden={user_id !== singleTools.owner_id ? true : false}
              iconResting={
                <MdAdd style={{ fontSize: 20 }} nativeColor="white" />
              }
              iconActive={
                <MdClose style={{ fontSize: 20 }} nativeColor="white" />
              }
              backgroundColor="#0070F7"
              onClick={() => this.setState({ ssOpen: !this.state.ssOpen })}
              size={56}
            />
            <ChildButton
              icon={<i className="fas fa-trash-alt" />}
              backgroundColor="white"
              size={40}
              onClick={() => {
                if (
                  window.confirm("Are you sure you wish to delete this too 🛠 ?")
                )
                  this._deleteTool();
              }}
            />
            <ChildButton
              icon={<i className="far fa-edit" />}
              backgroundColor="white"
              size={40}
              onClick={() => this.handleUpdate(singleTools)}
            />
            <ChildButton
              icon={<i className="fas fa-upload" />}
              backgroundColor="white"
              size={40}
              onClick={this._toggleModal}
            />
          </FloatingMenu>
          <MDBRow>
            <MDBCol
              lg="12"
              md="4"
              className="col-md-6 mb-4 toolcard"
              key={singleTools.id}
            >
              <Link to={`/tools/${singleTools.id}`}>
                <MDBCard className="align-items-center">
                  <MDBCardImage
                    style={{ maxWidth: 300 }}
                    src={
                      !singleTools.images.length
                        ? tool10
                        : singleTools.images[0].url
                    }
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
                          {singleTools.id % 2 === 0 ? (
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
          </MDBRow>
          <MDBRow>
            <MDBCard
              className="card-body"
              style={{ marginTop: "1rem", minHeight: 450, maxHeight: 450 }}
            >
              <MDBCardTitle>Location</MDBCardTitle>
              <MDBCardText style={{ height: "100%" }}>
                <span
                  id="map-container"
                  className="rounded z-depth-1-half map-container"
                  style={{ height: "400px" }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d76765.98321148289!2d-73.96694563267306!3d40.751663750099084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1525939514494"
                    title="This is a unique title"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: 0 }}
                  />
                </span>
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
            <MDBCard
              className="card-body"
              style={{ marginTop: "1rem", marginBottom: 100 }}
            >
              <MDBCardTitle>Review</MDBCardTitle>
              <div>
                <form
                  onSubmit={e => this._submitReview(e, singleTools.owner_id)}
                >
                  <StarRatingComponent
                    name="stars"
                    editing={true}
                    renderStarIcon={() => (
                      <i className="fa fa-star" aria-hidden="true" />
                    )}
                    starCount={5}
                    onStarClick={this.onStarClick}
                    value={this.state.stars}
                  />

                  <input
                    type="text"
                    onChange={this._reviewHandler}
                    name="review"
                    value={this.state.review}
                    placeholder="leave a review"
                    className="form-control"
                  />
                  <button type="submit" className="btn btn-primary">
                    submit
                  </button>
                </form>
              </div>
              <div>
                reviews here
                {!reviews && <p>no reviews</p>}
                <div>
                  {reviews &&
                    reviews.reviews.map((x, idx) => (
                      <MDBCard key={idx} className="reviews">
                        <p>{x.review}</p>
                        <StarRatingComponent
                          name="rate2"
                          editing={false}
                          renderStarIcon={() => (
                            <i className="fa fa-star" aria-hidden="true" />
                          )}
                          starCount={5}
                          value={x.stars}
                        />
                      </MDBCard>
                    ))}
                </div>
              </div>
            </MDBCard>
          </MDBRow>
        </MDBContainer>
      </ToolStyle>
    );
  }
}

const mapStateToProps = state => ({
  tools: state.toolsReducer.tools,
  reviews: state.toolsReducer.reviews,
  loading: state.toolsReducer.loading,
  user_id: state.auth.user.user.id
});

export default connect(
  mapStateToProps,
  {
    handleUpdateAction,
    toggleModal,
    clearInputsAction,
    deleteToolsAction,
    addReviewsAction
  }
)(withRouter(SingleItemPage));
