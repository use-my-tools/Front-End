import React, { Component, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { getToolsAction } from "../../store/actions/toolsAction";
import ManageToolPage from "./ManageToolPage";
import Spinner from "../Spinner";
class InventoryItem extends Component {
  componentDidMount() {
    this.props.getToolsAction();
  }
  render() {
    console.log(this.props.tools);
    return (
      <>
        <section className="text-center my-5">
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            Tool Rental Made Easy
          </h2>
          <p className="grey-text text-center w-responsive mx-auto mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>
          {this.props.loading && <Spinner />}
          {/* this is the card */}
          <ManageToolPage />
        </section>
        {/* adding product */}
      </>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.toolsReducer.loading,
  tools: state.toolsReducer.tools
});

export default connect(
  mapStateToProps,
  { getToolsAction }
)(InventoryItem);
