import React from "react";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import * as Icon from "react-bootstrap-icons";

class Communication extends React.Component {
  render() {
    return (
      <div>
        <div
          className="bgImgCommunication"
          style={{
            background: `url("/img/Communication-bg.jpg")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "center",
          }}
        >
          <div>
            <Container>
              <Row className="pageSplit"></Row>
            </Container>
            <Container>
              <Row className="pageSplit"></Row>
            </Container>
            <Container>
              <Row className="pageSplit"></Row>
            </Container>
            <Container
              className="secondaryBackground Overlay dropShadow"
              style={{ textShadow: "text-shadow: 0px 10px 10px #0000001f;" }}
            >
              <h1 style={{ marginBottom: "0px" }}>Let's Talk: Communication</h1>
            </Container>
            <Container
              className="secondaryBackground Overlay dropShadow"
              style={{ paddingBottom: "50px" }}
            >
              <Row>
                <Col>
                  <h3 style={{ paddingTop: "25px" }}>Start the Conversation</h3>
                </Col>
                <Col id="commsPaddingRight"></Col>
              </Row>
              <Row>
                <br />
              </Row>
              <Row xs={1} sm={1} md={3} lg={2}>
                <Col>
                  <p>
                    An integral part of social awareness begins with
                    communication. We encourage you to reach others through
                    starting conversation - whether it is RA-to-peer or
                    peer-to-peer. Review our resources to help guide you to
                    better communicate with others, especially those you are
                    concerned about.
                  </p>
                </Col>
                <Col>
                  <div>
                    <img
                      src="/img/communication1.png"
                      alt=""
                      className="educationPhoto educationPhotoDrop"
                    />
                  </div>
                </Col>
              </Row>
            </Container>
            <Container>
              <Row className="pageSplit"></Row>
            </Container>
            <Container
              className="secondaryBackground Overlay dropShadow"
              style={{ padding: "50px" }}
            >
              <Col>
                <p>
                  Communication is key to understanding and analyzing
                  situations. Starting the conversation will acknowledge concern
                  and allow for clarity. Some resources that can be most helpful
                  in violent, moderately violent, and non-violent situations can
                  be:
                </p>
              </Col>
              <Accordion defaultActiveKey="-1">
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    911 (Local Emergency Contact) <Icon.List fontSize="1rem" />
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      You can always reach out to your local emergency contact
                      (911), don't hesitate!
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="1">
                    RA Administration <Icon.List fontSize="1rem" />
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      RA Administration is here to help you.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="2">
                    Coordinator on Duty <Icon.List fontSize="1rem" />
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body>
                      The Coordinator on Duty is available any time you need
                      them, they're there to help you!
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="3">
                    Student Wellness Center <Icon.List fontSize="1rem" />
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="3">
                    <Card.Body>
                      The Student Wellness Center can offer many different
                      services, reach out!
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Container>
            <Container>
              <Row className="pageSplit"></Row>
            </Container>
            <Container>
              <Row className="pageSplit"></Row>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

export default Communication;
