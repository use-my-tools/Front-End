import React, { Component } from "react";
import { connect } from "react-redux";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from "mdbreact";
import { logoutUser } from "../store/actions/authAction";
import { Alert } from "react-s-alert";
import { withRouter } from "react-router-dom";

class NavbarPage extends Component {
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  render() {
    return (
      <MDBNavbar color="info-color" dark expand="md" scrolling double>
        <MDBNavbarBrand>
          <strong className="white-text">My-Tools 2019</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                to="/dashboard"
                hidden={!this.props.auth.isAuthenticated}
              >
                Dashboard
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem />
            <MDBNavItem>
              <MDBNavLink to="/pricing">Pricing</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/contact">Contact</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem />
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink
                hidden={this.props.auth.isAuthenticated}
                to="/register"
              >
                Create Account
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              {this.props.auth.isAuthenticated ? (
                <MDBNavLink
                  to="#"
                  onClick={() => {
                    if (window.confirm("Are you sure you wish to log out ?"))
                      this.props.logoutUser();
                  }}
                >
                  Log out
                </MDBNavLink>
              ) : (
                <MDBNavLink to="/login">Log in</MDBNavLink>
              )}
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle className="dopdown-toggle" nav>
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg"
                    className="rounded-circle z-depth-0"
                    style={{ height: "35px", padding: 0 }}
                    alt=""
                  />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default" right>
                  <MDBDropdownItem href="#!">My account</MDBDropdownItem>
                  <MDBDropdownItem
                    href="#!"
                    onClick={() => {
                      if (window.confirm("Are you sure you wish to log out ?"))
                        this.props.logoutUser(this.props.history);
                    }}
                  >
                    Log out
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(withRouter(NavbarPage));
