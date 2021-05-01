import React from "react";
import { Col, Row } from "react-bootstrap";

class Footer extends React.Component {
    render() {
        return (
            <div>
                <Row xs={3} className="marginFix">
                    <Col>
                    <p>Join Lets Talk to help solve and provent violence and
                         support resident assistants with conflicts </p>
                         
                    </Col>
                    <Col>
                    <p>Site Map</p>
                    <p>Home</p>
                    <p>About Us</p>
                    <p>Education</p>
                    <p>Comunication</p>
                    <p>Resources</p>
                    </Col>
                </Row>
                
            </div>
        );
    }
}

export default Footer;