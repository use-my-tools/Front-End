import React, { Component } from "react";
import { connect } from "react-redux";
import { getToolsAction } from "../../store/actions/toolsAction";
import Pagination from "react-js-pagination";
// import "bootstrap/scss/utilities/";
//let nums = this.props.current_page;
// const PAGES = `https://tools-backend.herokuapp.com/api/tools?count=10&page=${1}`;
// const URL = `https://tools-backend.herokuapp.com/api/tools`;

class PaginationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1
    };
  }
  componentDidMount() {
    this.props.getToolsAction();
  }
  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  }
  render() {
    return (
      <Pagination
        activePage={this.state.activePage}
        itemsCountPerPage={this.props.per_page}
        totalItemsCount={this.props.total}
        pageRangeDisplayed={this.props.last_page}
        onChange={this.handlePageChange}
      />
    );
  }
}
const mapStateToProps = state => ({
  current_page: state.toolsReducer.current_page,
  total: state.toolsReducer.total,
  last_page: state.toolsReducer.last_page,
  per_page: state.toolsReducer.per_page
});

export default connect(
  mapStateToProps,
  { getToolsAction }
)(PaginationPage);
