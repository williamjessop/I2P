import React from 'react';
import { Nav, Navbar, NavDropdown, Button} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import './theme.scss';

function Navigation() {
  return (
    <div className="nav-wrap navDropShadow">
      <button className="primaryBackground" id="btn-nav-collapse" style={{height:"42px"}} ><Icon.List fontSize="2.4rem"/></button>
      <ul className="collapse-nav">
        <li><a href="default.asp" className="active">Home</a></li>
        <li><a href="news.asp">News</a></li>
        <li><a href="contact.asp">Contact</a></li>
        <li><a href="about.asp">About</a></li>
      </ul>
      <img className="nav-signup-dropdown" id="img-nav-logo" src="./logo512.png" style={{width:"56px", height:"56px", position:"relative", zIndex:"1"}}/>
      <div className="dropdown">
        <button className="primaryBackground secondaryColor" id="btn-nav-profile"><Icon.PersonCircle fontSize="2rem"/></button>
        <div class="dropdown-content">
          <a href="#">Sign Up</a>
          <a href="#">Sign In</a>
          <a href="#">Logout</a>
        </div>
      </div>
      <Button id="btn-nav-help" variant="danger" style={{top:"9px", position:"relative", alignSelf:"center", float:"right"}}>HELP</Button>
    </div>
  );
}

export default Navigation;