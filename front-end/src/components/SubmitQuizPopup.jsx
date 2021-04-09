import React from 'react';
import {useState} from 'react';
import { Button, Modal } from 'react-bootstrap';
import './theme.scss';

function SubmitQuizPopup() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <div>
        <Button variant='primary' onClick={handleShow}>Finish Test</Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header style={{justifyContent: 'center'}}>
            <Modal.Title>Are you sure you want to submit?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Once you submit, all answers are final and will be graded automatically. 
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Don't Submit
            </Button>
            <Button variant="primary">Submit</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

export default SubmitQuizPopup;