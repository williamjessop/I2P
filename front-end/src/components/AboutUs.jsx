import React from "react";
import { Container,ListGroup } from "react-bootstrap";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import * as  Icon from 'react-bootstrap-icons';
import Card from 'react-bootstrap/Card'
class AboutUs extends React.Component {
    render() {
        return (
            <div style={{ 
                backgroundImage: `url("/img/nazar-hrabovyi-lIuxlN0zSjs-unsplash.jpg")`}}>
            <br/>
                <br/>
                <img className="logoBanner" src="/img/Lt-Svg.svg" alt="chart" style={{width:"60%"}}/>
                <br/>
                <br/>
            
                <Container className="primaryBackground dropShadow" fluid>
                    <br/>
                    <h1 style={{float:"left" }} >Who we are</h1>
                    <br/>
                    <br/>
                    <br/>
                    <p> Let’s Talk is a certification built by a group of college students 
                        driven to empower and educate student leaders and young adults 
                        about early warning signs of targeted violence and how to respond 
                        in a violent situation resulting from targeted violence. Targeted 
                        violence is any violent act that is directed </p>
                    <Row><br/></Row>
                </Container>
                <br/>
                <br/>	
                <br/>
                <br/>
                <Container className="primaryBackground dropShadow" fluid>
                    <br/>
                    
                    <h1>The Competition</h1>
                    <p> Invent 2 Prevent is a program partnered with EdVenture to 
                        encourage students in joining a nation-wide university-level
                         competition based on a specific current issue. This Spring 2021, 
                         Invent 2 Prevent challenged students to create a project based on 
                         Prevention of Targeted Violence and Terrorism in the United States. 
                         The client this project is proposed for is the Department of 
                         Homeland Security. Students are to create an initiative or a product
                          or both that best promotes the prevention goal.  </p>
                    <Row><br/></Row>
                </Container>
                <Container className="secondaryBackground dropShadow" fluid>
                    <br/>
                    <h1>Meet the Team</h1>
                    <br/><br/>
                    
                    <Row xs={1} sm={2} lg={3} xl={5}>
                        <Col>
                            <img src="/img/personFiller.jpg"  className="dropShadow rounded personalPhoto" alt=""/>
                            <h5 className="nameOfMember personalPhoto">Hatten</h5>
                            <div className="memberWidth">
                                <p className="descriptionOfMember">
                                    Invent 2 Prevent is a program partnered with EdVenture to 
                                    encourage students in joining a nation-wide university-level
                                </p> 
                            </div>
                        </Col>
                        <Col>
                            <img src="/img/personFiller.jpg"  className="dropShadow rounded personalPhoto" alt=""/>
                            <h5 className="nameOfMember personalPhoto">Jordan Griffin</h5>
                            <div className="memberWidth">
                                <p className="descriptionOfMember">
                                Jordan Griffin is a senior at Colorado Mesa University
                                majoring in Business Administration with a concentration 
                                on marketing. She is currently graduating a semester early 
                                with aspirations to continue on in the medical device 
                                industry. Her time at Mesa is spent being a part of the
                                Gamma Phi Beta sorority and focusing on her academic career. 
                                </p> 
                            </div>
                        </Col>
                        <Col>
                            <img src="/img/personFiller.jpg"  className="dropShadow rounded personalPhoto" alt=""/>
                            <h5 className="nameOfMember personalPhoto">Ashlyn Brown</h5>
                            <div className="memberWidth">
                                <p className="descriptionOfMember">
                                    Ashlyn Brown is a Senior at Colorado Mesa University 
                                    majoring in Business Administration with a concentration 
                                    in Marketing. She has been a student employee with the
                                    Academic Affairs Department, Testing Center, and Athletics 
                                    Department throughout her 4 years. She played for the CMU 
                                    Women’s Rugby team and is a regular Outdoor Program attendee.
                                </p> 
                            </div>
                        </Col>  
                        <Col>
                            <img src="/img/personFiller.jpg" className="dropShadow rounded personalPhoto" alt=""/>
                            <h5 className="nameOfMember personalPhoto">Gabrielle Christensen </h5>
                            <div className="memberWidth">
                                <p className="descriptionOfMember">
                                Gabrielle Christensen is a Senior at Colorado Mesa
                                University majoring in Business Administration with 
                                a concentration in Marketing. She has been RA for CMU, 
                                held a leadership position for the Fellowship of Christian 
                                Athletes, and worked in the Athletic Department while at CMU. 
                                She aspires to work in the sport marketing industry while 
                                also contributing to non-profits in her area. 
                            </p> 
                            </div>
                        </Col>
                        <Col>
                            <img src="/img/personFiller.jpg" className="dropShadow rounded personalPhoto" alt=""/>
                            <h5 className="nameOfMember personalPhoto">Hannah Brown </h5>
                            <div className="memberWidth">
                                <p className="descriptionOfMember">
                                    Hannah Brown is a Junior at Colorado Mesa University
                                    majoring in Hospitality Management and Marketing. 
                                    She is also captain of the Nordic Ski Team and has 
                                    been an RA for two years at CMU.
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <br/><br/>
                    <Row><br/></Row>
                </Container>
                <Container className="primaryBackground" fluid>
                    <br/>
                    <Row><br/></Row>
                    <h1>Contacting us</h1>
                    <Card style={{ width: '18rem',position: 'inline', marginLeft: "auto", marginRight: "auto"}}>
                            <ListGroup variant="flush">
                            <ListGroup.Item className="secondary"><Icon.Telephone style={{float:"left" }}/> +123 456 7891</ListGroup.Item>
                            <ListGroup.Item className="secondary"><Icon.Envelope style={{float:"left" }}/> john.doe@mail.com</ListGroup.Item>
                            <ListGroup.Item className="secondary"><Icon.GeoAlt  style={{float:"left" }}/> 123 mainstreet ave</ListGroup.Item>
                        </ListGroup>
                    </Card>
                    <Row><br/></Row>
                </Container>
                </div>
        );
    }
}

export default AboutUs;