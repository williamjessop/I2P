import React from "react";
import { Container,ListGroup } from "react-bootstrap";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import * as  Icon from 'react-bootstrap-icons';
import Card from 'react-bootstrap/Card'
import Footer from '../components/Footer';
class AboutUs extends React.Component {
    render() {
        return ( 
        <div>   
            <div className="bgimg" style={{backgroundImage: `url("/img/nazar-hrabovyi-lIuxlN0zSjs-unsplash.jpg")`}}>
            <div className="bgoverlay">
                <br/>
                <br/>
                <img className="logoBanner" src="/img/Lt-Svg.svg" alt="Logo" style={{width:"60%"}}/>
                <br/>
                <br/>
            
                <Container className="primaryBackground dropShadow" fluid>
                    <br/>
                    <Row   xs={1} sm={1} md={2}> 
                    <Col className="desktopMission">
                        <img className="dropShadow rounded" src="/img/LetsTalk-main.jpeg" alt="Lets-Talk-Main" style={{width:"70%"}}/>
                    </Col>
                    <Col>
                        <h1 className="titleNames" >Our Mission</h1>
                        <p className="infoWidthMission">
                        “Our goal at “Let’s Talk” is to prevent violence through education and 
                        better communication. In order to prevent violence, one must be aware of 
                        the warning signs, start the conversation, and then engage in next steps. 
                        Our certification course will better equip you with the knowledge you need 
                        to help those around you be safe.” 
                        </p>
                    </Col>
                    <Col className="mobileMission" >
                        <img className="dropShadow rounded" src="/img/LetsTalk-main.jpeg" alt="Lets-Talk-Main" style={{width:"70%"}}/>
                    </Col>
                    </Row>
                    
                    <Row><br/></Row>
                </Container>
                <div className="blurWidth">
                </div>
                <Container className="primaryBackground dropShadow " fluid>
                    <br/>
                    
                    <h1 className="titleNames">The Competiton</h1>
                    <p className="infoWidthComp"> Invent 2 Prevent is a program partnered with EdVenture to 
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
                    <p className="infoWidth"> Let’s Talk is a certification built by a group of college students 
                        driven to empower and educate student leaders and young adults 
                        about early warning signs of targeted violence and how to respond 
                        in a violent situation resulting from targeted violence. Targeted 
                        violence is any violent act that is directed </p>
                    <br/><br/>
                    
                    <Row xs={1} sm={2} lg={3} xl={5}>
                        <Col>
                            <img src="/img/LetsTalk-hatten.jpeg"  className="dropShadow rounded personalPhoto" alt="Tim"/>
                            <h5 className="nameOfMember">Dr. Tim Hatten</h5>
                            <div className="memberWidth">
                                <p className="descriptionOfMember">
                                Dr. Tim Hatten is completing his 26th year as Professor of 
                                Entrepreneurship and Marketing at Colorado Mesa University. 
                                He is a two-time Fulbright Scholar to Iceland and Denmark and 
                                author of a best-selling textbook on Small Business Management 
                                in its 7th edition. He finds his greatest satisfaction working 
                                with students in live business applications.
                                </p> 
                            </div>
                        </Col>
                        <Col>
                            <img src="/img/LetsTalk-jordan.jpeg"  className="dropShadow rounded personalPhoto" alt="Jordan"/>
                            <h5 className="nameOfMember">Jordan Griffin</h5>
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
                            <img src="/img/LetsTalk-profile1.jpeg"  className="dropShadow rounded personalPhoto" alt="Ashlyn"/>
                            <h5 className="nameOfMember">Ashlyn Brown</h5>
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
                            <img src="/img/LetsTalk-profile3.jpeg" className="dropShadow rounded personalPhoto" alt="Gabrielle"/>
                            <h5 className="nameOfMember">Gabrielle Christensen </h5>
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
                            <img src="/img/LetsTalk-profile2.jpeg" className="dropShadow rounded personalPhoto" alt="Hannah"/>
                            <h5 className="nameOfMember">Hannah Brown </h5>
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
                            <ListGroup.Item className="secondary"><Icon.Envelope style={{float:"left" }}/> letstalkcmu@gmail.com</ListGroup.Item>
                            <ListGroup.Item className="secondary"><Icon.GeoAlt  style={{float:"left" }}/> Colorado Mesa University, 1100 North Ave, Grand Junction, CO 81501</ListGroup.Item>
                        </ListGroup>
                    </Card>
                    <Row><br/></Row>
                </Container>
            </div>
            <Footer/>
            </div>
        </div>
        );
    }
}

export default AboutUs;