import {Button} from 'react-bootstrap';
import React, {useState} from 'react';
import * as Icon from 'react-bootstrap-icons';
import './theme.scss';
import SignUp from './SignUp'
import SignIn from './SignIn'
import Logout from './Logout'

function Navigation(props) {

  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  const handleCloseSignUp = () => setShowSignUp(false);
  const handleShowSignUp = () => setShowSignUp(true);
  const handleCloseSignIn = () => setShowSignIn(false);
  const handleShowSignIn = () => setShowSignIn(true);
  const handleCloseLogout = () => setShowLogout(false);
  const handleShowLogout = () => setShowLogout(true);

  return (
    <div className="nav-wrap navDropShadow">
      <button className="primaryBackground" id="btn-nav-collapse" style={{height:"42px"}} ><Icon.List fontSize="2.4rem"/></button>
      <ul className="collapse-nav">
        <li><a href="default.asp" className="nav-active">Home</a></li>
        <li><a href="news.asp">News</a></li>
        <li><a href="contact.asp">Contact</a></li>
        <li><a href="about.asp">About</a></li>
      </ul>
      <img className="nav-signup-dropdown" id="img-nav-logo" src="./logo512.png" style={{width:"56px", height:"56px", position:"relative", zIndex:"1"}}/>
      <div className="nav-dropdown">
        <button className="primaryBackground secondaryColor" id="btn-nav-profile"><Icon.PersonCircle fontSize="2rem"/></button>
        <div className="nav-dropdown-content">
          {(!props.token) && <Button variant="link" onClick={handleShowSignUp}>Sign Up</Button>}
          {(!props.token)&&<Button variant="link" onClick={handleShowSignIn}>Sign In</Button>}
          {(props.token) && <Button variant="link" onClick={handleShowLogout}>Logout</Button>}
        </div>
      </div>
      <Button id="btn-nav-help" variant="danger" style={{top:"9px", position:"relative", alignSelf:"center", float:"right"}}>HELP</Button>

      <SignUp show={showSignUp} handleClose={handleCloseSignUp}/>
      <SignIn show={showSignIn} handleClose={handleCloseSignIn} setToken={props.setToken}/>
      <Logout show={showLogout} handleClose={handleCloseLogout} setToken={props.setToken}/>


    </div>
  );
}

export default Navigation;