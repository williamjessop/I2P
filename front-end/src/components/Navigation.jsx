import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import './theme.scss';

function Navigation() {
    return (
      <div className="navContainerDiv">
        <Navbar sticky="top" collapseOnSelect expand="md" variant="light" className="navDropShadow">
          <Navbar.Brand href="/">
            <img
                alt=""
                src="/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '}
            Let's Talk
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
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