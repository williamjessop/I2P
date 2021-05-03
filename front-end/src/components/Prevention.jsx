import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Container, Carousel } from "react-bootstrap";

class Prevention extends React.Component {
    render() {
        return (
            <div>
                <Container className="bgCarousel carouselWidth" fluid>
                    <Carousel controls={false} indicators={false}>
                        <Carousel.Item>
                            <div style={{ height: "400px" }}>
                                <img
                                    className="preventionPhoto1"
                                    src="/img/Prevention-Carousel-1.jpg"
                                    alt="First slide"
                                />
                            </div>
                            <div className="preventionBannerText">
                                <p className="preventionPrevention">Coming</p>
                                <p className="preventionUnity">Together</p>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div style={{ height: "400px" }}>

                                <img
                                    className="preventionPhoto2"
                                    src="/img/Prevention-Carousel-2.jpg"
                                    alt="Second slide"
                                />

                            </div>
                            <div className="preventionBannerText">
                                <p className="preventionLetsTalk">Helping</p>
                                <p className="preventionUnity">One Another</p>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div style={{ height: "400px" }}>
                                <img
                                    className="preventionPhoto3"
                                    src="/img/Prevention-Carousel-3.jpg"
                                    alt="Third slide"
                                />
                            </div>
                            <div className="preventionBannerText">
                                <p className="preventionLetsTalk">Unifying</p>
                                <p className="preventionPrevention">Each Other</p>
                            </div>

                        </Carousel.Item>
                    </Carousel>
                </Container>
                <Container fluid className="dropShadow">
                    <br />
                    <Row xs={1} sm={1} md={2}>
                        <Col>
                            <h1>Let's Talk: Prevention</h1>
                            <p className="educationText1">
                                Our goal at “Let’s Talk” is to prevent violence through education and better communication. In order to prevent violence, one must be aware of the warning signs, start the conversation, and then engage in next steps. Our certification course will better equip you with the knowledge you need to help those around you be safe.
                            </p>
                        </Col>
                        <Col className="educationPhotoDrop">
                            <img className="educationPhoto dropShadow rounded" src="/img/unity.jpg" alt="" />
                        </Col>
                        <Col>
                            <p className="educationText2">
                                Our goal at “Let’s Talk” is to prevent violence through education and better communication. In order to prevent violence, one must be aware of the warning signs, start the conversation, and then engage in next steps. Our certification course will better equip you with the knowledge you need to help those around you be safe.
                            </p>
                            <Button size="lg" href="/education">Try our certification course!</Button>
                        </Col>
                    </Row>
                    <br />
                    <br />
                    <br />
                    <br />
                </Container>
                <Container fluid className="secondaryBackground dropShadow">
                    <br />
                    <Row xs={1} sm={1} md={2}>
                        <Col className="educationPhotoDrop">
                            <img className="educationPhoto dropShadow rounded" src="/img/PreventionsCOlors.jpg" alt="" />
                        </Col>
                        <Col>
                            <h1>Prevention is Action</h1>
                            <p className="educationText1">
                                Prevention is where it all begins. If we can prevent a situation from happening, in result violence will be lessened through time. Prevention is key. Knowledge of predisposed behavior of violence is the beginning of prevention.
                            </p>
                            <Button id="preventionHiddenLarge" size="lg" href="/education">Try our certification course!</Button>
                        </Col>
                        <Col>
                            <p className="educationText2">
                                Prevention is where it all begins. If we can prevent a situation from happening, in result violence will be lessened through time. Prevention is key. Knowledge of predisposed behavior of violence is the beginning of prevention.
                            </p>
                            <Button id="preventionHiddenSmall" size="lg" href="/education">Try our certification course!</Button>
                        </Col>
                    </Row>
                    <br />
                    <br />
                    <br />
                    <br />
                </Container>
                <Container fluid className="dropShadow">
                    <br />
                    <Row xs={1} sm={1} md={2}>
                        <Col>
                            <h1>The Benefit of Knowing</h1>
                            <p className="educationText1">
                                Knowledge of warning signs and potential violence is greatly beneficial to college campuses alike. Becoming certified is based on competency of the knowledge and resources presented. Completing this certification can instill a confidence in starting conversations and contacting the right resources that can help in preventing violent acts before they occur.
                            </p>
                        </Col>
                        <Col className="educationPhotoDrop">
                            <img className="educationPhoto dropShadow rounded" src="/img/Unity2.jpg" alt="" />
                        </Col>
                        <Col>
                            <p className="educationText2">
                                Knowledge of warning signs and potential violence is greatly beneficial to college campuses alike. Becoming certified is based on competency of the knowledge and resources presented. Completing this certification can instill a confidence in starting conversations and contacting the right resources that can help in preventing violent acts before they occur.
                            </p>
                            <Button size="lg" href="/education">Try our certification course!</Button>
                        </Col>
                    </Row>
                    <br />
                    <br />
                    <br />
                    <br />
                </Container>
                <br />
            </div>
        );
    }
}

export default Prevention;