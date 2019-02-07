import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getQuery } from "../store/actions/toolsAction";

const SearchStyle = styled.div`
  margin-bottom: 50px;
`;

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
  }
  _onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  _onSubmit = e => {
    e.preventDefault();
    this.props.getQuery(this.state.query);
    //console.log("this.state.query", this.state.query);
    this.setState({ query: "" });
  };

  render() {
    return (
      <SearchStyle>
        <div className="container">
          <br />
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <form className="card card-sm" onSubmit={this._onSubmit}>
                <div className="card-body row no-gutters align-items-center">
                  <div className="col-auto" />
                  {/*end of col*/}
                  <div className="col">
                    <input
                      className="form-control form-control-lg form-control-borderless"
                      type="text"
                      name="query"
                      onChange={this._onChange}
                      value={this.state.query}
                      placeholder="Search topics or keywords"
                    />
                  </div>
                  {/*end of col*/}
                  <div className="col-auto">
                    <button className="btn btn-lg btn-success" type="submit">
                      Search
                    </button>
                  </div>
                  {/*end of col*/}
                </div>
              </form>
            </div>
            {/*end of col*/}
          </div>
        </div>
      </SearchStyle>
    );
  }
}
export default connect(
  null,
  { getQuery }
)(SearchBar);
