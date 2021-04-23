import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import * as Icon from 'react-bootstrap-icons';
import './theme.scss';
import SignUp from './SignUp'
import SignIn from './SignIn'
import Logout from './Logout'
import { Link } from "react-router-dom";

function Navigation(props) {

  const [isHouseShown, setIsHouseShown] = useState(false);
  const [isPeopleShown, setIsPeopleShown] = useState(false);
  const [isShieldShown, setIsShieldShown] = useState(false);
  const [isBookShown, setIsBookShown] = useState(false);
  const [isMegaphoneShown, setIsMegaphoneShown] = useState(false);
  const [isSignpostShown, setIsSignpostShown] = useState(false);

  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [sidebarScreen, setSidebarScreen] = useState(false);

  const handleCloseSignUp = () => setShowSignUp(false);
  const handleShowSignUp = () => setShowSignUp(true);
  const handleCloseSignIn = () => setShowSignIn(false);
  const handleShowSignIn = () => setShowSignIn(true);
  const handleCloseLogout = () => setShowLogout(false);
  const handleShowLogout = () => setShowLogout(true);
  const showSidebar = () => setSidebar(!sidebar);
  const showSidebarScreen = () => setSidebarScreen(!sidebarScreen);

  return (
    <div>
      <div className={sidebarScreen ? "sidebarScreen active" : "sidebarScreen"} onClick={function (event) { showSidebar(); showSidebarScreen() }}></div>
      <div className="nav-wrap dropShadow">
        <Link to="/" passHref><a href="replace"><img className="nav-intro-image" src="/img/LetsTalk-3.svg" alt=""/><p className="lets-colon" style={{ color: "#212529", zIndex: "5", float: "left", lineHeight: "60px" }}>:</p></a></Link>
        <Link to="/" passHref><a href="replace"><img className="nav-mobile-image" src="/img/LetsTalk-2.svg" alt=""/></a></Link>
        <button className="primaryBackground" id="btn-nav-collapse" style={{ height: "42px", zIndex: "1"}} onClick={function (event) { showSidebar(); showSidebarScreen() }}><Icon.List fontSize="2.4rem" /></button>
        <ul className="collapse-nav">
          {/*<li>
          <Link to="/">
            <a className="nav-text-container">Home</a>
          </Link>
        </li>*/}
          <li>
            <Link to="/about-us" passHref>
              <a className="nav-text-container" href="replace">About Us</a>
            </Link>
          </li>
          <li>
            <Link to="/prevention" passHref>
              <a className="nav-text-container" href="replace">Prevention</a>
            </Link>
          </li>
          <li>
            <Link to="/education" passHref>
              <a className="nav-text-container" href="replace">Education</a>
            </Link>
          </li>
          <li>
            <Link to="/communication" passHref>
              <a className="nav-text-container" href="replace">Communication</a>
            </Link>
          </li>
          <li>
            <Link to="/resources" passHref>
              <a className="nav-text-container" href="replace">Resources</a>
            </Link>
          </li>
        </ul>
        <img className="nav-outro-image" src="/img/LetsTalk-4.svg" alt=""/>
        <div className="nav-dropdown">
          <button className="primaryBackground secondaryColor" id="btn-nav-profile"><Icon.PersonCircle fontSize="2rem" /></button>
          <div className="nav-dropdown-content">
            {(!props.token) && <Button variant="link" onClick={handleShowSignUp}>Sign Up</Button>}
            {(!props.token) && <Button variant="link" onClick={handleShowSignIn}>Sign In</Button>}
            {(props.token) && <Button variant="link" onClick={handleShowLogout}>Logout</Button>}
          </div>
        </div>
        <SignUp show={showSignUp} handleClose={handleCloseSignUp} />
        <SignIn show={showSignIn} handleClose={handleCloseSignIn} setToken={props.setToken} />
        <Logout show={showLogout} handleClose={handleCloseLogout} setToken={props.setToken} />
        <div>
          <nav className={sidebar ? "sidebar active" : "sidebar"}>
            <div className={sidebarScreen ? "sidebarScreen active" : "sidebarScreen"} onClick={function (event) { showSidebar(); showSidebarScreen() }}></div>
            <ul>
              <li>
                <Link to="/" passHref>
                  <a className="nav-sidebar-text-container" href="replace"
                    onMouseEnter={() => setIsHouseShown(true)}
                    onMouseLeave={() => setIsHouseShown(false)}
                    onClick={function (event) { showSidebar(); showSidebarScreen() }}>
                    {isHouseShown && (<Icon.HouseFill className="sidebar-nav-icon secondaryColor" />)}
                    {!isHouseShown && (<Icon.House className="sidebar-nav-hidden secondaryColor" />)}
                Home
            </a>
                </Link>
              </li>
              <br /><br />
              <li>
                <Link to="/about-us" passHref>
                  <a className="nav-sidebar-text-container" href="replace"
                    onMouseEnter={() => setIsPeopleShown(true)}
                    onMouseLeave={() => setIsPeopleShown(false)}
                    onClick={function (event) { showSidebar(); showSidebarScreen() }}>
                    {isPeopleShown && (<Icon.PeopleFill className="sidebar-nav-icon secondaryColor" />)}
                    {!isPeopleShown && (<Icon.People className="sidebar-nav-hidden secondaryColor" />)}
                About Us
            </a>
                </Link>
              </li>
              <br /><br />
              <li>
                <Link to="/prevention" passHref>
                  <a className="nav-sidebar-text-container" href="replace"
                    onMouseEnter={() => setIsShieldShown(true)}
                    onMouseLeave={() => setIsShieldShown(false)}
                    onClick={function (event) { showSidebar(); showSidebarScreen() }}>
                    {isShieldShown && (<Icon.ShieldFillPlus className="sidebar-nav-icon secondaryColor" />)}
                    {!isShieldShown && (<Icon.ShieldPlus className="sidebar-nav-hidden secondaryColor" />)}
                Prevention
            </a>
                </Link>
              </li>
              <br /><br />
              <li>
                <Link to="/education" passHref>
                  <a className="nav-sidebar-text-container" href="replace"
                    onMouseEnter={() => setIsBookShown(true)}
                    onMouseLeave={() => setIsBookShown(false)}
                    onClick={function (event) { showSidebar(); showSidebarScreen() }}>
                    {isBookShown && (<Icon.BookFill className="sidebar-nav-icon secondaryColor" />)}
                    {!isBookShown && (<Icon.Book className="sidebar-nav-hidden secondaryColor" />)}
                Education
            </a>
                </Link>
              </li>
              <br /><br />
              <li>
                <Link to="/communication" passHref>
                  <a className="nav-sidebar-text-container" href="replace"
                    onMouseEnter={() => setIsMegaphoneShown(true)}
                    onMouseLeave={() => setIsMegaphoneShown(false)}
                    onClick={function (event) { showSidebar(); showSidebarScreen() }}>
                    {isMegaphoneShown && (<Icon.MegaphoneFill className="sidebar-nav-icon secondaryColor" />)}
                    {!isMegaphoneShown && (<Icon.Megaphone className="sidebar-nav-hidden secondaryColor" />)}
                Communication
            </a>
                </Link>
              </li>
              <br /><br />
              <li>
                <Link to="/resources" passHref>
                  <a className="nav-sidebar-text-container" href="replace"
                    onMouseEnter={() => setIsSignpostShown(true)}
                    onMouseLeave={() => setIsSignpostShown(false)}
                    onClick={function (event) { showSidebar(); showSidebarScreen() }}>
                    {isSignpostShown && (<Icon.SignpostSplitFill className="sidebar-nav-icon secondaryColor" />)}
                    {!isSignpostShown && (<Icon.SignpostSplit className="sidebar-nav-hidden secondaryColor" />)}
                Resources
            </a>
                </Link>
              </li>
              <br /><br />
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navigation;