import React from "react";
import { Container } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
class Home extends React.Component {
    render() {
        
        return (
            <div>
                

                <Container className="bgCarousel carouselWidth" fluid>
                    <Carousel controls={true} indicators={false}>
                        <Carousel.Item>
                            <div style={{height:"400px"}}>
                                <img className="bannerPhoto1"src="/img/helena-lopes-PGnqT0rXWLs-unsplash.jpg"alt="First slide"/>
                            </div>
                            <h3  style={{color:"black"}}>Lets Talk: </h3>
                            <h3  style={{color:"black"}}>Violence Prevention </h3>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div style={{height:"400px"}}>
                                <img
                                className="bannerPhoto2"
                                src="/img/priscilla-du-preez-XkKCui44iM0-unsplash.jpg"
                                alt="First slide"
                                />
                            </div>
                            <h3 className="bannerOverlay"style={{color:"black"}}>Banner Image 2</h3>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div style={{height:"400px"}}>
                                <img
                                className="bannerPhoto3"
                                src="/img/ComsBanner.jpg"
                                alt="First slide"
                                />
                            </div>
                            <h3 className="bannerOverlay"style={{color:"black"}}>Banner Image 3</h3>
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
                    <Row xs={1} sm={2}>
                    <Col>
                        <h1>Let's talk about Education</h1>
                        <p>Become a force of change in your community by taking a course to educate you 
                        on violence prevention.</p>
                    </Col>
                    <Col>
                        <img className="dropShadow rounded" src="/img/education1.jpg" alt="branch graphic" style={{width:"70%"}}/>
                    </Col>
                    <Col>
                        <p>Become a force of change in your community by taking a course to educate you 
                        on violence prevention.</p>
                        <p>Learn more about the resources available through our 
                        program to better equip you to handle situations that may arise.</p>
                    </Col>
                    <Col>
                    <p>Learn more about our program to better equip you to handle sticky situations</p>
                        <Button size="lg" href="#/education">Try our certification course!</Button>
                    </Col>
                    </Row>
                    <br/>
                    <br/>
                </Container>
                <br/>
                <Container className="secondaryBackground" fluid>
                    <br/>
                    <h1> Let's talk about Communication</h1>
                    <Row xs={2} sm={2}>
                    <Col>
                        <p> Start the conversation. An integral part of social awareness
                             begins with communication. We encourage you to reach others 
                             through starting conversation - whether it is RA-to-peer or 
                             peer-to-peer. Review our resources to help guide you to better 
                             communicate with others, especially those you are concerned about. 
                        </p>

                    </Col>
                    <Col>
                        <img className="dropShadow rounded"src="/img/communication1.png" alt="preventionimg" style={{width:"70%"}}/>
                    </Col>
                    </Row>
                    <br/>
                    <Button size="lg" href="#/education">Link to Reach Out</Button>
                    <Row><br/></Row>
                </Container>
            </div>
        );
    }
}

export default Home;