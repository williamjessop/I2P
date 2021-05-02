import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

class Footer extends React.Component {
    render() {
        return (
            <div className="primaryBackground">
                <br/>
                <div className="hl"/>
                <br/>
                <Row xs={3} className="marginFix">
                    <Col>
                    <p style={{display:"inline"}} >Join Lets Talk to help solve and provent violence and
                         support resident assistants with conflicts </p>
                         <img src="/img/LetsTalk-5.svg" alt="LetsTalk" style={{display:"inline", width:"30%", float:"center" }} />
                    </Col>
                    <Col>
                    <div class="vl"></div>
                    <p style={{display:"inline" }}>Site Map</p>
                    <br/>
                    <div style={{display:"inline" , float:"left"}} >
                        <Link to="/" passhref="true">
                            <span className="nav-text-container" href="replace">Home</span>
                        </Link>
                    </div>
                    <div style={{display:"inline" , float:"right"}} >
                        <Link to="/about-us" passhref="true">
                            <span className="nav-text-container" href="replace">About Us</span>
                        </Link>
                    </div>
                    <br/>
                    <br/>
                    <div style={{display:"inline" , float:"left"}} >
                        <Link to="/prevention" passhref="true">
                            <span className="nav-text-container" href="replace">Prevention</span>
                        </Link>
                    </div>
                    <div style={{display:"inline" , float:"right"}} >
                        <Link to="/education" passhref="true">
                            <span className="nav-text-container" href="replace">Education</span>
                        </Link>
                    </div>
                    </Col>
                    <Col>
                    <div className="vl"></div>
                    <p style={{display:"inline"}} >This website was designed and built by the 
                        Mesa Digital Experence team at Colorado Mesa 
                        University. 
                    </p>
                    <br/>
                    <br/>
                    <img src="/img/MDX_logo_Black.svg" alt="" style={{display:"inline", width:"50%", float:"center" }} />
                    </Col>
                </Row>
                <br/>
                <div className="hl"/>
                <br/>
            </div>
        );
    }
}

export default Footer;