import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

  import { Link } from 'react-router-dom';

  export default class TopNavBar extends React.Component {
    constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }

    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    render() {
      return (
        <div>
          <Navbar
            color="faded"
            light expand="md"
            className="nav-bar-color nav-bar-container"
          >
            <NavbarBrand className="navbar-brand-logo" href="/">Donor Management Tool</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink className="navbar-links" tag={Link} to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="navbar-links" tag={Link} to="/donor-list">Donor List</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="navbar-links" tag={Link} to="/donation-list">Donation List</NavLink>
                </NavItem>
                {/* <NavItem>
                  <NavLink className="navbar-links" tag={Link} to="/create-new-donor">Create Donor</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="navbar-links" tag={Link} to="/edit-donor">Edit Donor</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="navbar-links" tag={Link} to="/create-new-gift">Create Gift</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="navbar-links" tag={Link} to="/edit-gift">Edit Gift</NavLink>
                </NavItem> */}
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }
