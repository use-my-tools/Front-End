import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";
import styled from "styled-components";

const FooterStyle = styled.div``;

const FooterPage = () => {
  return (
    <FooterStyle className="footer">
      <MDBFooter
        color="indigo"
        className=" font-small stylish-color-dark   fixed-bottom"
      >
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="https://www.MDBootstrap.com"> myTools </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    </FooterStyle>
  );
};

export default FooterPage;
