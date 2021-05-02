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
                    <Carousel controls={true} indicators={false}>
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
                                <p className="preventionUnity">one another</p>
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
                                <p className="preventionPrevention">Eachother</p>
                            </div>
                        
                        </Carousel.Item>
                    </Carousel>
                </Container>
                <Container fluid className="dropShadow">
                    <br/>
                    <Row xs={1}sm={1} md={2}>
                    <Col>
                        <h1>Let's reduce the risk</h1>
                        <p className="educationText1">
                        Text thats talks about prevention 3-4 sentences i guess
                        </p>
                    </Col>
                    <Col className="educationPhotoDrop">
                            <img className="educationPhoto dropShadow rounded" src="/img/unity.jpg" alt="branch graphic" />
                    </Col>
                    <Col>
                        <p className="educationText2">
                        same text as above, this is for responcive so when added coppy from educationtext1 and change the photo
                        </p>
                    </Col>
                    </Row>
                    <br/>
                    <br/>
                    <Button size="lg" href="#/education">Try our certification course!</Button>
                    <br/>
                    <br/>
                </Container>
                <Container fluid className="secondaryBackground dropShadow" style={{zIndex:"4" }}>
                    <br/>
                    <Row xs={1}sm={1} md={2}>
                    <Col className="educationPhotoDrop">
                            <img className="educationPhoto dropShadow rounded" src="/img/PreventionsCOlors.jpg" alt="branch graphic" />
                    </Col>
                    <Col>
                        <h1>Possible add of more text</h1>
                        <p className="educationText1">
                        Text thats talks about prevention 3-4 sentences i guess
                        </p>
                    </Col>
                    <Col>
                        <p className="educationText2">
                        same text as above, this is for responcive so when added coppy from educationtext1 and change the photo
                        </p>
                    </Col>
                    </Row>
                    <br/>
                <br/>
                     <Button size="lg" href="#/education">Try our certification course!</Button>
                    <br/>
                    <br/>
                </Container>
            </div>
        );
    }
}

export default Prevention;