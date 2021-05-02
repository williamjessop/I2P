import React from "react";
import { Container } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
class Home extends React.Component {
    render() {
        
        return (
            <div className="primaryBackground">
                <Container className="bgCarousel carouselWidth" fluid>
                    <Carousel controls={false} indicators={false}>
                        <Carousel.Item>
                            <div style={{height:"400px"}}>
                                <img className="bannerPhoto1"src="/img/helena-lopes-PGnqT0rXWLs-unsplash.jpg"alt="First slide"/>
                            </div>
                            <div className="bannerShader"></div>
                            <div className="preventionBannerText">
                        <p className="preventionLetsTalk">Lets Talk:</p>
                        <p className="preventionPrevention">Prevention...</p>
                        <p className="preventionUnity">...Unity</p>
                         </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div style={{height:"400px"}}>
                                <img
                                className="bannerPhoto2"
                                src="/img/Coms.jpg"
                                alt="First slide"
                                />
                            </div>
                            <div className="preventionBannerText">
                        <p className="preventionLetsTalk">Lets Talk:</p>
                        <p className="preventionPrevention">Prevention...</p>
                        <p className="preventionUnity">...Unity</p>
                         </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div style={{height:"400px"}}>
                                <img
                                className="bannerPhoto3"
                                src="/img/ComsBanner.jpg"
                                alt="First slide"
                                />
                            </div>
                            <div className="preventionBannerText">
                            <p className="preventionLetsTalk">Lets Talk:</p>
                            <p className="preventionPrevention">Prevention...</p>
                            <p className="preventionUnity">...Unity</p>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </Container>
                <Container className="secondaryBackground Overlay" fluid>
                    <br/>
                    <Row xs={1} sm={2}>
                        <Col> 
                            <img src="/img/Branch1.svg" alt="branch graphic" className="branchLeft branchScale"/>
                        </Col>
                        <Col> 
                            <h1 className="moveRight">Let’s talk about Prevention</h1>
                            <p>
                                Violence comes in all shapes and sizes, 
                                but that does not mean we are powerless.
                                 At Let's Talk we are a safe space for discussing violence and we look to teach you how
                                to protect yourself and your peers. 
                            </p>
                         </Col>
                        <Col>
                            <img src="/img/Branch1.svg" alt="branch graphic" className="branchCentered branchScale"/>
                        </Col>
                    
  
                    </Row>
                    <Row><br/></Row>
                </Container>
                
                <Container fluid>
                    <br/>
                    <Row xs={1}sm={1} md={2}>
                    <Col>
                        <h1>Let's talk about Education</h1>
                        <p className="educationText1">
                        Become a force of change in your community by taking a course 
                        to educate you on preventative measures for residents considering 
                        violent acts. Prevention starts with leaders but require the 
                        knowledge and skills to help you navigate the violent thoughts 
                        that your residents may be feeling. Learn more about the resources
                        available through our program to better equip you to handle the 
                        situations that may arise on your floor.
                        </p>
                    </Col>
                    <Col className="educationPhotoDrop">
                            <img className="educationPhoto dropShadow rounded" src="/img/I_Read_A_Book_A_Day.jpg" alt="branch graphic" />
                    </Col>
                    <Col>
                        <p className="educationText2">
                        Become a force of change in your community by taking a course 
                        to educate you on preventative measures for residents considering 
                        violent acts. Prevention starts with leaders but require the 
                        knowledge and skills to help you navigate the violent thoughts 
                        that your residents may be feeling. Learn more about the resources
                        available through our program to better equip you to handle the 
                        situations that may arise on your floor.
                        </p>
                    </Col>
                    </Row>
                    <br/>
                <br/>
                     <Button size="lg" href="#/education">Try our certification course!</Button>
                    <br/>
                    <br/>
                </Container>
                <br/>
                <Container className="secondaryBackground" fluid>
                    <br/>
                    <h1> Let's talk about Communication</h1>
                    <Row xs={1} sm={2}>
                    <Col>
                        <img className="comunicationPhoto dropShadow rounded"src="/img/ComsBanner.jpg" alt="preventionimg"/>
                    </Col>
                    <Col>
                        <p> Start the conversation. An integral part of social awareness
                            begins with communication. We encourage you to reach others 
                            through starting conversation - whether it is RA-to-peer or 
                            peer-to-peer. Review our resources to help guide you to better 
                            communicate with others, especially those you are concerned about. 
                        </p>
                        <Button size="lg" href="#/education">Link to Reach Out</Button>
                    </Col>
                    </Row>
                    <br/>
                    <Row><br/></Row>
                </Container>
            </div>
        );
    }
}

export default Home;