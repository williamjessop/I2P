import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import * as Icon from 'react-bootstrap-icons';
import './theme.scss';
import { Link } from "react-router-dom";

function Navigation(props) {

  const [isHouseShown, setIsHouseShown] = useState(false);
  const [isPeopleShown, setIsPeopleShown] = useState(false);
  const [isShieldShown, setIsShieldShown] = useState(false);
  const [isBookShown, setIsBookShown] = useState(false);
  const [isMegaphoneShown, setIsMegaphoneShown] = useState(false);

  const [sidebar, setSidebar] = useState(false);
  const [sidebarScreen, setSidebarScreen] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const showSidebarScreen = () => setSidebarScreen(!sidebarScreen);

  return (
    <div>
      <div className={sidebarScreen ? "sidebarScreen active" : "sidebarScreen"} onClick={function (event) { showSidebar(); showSidebarScreen() }}></div>
      <div className="nav-wrap dropShadow">
        <a href="/"><img className="nav-intro-image" src="/img/LetsTalk-3.svg" alt="" /><p className="lets-colon" style={{ color: "#212529", zIndex: "5", float: "left", lineHeight: "60px" }}>:</p></a>
        <a href="/"><img className="nav-mobile-image" src="/img/LetsTalk-2.svg" alt="" /></a>
        <button className="primaryBackground" id="btn-nav-collapse" style={{ height: "42px", zIndex: "1" }} onClick={function (event) { showSidebar(); showSidebarScreen() }}><Icon.List fontSize="2.4rem" /></button>
        <ul className="collapse-nav">
          <li>
            <Link to="/about-us" passhref="true">
              <span className="nav-text-container" href="replace">About Us</span>
            </Link>
          </li>
          <li>
            <Link to="/prevention" passhref="true">
              <span className="nav-text-container" href="replace">Prevention</span>
            </Link>
          </li>
          <li>
            <Link to="/education" passhref="true">
              <span className="nav-text-container" href="replace">Education</span>
            </Link>
          </li>
          <li>
            <Link to="/communication" passhref="true">
              <span className="nav-text-container" href="replace">Communication</span>
            </Link>
          </li>
        </ul>
        <img className="nav-outro-image" src="/img/LetsTalk-4.svg" alt="" />
        <div className="nav-dropdown">
          <button className="primaryBackground primaryColor" id="btn-nav-profile"><Icon.PersonCircle fontSize="2rem" /></button>
          <div className="nav-dropdown-content">
            {(!sessionStorage.user) && <Button variant="link" onClick={props.handleShowSignUp}>Sign Up</Button>}
            {(!sessionStorage.user) && <Button variant="link" onClick={props.handleShowSignIn}>Sign In</Button>}
            {(sessionStorage.user) && <Button variant="link" onClick={props.handleShowLogout}>Logout</Button>}
          </div>
        </div>

        <div>
          <nav className={sidebar ? "sidebar active" : "sidebar"}>
            <div className={sidebarScreen ? "sidebarScreen active" : "sidebarScreen"} onClick={function (event) { showSidebar(); showSidebarScreen() }}></div>
            <ul>
              <li>
                <Link to="/" passhref="true">
                  <span className="nav-sidebar-text-container" href="replace"
                    onMouseEnter={() => setIsHouseShown(true)}
                    onMouseLeave={() => setIsHouseShown(false)}
                    onClick={function (event) { showSidebar(); showSidebarScreen() }}>
                    {isHouseShown && (<Icon.HouseFill className="sidebar-nav-icon secondaryColor" />)}
                    {!isHouseShown && (<Icon.House className="sidebar-nav-hidden secondaryColor" />)}
                Home
            </span>
                </Link>
              </li>
              <br /><br />
              <li>
                <Link to="/about-us" passhref="true">
                  <span className="nav-sidebar-text-container" href="replace"
                    onMouseEnter={() => setIsPeopleShown(true)}
                    onMouseLeave={() => setIsPeopleShown(false)}
                    onClick={function (event) { showSidebar(); showSidebarScreen() }}>
                    {isPeopleShown && (<Icon.PeopleFill className="sidebar-nav-icon secondaryColor" />)}
                    {!isPeopleShown && (<Icon.People className="sidebar-nav-hidden secondaryColor" />)}
                About Us
            </span>
                </Link>
              </li>
              <br /><br />
              <li>
                <Link to="/prevention" passhref="true">
                  <span className="nav-sidebar-text-container" href="replace"
                    onMouseEnter={() => setIsShieldShown(true)}
                    onMouseLeave={() => setIsShieldShown(false)}
                    onClick={function (event) { showSidebar(); showSidebarScreen() }}>
                    {isShieldShown && (<Icon.ShieldFillPlus className="sidebar-nav-icon secondaryColor" />)}
                    {!isShieldShown && (<Icon.ShieldPlus className="sidebar-nav-hidden secondaryColor" />)}
                Prevention
            </span>
                </Link>
              </li>
              <br /><br />
              <li>
                <Link to="/education" passhref="true">
                  <span className="nav-sidebar-text-container" href="replace"
                    onMouseEnter={() => setIsBookShown(true)}
                    onMouseLeave={() => setIsBookShown(false)}
                    onClick={function (event) { showSidebar(); showSidebarScreen() }}>
                    {isBookShown && (<Icon.BookFill className="sidebar-nav-icon secondaryColor" />)}
                    {!isBookShown && (<Icon.Book className="sidebar-nav-hidden secondaryColor" />)}
                Education
            </span>
                </Link>
              </li>
              <br /><br />
              <li>
                <Link to="/communication" passhref="true">
                  <span className="nav-sidebar-text-container" href="replace"
                    onMouseEnter={() => setIsMegaphoneShown(true)}
                    onMouseLeave={() => setIsMegaphoneShown(false)}
                    onClick={function (event) { showSidebar(); showSidebarScreen() }}>
                    {isMegaphoneShown && (<Icon.MegaphoneFill className="sidebar-nav-icon secondaryColor" />)}
                    {!isMegaphoneShown && (<Icon.Megaphone className="sidebar-nav-hidden secondaryColor" />)}
                Communication
            </span>
                </Link>
              </li>
              <br /><br />
              <br /><br />
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navigation;