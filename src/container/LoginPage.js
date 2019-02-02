import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FormStyle = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  margin: 14vh auto;
`;

const LoginPage = () => {
  return (
    <FormStyle className="border border-light p-5">
      <p className="h4 mb-4 text-center">Sign in</p>
      <input type="email" className="form-control mb-4" placeholder="E-mail" />
      <input
        type="password"
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
};

export default LoginPage;
