import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { setCurrentUser, loginUser } from "../store/actions/authAction";
import { connect } from "react-redux";

const FormStyle = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  margin: 14vh auto;
`;

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); // push user to dashboard when they login
    }
    // if (nextProps.errors) {
    //   this.setState({
    //     errors: nextProps.errors
    //   });
    // }
  }
  handleChange = e => this.setState({ [e.target.name]: e.target.value });
  handleSubmit = e => {
    e.preventDefault();

    const userData = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.loginUser(userData);
    this.setState({ username: "", password: "" });
  };
  render() {
    return (
      <FormStyle
        className="border border-light p-5"
        onSubmit={this.handleSubmit}
      >
        <p className="h4 mb-4 text-center">Sign in</p>
        <input
          onChange={this.handleChange}
          type="text"
          value={this.state.username}
          name="username"
          className="form-control mb-4"
          placeholder="Username"
        />
        <input
          onChange={this.handleChange}
          type="text"
          value={this.state.password}
          name="password"
          className="form-control mb-4"
          placeholder="Password"
        />
        <div className="d-flex justify-content-between">
          <div>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="defaultLoginFormRemember"
              />
              <label
                className="custom-control-label"
                htmlFor="defaultLoginFormRemember"
              >
                Remember me
              </label>
            </div>
          </div>
        </div>
        <button className="btn btn-info btn-block my-4" type="submit">
          Sign in
        </button>
        <div className="text-center">
          <p>
            Not a member?
            <Link to="/register">Register</Link>
          </p>
          <p>or sign in with:</p>
          <a href="/#" type="button" className="light-blue-text mx-2">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="/#" type="button" className="light-blue-text mx-2">
            <i className="fab fa-twitter" />
          </a>
          <a href="/#" type="button" className="light-blue-text mx-2">
            <i className="fab fa-linkedin-in" />
          </a>
          <a href="/#" type="button" className="light-blue-text mx-2">
            <i className="fab fa-github" />
          </a>
        </div>
      </FormStyle>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { loginUser, setCurrentUser }
)(LoginPage);
