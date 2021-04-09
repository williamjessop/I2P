import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './theme.scss';

function Navigation() {
    return (
      <div>
        <Navbar className="navDropShadow" bg="secondary">
            <Navbar.Brand href="#home">
            <img
                alt=""
                src="/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '}
            Let's Talk
            </Navbar.Brand>
        </Navbar>
      </div>
    );
  }

export default Navigation;