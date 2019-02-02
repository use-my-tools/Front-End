import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn
} from "mdbreact";

const PricingPage = () => {
  return (
    <section className="text-center my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Our pricing plans
      </h2>
      <p className="grey-text text-center w-responsive mx-auto mb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
        amet numquam iure provident voluptate esse quasi, veritatis totam
        voluptas nostrum quisquam eum porro a pariatur veniam.
      </p>
      <MDBRow>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBCard pricing>
            <div className="price header white-text blue rounded-top">
              <h2 className="number">10</h2>
              <div className="version">
                <h5 className="mb-0">Basic</h5>
              </div>
            </div>
            <MDBCardBody className="striped mb-1">
              <ul>
                <li>
                  <p className="mt-2">
                    <MDBIcon icon="check" className="green-text pr-2" />
                    20 GB Of Storage
                  </p>
                </li>
                <li>
                  <p>
                    <MDBIcon icon="check" className="green-text pr-2" />2 Email
                    Accounts
                  </p>
                </li>
                <li>
                  <p>
                    <MDBIcon icon="times" className="red-text pr-2" />
                    24h Tech Support
                  </p>
                </li>
                <li>
                  <p>
                    <MDBIcon icon="times" className="red-text pr-2" />
                    300 GB Bandwidth
                  </p>
                </li>
                <li>
                  <p>
                    <MDBIcon icon="times" className="red-text pr-2" />
                    User Management{" "}
                  </p>
                </li>
              </ul>
              <MDBBtn color="blue">Buy now</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBCard pricing>
            <div className="price header white-text indigo rounded-top">
              <h2 className="number">20</h2>
              <div className="version">
                <h5 className="mb-0">Pro</h5>
              </div>
            </div>
            <MDBCardBody className="striped mb-1">
              <ul>
                <li>
                  <p className="mt-2">
                    <MDBIcon icon="check" className="green-text pr-2" />
                    20 GB Of Storage
                  </p>
                </li>
                <li>
                  <p>
                    <MDBIcon icon="check" className="green-text pr-2" />4 Email
                    Accounts
                  </p>
                </li>
                <li>
                  <p>
                    <MDBIcon icon="check" className="green-text pr-2" />
                    24h Tech Support
                  </p>
                </li>
                <li>
                  <p>
                    <MDBIcon icon="times" className="red-text pr-2" />
                    300 GB Bandwidth
                  </p>
                </li>
                <li>
                  <p>
                    <MDBIcon icon="times" className="red-text pr-2" />
                    User Management{" "}
                  </p>
                </li>
              </ul>
              <MDBBtn color="indigo">Buy now</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBCard pricing>
            <div className="price header white-text deep-purple rounded-top">
              <h2 className="number">30</h2>
              <div className="version">
                <h5 className="mb-0">Enterprise</h5>
              </div>
            </div>
            <MDBCardBody className="striped mb-1">
              <ul>
                <li>
                  <p className="mt-2">
                    <MDBIcon icon="check" className="green-text pr-2" />
                    20 GB Of Storage
                  </p>
                </li>
                <li>
                  <p>
                    <MDBIcon icon="check" className="green-text pr-2" />5 Email
                    Accounts
                  </p>
                </li>
                <li>
                  <p>
                    <MDBIcon icon="check" className="green-text pr-2" />
                    24h Tech Support
                  </p>
                </li>
                <li>
                  <p>
                    <MDBIcon icon="check" className="green-text pr-2" />
                    300 GB Bandwidth
                  </p>
                </li>
                <li>
                  <p>
                    <MDBIcon icon="check" className="green-text pr-2" />
                    User Management{" "}
                  </p>
                </li>
              </ul>
              <MDBBtn color="deep-purple">Buy now</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </section>
  );
};

export default PricingPage;
