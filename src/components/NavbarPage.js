import React, { Component } from "react";
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
              <MDBNavLink to="/inventory">Inventory</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem />
            <MDBNavItem>
              <MDBNavLink to="/pricing">Pricing</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem />
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink to="/register">Create Account</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/login">Log in</MDBNavLink>
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
                  <MDBDropdownItem href="#!">Log out</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;
