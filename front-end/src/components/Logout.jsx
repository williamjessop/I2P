import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import './theme.scss';

function Logout(props) {
  const handleLogout = async (e) => {
    e.preventDefault();
    
    props.setToken(null);

    props.handleClose();
  };

    return (
      <div>
        <p>{props.show}</p>
        <Modal
          show={props.show}
          onHide={props.handleClose}
          centered
        >
          <Modal.Header closeButton variant="primary">
            <Modal.Title>Are You Sure You Want to Logout?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Button block variant="primary-outline" onClick={props.handleClose}>Cancel</Button>
            <Button block variant="info" onClick={handleLogout}>Continue</Button>
          </Modal.Body>
        </Modal>
      </div>
    );
  }

export default Logout;