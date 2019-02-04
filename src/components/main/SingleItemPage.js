import React, { Component } from "react";
import { connect } from "react-redux";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBBadge
} from "mdbreact";
import tool10 from "../../assets/tool10.jpg";
import { Link, withRouter } from "react-router-dom";

class SingleItemPage extends Component {
  render() {
    const { match, tools } = this.props;

    //find which id has been clicked
    const tool = tools.find(
      ({ id }) => parseInt(id) === parseInt(match.params.id)
    );
    console.log(tool);

    if (!tools.length) {
      return <h2>There's no item available right now </h2>;
    }
    return (
      <div>
        <MDBCol md="6" sm="12" lg="4" className="col-md-4 mb-4" key={tool.id}>
          <Link to={`/tools/${tool.id}`}>
            <MDBCard className="align-items-center">
              <MDBCardImage
                src={tool10}
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
                  <strong>219$</strong>
                </h4>
              </MDBCardBody>
            </MDBCard>
          </Link>
        </MDBCol>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tools: state.toolsReducer.tools
});

export default connect(
  mapStateToProps,
  null
)(withRouter(SingleItemPage));
