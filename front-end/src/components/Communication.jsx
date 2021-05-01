import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';

class Communication extends React.Component {
    render() {
        return (
            <div>
                <div className="bgImgCommunication" style={{ backgroundImage: `url("/img/Communication-bg.jpg")` }}>
                    <div>
                        <Container className="secondaryBackground Overlay" fluid>
                            <br />
                            <Row>
                                <Col>
                                <img src="/img/Branch1.svg" alt="" className="branchLeft" />
                                </Col>
                                <Col>
                                <h3 className="communicationHeader">Communication</h3>
                                </Col>
                                <Col>
                                <img src="/img/Branch1.svg" alt="" className="branchRight" />
                                </Col>
                            </Row>
                            <Row><br /></Row>
                        </Container>
                    </div>
                </div>
            </div>
        );
    }
}

export default Communication;