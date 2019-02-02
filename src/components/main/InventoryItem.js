import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBBadge
} from "mdbreact";
import tool1 from "../../assets/tool1.jpg";
import tool2 from "../../assets/tool2.jpg";
import tool3 from "../../assets/tool3.jpg";
import tool4 from "../../assets/tool4.jpg";
// import tool5 from "../../assets/tool5.jpg";
// import tool6 from "../../assets/tool6.jpg";
// import tool7 from "../../assets/tool7.jpg";
// import tool8 from "../../assets/tool8.jpg";
// import tool9 from "../../assets/tool9.jpg";
// import tool10 from "../../assets/tool10.jpg";

const InventoryItem = () => {
  return (
    <section className="text-center my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Our bestsellers
      </h2>
      <p className="grey-text text-center w-responsive mx-auto mb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
        amet numquam iure provident voluptate esse quasi, veritatis totam
        voluptas nostrum quisquam eum porro a pariatur veniam.
      </p>
      <MDBRow>
        <MDBCol lg="4" md="6" className="mb-lg-0 mb-4">
          <MDBCard className="align-items-center">
            <MDBCardImage
              src={tool1}
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody className="text-center">
              <a href="#!" className="grey-text">
                <h5>hammer drill</h5>
              </a>
              <h5>
                <strong>
                  <a href="#!" className="dark-grey-text">
                    1/2 hammer drill (6929){" "}
                    <MDBBadge pill color="danger">
                      NEW
                    </MDBBadge>
                  </a>
                </strong>
              </h5>
              <h4 className="font-weight-bold blue-text">
                <strong>120$</strong>
              </h4>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="4" md="6" className="mb-lg-0 mb-4">
          <MDBCard className="align-items-center">
            <MDBCardImage
              src={tool2}
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody className="text-center">
              <a href="#!" className="grey-text">
                <h5>Router</h5>
              </a>
              <h5>
                <strong>
                  <a href="#!" className="dark-grey-text">
                    1 1/2 Router (1767)
                  </a>
                </strong>
              </h5>
              <h4 className="font-weight-bold blue-text">
                <strong>139$</strong>
              </h4>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="4" md="6" className="mb-lg-0 mb-4">
          <MDBCard className="align-items-center">
            <MDBCardImage
              src={tool3}
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody className="text-center">
              <a href="#!" className="grey-text">
                <h5>Brake Cylinder Hone</h5>
              </a>
              <h5>
                <strong>
                  <a href="#!" className="dark-grey-text">
                    1/2 " - 2-1/2" Brake Cylinder Hone{" "}
                    <MDBBadge pill color="primary">
                      BEST
                    </MDBBadge>
                  </a>
                </strong>
              </h5>
              <h4 className="font-weight-bold blue-text">
                <strong>99$</strong>
              </h4>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="4" md="6" className="mb-lg-0 mb-4">
          <MDBCard className="align-items-center">
            <MDBCardImage
              src={tool4}
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody className="text-center">
              <a href="#!" className="grey-text">
                <h5>Sheet Finishing Sander</h5>
              </a>
              <h5>
                <strong>
                  <a href="#!" className="dark-grey-text">
                    1/3-Sheet Finishing Sander (6894)
                  </a>
                </strong>
              </h5>
              <h4 className="font-weight-bold blue-text">
                <strong>219$</strong>
              </h4>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </section>
  );
};

export default InventoryItem;
