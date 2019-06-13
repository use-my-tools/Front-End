import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { registerUser } from "../store/actions/authAction";
import { connect } from "react-redux";
import Alert from "react-s-alert";
import SpinnerPage from "../components/Spinner";

const FormStyle = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  margin: 4.1vh auto;
`;

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: ""
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  handleChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  handleSubmit = e => {
    e.preventDefault();
    const { firstname, lastname, username, email, password } = this.state;
    if (!firstname || !lastname || !username || !email || !password) {
      Alert.error("All Fields Are required");
    }

    const newUser = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };
    this.props.registerUser(newUser, this.props.history);
    // this.props.registerUser(newUser, this.props.history);
    this.setState({
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: ""
    });
  };

  render() {
    return (
      <FormStyle
        className="border border-light p-5"
        onSubmit={this.handleSubmit}
      >
        <p className="h4 mb-4 text-center">Sign up</p>
        {this.props.auth.loading && <SpinnerPage />}
        <input
          onChange={this.handleChange}
          name="firstname"
          value={this.state.firstname}
          type="text"
          className="form-control mb-4"
          placeholder="First name"
        />
        <input
          onChange={this.handleChange}
          name="lastname"
          value={this.state.lastname}
          type="text"
          className="form-control mb-4"
          placeholder="Last name"
        />
        <input
          onChange={this.handleChange}
          name="username"
          value={this.state.username}
          type="text"
          className="form-control mb-4"
          placeholder="Username"
        />
        <input
          onChange={this.handleChange}
          name="email"
          value={this.state.email}
          type="email"
          className="form-control mb-4"
          placeholder="E-mail"
        />
        <input
          onChange={this.handleChange}
          name="password"
          value={this.state.password}
          type="password"
          className="form-control"
          placeholder="Password"
          aria-describedby="defaultRegisterFormPasswordHelpBlock"
        />
        <small className="form-text text-muted mb-4">
          Minimal 8 characters lenght
        </small>
        <small
          id="defaultRegisterFormPhoneHelpBlock"
          className="form-text text-muted mb-4"
        >
          Optional - for two step authentication
        </small>
        <div className="text-center">
          <p>
            Already have an account?
            <Link to="/login">Login</Link>
          </p>
          <p>or sign in with:</p>
          <a href="/#" type="button" className="light-blue-text mx-2">
            <i className="fab fa-facebook-f" style={{ padding: 10 }} />
          </a>
          <a href="/#" type="button" className="light-blue-text mx-2">
            <i className="fab fa-twitter" style={{ padding: 10 }} />
          </a>
          <a href="/#" type="button" className="light-blue-text mx-2">
            <i className="fab fa-linkedin-in" style={{ padding: 10 }} />
          </a>
          <a href="/#" type="button" className="light-blue-text mx-2">
            <i className="fab fa-github" style={{ padding: 10 }} />
          </a>
        </div>
        <button className="btn btn-info my-4 btn-block" type="submit">
          Sign up
        </button>
      </FormStyle>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { registerUser }
)(Register);
