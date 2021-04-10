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
                    <p>Fill this spot with the prevention text</p>
                    <img src="" alt="preventionimg"/>
                    <Row><br/></Row>
                </Container>
                
                <Container fluid>
                    <br/>
                    <h1>Education</h1>
                    <br/>
                    <Row>
                        <Col><img src="" alt="graph"/></Col>
                        <Col><p>Fill this spot with the education text</p></Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col><p>Fill this spot with more education text</p></Col>
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
                        <Col><p>Fill this spot with the prevention text</p></Col>
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