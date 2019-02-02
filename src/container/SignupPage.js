import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FormStyle = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  margin: 36px auto;
`;

const SignupPage = () => {
  return (
    <FormStyle className="border border-light p-5">
      <p className="h4 mb-4 text-center">Sign up</p>
      <input type="text" className="form-control" placeholder="First name" />
      <input type="text" className="form-control" placeholder="Last name" />
      <input type="email" className="form-control mb-4" placeholder="E-mail" />
      <input
        type="password"
        className="form-control"
        placeholder="Password"
        aria-describedby="defaultRegisterFormPasswordHelpBlock"
      />
      <small className="form-text text-muted mb-4">
        Minimal 8 characters lenght
      </small>
      <input
        type="text"
        className="form-control"
        placeholder="Phone number"
        aria-describedby="defaultRegisterFormPhoneHelpBlock"
      />
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
      <button className="btn btn-info my-4 btn-block" type="submit">
        Sign up
      </button>
    </FormStyle>
  );
};

export default SignupPage;
