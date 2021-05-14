import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./theme.scss";

function Logout(props) {
  const handleLogout = async (e) => {
    e.preventDefault();

    sessionStorage.removeItem("user");

    props.handleClose();
  };

  return (
    <div>
      <p>{props.show}</p>
      <Modal show={props.show} onHide={props.handleClose} centered>
        <Modal.Header closeButton variant="primary">
          <Modal.Title>Are You Sure You Want to Logout?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button block variant="primary-outline" onClick={props.handleClose}>
            Cancel
          </Button>
          <Button block variant="info" onClick={handleLogout}>
            Continue
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Logout;
