import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getToolsAction,
  getToolsPagination
} from "../../store/actions/toolsAction";
import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css";
import styled from "styled-components";

const PagStyle = styled.div`
  display: flex;
  align-items: baseline;
`;

class PaginationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: this.props.current_page
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentPage !== this.state.currentPage) {
      this.props.getToolsPagination(
        `https://tools-backend.herokuapp.com/api/tools?count=10&page=${
          this.state.currentPage
        }`
      );
    }
  }
  componentDidMount() {
    this.props.getToolsAction();
  }
  changeCurrentPage = numPage => {
    this.setState({ currentPage: numPage });
  };
  render() {
    return (
      <PagStyle>
        <Pagination
          currentPage={this.state.currentPage}
          totalPages={this.props.last_page}
          changeCurrentPage={this.changeCurrentPage}
          theme="bottom-border"
        />
        <p>current Page:{this.state.currentPage}</p>
      </PagStyle>
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
  { getToolsAction, getToolsPagination }
)(PaginationPage);
