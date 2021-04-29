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
        <Carousel controls={false} indicators={false}>
                    <Carousel.Item>
                        <div style={{height:"400px"}}>
                        <img
                        className="bannerPhoto1"
                        src="/img/helena-lopes-PGnqT0rXWLs-unsplash.jpg"
                        alt="First slide"
                        />
                        </div>
                        <h3 className="Overlay" style={{color:"black"}}>Banner Image 1</h3>
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
                    <h1>Prevention</h1>
                    <p>
                        Violence comes in all shapes and sizes, 
                        but that does not mean we are powerless.
                         At Let's Talk we are a safe space for discussing violence and we look to teach you how
                         to protect yourself and your peers. Let’s talk about prevention. </p>
                    <img src="/img/Branch1.svg" alt="branch graphic" className="branchGraphic1"/>
                    <Row><br/></Row>
                </Container>
                
                <Container fluid>
                    <br/>
                    <h1>Education</h1>
                    <br/>
                    <Row className="align-items-center">
                        <Col><img src="/img/chart.png" alt="chart" style={{width:"50%"}}/></Col>
                        <Col><p>Become a force of change in your community by taking a course to educate you 
                            on violence prevention. 
                            </p></Col>
                    </Row>
                    <br/>
                    <br/>
                    <br/>
                    <Row className="align-items-center">
                        <Col><p>Learn more about the resources available through our 
                            program to better equip you to handle situations that may arise.</p></Col>
                        <Col><img src="/img/education1.jpg" alt="branch graphic" style={{width:"70%"}}/></Col>
                    </Row>
                    <br/>
                    <Button size="lg" href="/education">Click To Get Educated</Button>
                    <br/>
                </Container>
                <br/>
                <Container className="secondaryBackground" fluid>
                    <br/>
                    <h1>Communication</h1>
                    <Row className="align-items-center">
                        <Col><p>Start the conversation. It all starts with communication. 
                            We encourage you to reach out - whether it is RA-to-peer or peer-to-peer. 
                            </p>
                            <p>
                            Review our resources to help guide you to better communicate with others.</p></Col>
                        <Col><img src="/img/communication1.png" alt="preventionimg" style={{width:"70%"}}/></Col>
                    </Row>
                    <br/>
                    <Button size="lg" href="/education">Link to Reach Out</Button>
                    <Row><br/></Row>
                </Container>
            </div>
        );
    }
}

export default Home;