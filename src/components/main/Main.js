import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import InventoryItem from "./InventoryItem";
import PaginationPage from "./PaginationPage";
import AddProductPage from "./AddProductPage";

const Main = ({ match }) => {
  return (
    <React.Fragment>
      <MDBContainer>
        <section className="typed">
          <div
            style={{
              fontFamily: '"Open Sans"',
              color: "#252525",
              fontSize: "2.5em",
              fontWeight: 300
            }}
          >
            Hi, I'm{" "}
            <img
              className="logo logo-light"
              alt="logo"
              src="img/tooli-logo.min.jpg"
            />
          </div>
          <h1 style={{ fontSize: "2.5em" }}>Your new tool rental service.</h1>
          <div
            className="typed-headline"
            style={{
              fontFamily: '"Open Sans"',
              fontSize: "2.5em",
              fontWeight: 300
            }}
          >
            <span
              className="typed-text typed-text--cursor color--primary"
              data-typed-strings="Convenient.,Online Booking.,Competitive Prices.,$15 Delivery.,Made in Toronto!"
            >
              Convenient.
            </span>
          </div>
        </section>
      </MDBContainer>
    </React.Fragment>
  );
};

export default Main;
