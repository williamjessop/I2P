import React from "react";
import { Modal, Button, Col, Row } from "react-bootstrap";

function Lesson(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Lesson {props.currentLesson}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </h4>
        <p>Current pages done: {props.progress}</p>
        <Row>
        <Col md={{span: 2 }}><Button>⇦</Button></Col>
        <Col md={{ span: 2}}><Button>⇨</Button></Col>
        </Row>
        
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Lesson;

//use a card component as the top and render in a text and optional image
//also provide a couple properties that control layout
//This will look like variant 1/2/3 (I don't feel like these should be separate components)
//Create a styles object and choose from 1 of 3
//Also conditionally render the image
