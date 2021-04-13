import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import './theme.scss';

function Navigation() {
  return (
    <div className="navContainerDiv">
      <Navbar sticky="top" collapseOnSelect expand="md" variant="light" className="navDropShadow">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand href="/">
          <div>
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Let's Talk
            </div>
        </Navbar.Brand>
        <NavDropdown eventKey={3} title={<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>} id="collasible-nav-dropdown btn-profile" style={{}}> Dropdown Item 1
        </NavDropdown>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/prevention">Prevention</Nav.Link>
            <Nav.Link href="/communication">Communication</Nav.Link>
            <NavDropdown title="Education" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#course/coursename1">Course 1</NavDropdown.Item>
              <NavDropdown.Item href="#course/coursename2">Course 2</NavDropdown.Item>
              <NavDropdown.Item href="#course/coursename3">Course 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#faq">Need Help?</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/aboutus">About Us</Nav.Link>
            <Nav.Link eventKey={2} href="/resources">
              Resources
              </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;