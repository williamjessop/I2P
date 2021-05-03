import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

class Footer extends React.Component {
    render() {
        return (
            <div className="primaryBackground">
                <br />
                <div className="hl" />
                <br />
                <Row xs={3} className="marginFix">
                    <Col id="footerLeft">
                        <p className="noneFooterText" >Join Lets Talk to help solve and prevent violence and
                         support Resident Assistants with conflicts </p>
                        <Col>
                        </Col>
                        <Col>
                            <img className="footerLetsTalk" src="/img/LetsTalk-5.svg" alt="LetsTalk"/>
                        </Col>
                    </Col>
                    <Col id="footerCenter">
                        <p style={{ display: "inline" }}>Site Map</p>
                        <br />
                        <div style={{ display: "inline", float: "left" }} >
                            <Link to="/" passhref="true">
                                <span className="hiddenFooterText" href="replace">Home</span>
                            </Link>
                        </div>
                        <div style={{ display: "inline", float: "right" }} >
                            <Link to="/about-us" passhref="true">
                                <span className="hiddenFooterText" href="replace">About Us</span>
                            </Link>
                        </div>
                        <br />
                        <br />
                        <div style={{ display: "inline", float: "left" }} >
                            <Link to="/prevention" passhref="true">
                                <span className="hiddenFooterText" href="replace">Prevention</span>
                            </Link>
                        </div>
                        <div style={{ display: "inline", float: "right" }} >
                            <Link to="/education" passhref="true">
                                <span className="hiddenFooterText" href="replace">Education</span>
                            </Link>
                        </div>
                        <br />
                        <br />
                        <div style={{ display: "inline"}} >
                            <Link to="/communication" passhref="true">
                                <span className="hiddenFooterText" href="replace">Communication</span>
                            </Link>
                        </div>
                    </Col>
                    <Col id="footerRight">
                        <p className="noneFooterText">This website was designed and built by the
                        Mesa Digital Experence team at Colorado Mesa
                        University.
                    </p>
                        <img className="footerMDX" src="/img/MDX_logo_Black.svg" alt=""/>
                    </Col>
                </Row>
                <br />
                <div className="hl" />
                <br />
            </div>
        );
    }
}

export default Footer;