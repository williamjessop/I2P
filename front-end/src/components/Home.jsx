import React from "react";
import { Container } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Footer from './Footer'

class Home extends React.Component {
    render() {
        return (
            <div>
                <Carousel indicators={false}>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="/bannerImage.svg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="/bannerImage.svg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        
                        </Carousel.Caption>
                    </Carousel.Item>
                
                </Carousel>
                <Container className="secondaryBackground" fluid>
                    <br/>
                    <h1>Prevention</h1>
                    <p>Come to us, to prevent violence in our community. 
                        Violence comes in all shapes and sizes, 
                        but there are prevalent concepts that can be taught to anyone to 
                        look out for this unwanted behavior.
                         We are a safe space for discussing violence and we look to teach you the 
                         steps to protect yourself and your peers. Let’s talk about prevention 
                         and let us aid in the prevention of violence. </p>
                    <img src="" alt="preventionimg"/>
                    <Row><br/></Row>
                </Container>
                
                <Container fluid>
                    <br/>
                    <h1>Education</h1>
                    <br/>
                    <Row>
                        <Col><img src="" alt="graph"/></Col>
                        <Col><p>Become a force of change in your community by taking a course to educate you 
                            on preventative measures for residents considering violent acts. 
                            Prevention starts with leaders but require the knowledge and skills to 
                            help you navigate the violent thoughts that your residents may be feeling.</p></Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col><p>Learn more about the resources available through our 
                            program to better equip you to handle the situations that may arise on your floor.</p></Col>
                        <Col><img src="" alt="graphic"/></Col>
                    </Row>
                    <br/>
                    <Button size="lg" href="#/education">Get Educated</Button>
                    <br/>
                </Container>
                <br/>
                <Container className="secondaryBackground" fluid>
                    <br/>
                    <h1>Communication</h1>
                    <Row>
                        <Col><p>o	Start the conversation. An integral part of social awareness begins with communication. 
                            We encourage you to reach others through starting conversation - whether it is RA-to-peer or peer-to-peer. 
                            Review our resources to help guide you to better communicate with others, 
                            especially those you are concerned about.</p></Col>
                        <Col><img src="" alt="preventionimg"/></Col>
                    </Row>
                    <br/>
                    <Button size="lg" href="#/education">Link to Reach Out</Button>
                    <Row><br/></Row>
                </Container>
                <br/>
                <Footer/>
            </div>
        );
    }
}

export default Home;