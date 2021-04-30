import React from "react";
import { Col, Row } from "react-bootstrap";

class Footer extends React.Component {
    render() {
        return (
            <div>
                <Row xs={3} sm={3}>
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
                    <Col>
                        <p>This website was made possible by Mesa Digital 
                            Experince team who are students at Colorado 
                            Mesa University
                        </p>
                        <img src="/img/MDX_logo_Black.svg" alt="mdxlogo" style={{width:"100%", padding:"20px"}}/>
                    </Col>
                </Row>
                
            </div>
        );
    }
}

export default Footer;