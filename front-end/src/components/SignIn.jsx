import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./theme.scss";
import Form from "react-bootstrap/Form";

async function signInUser(info) {
  return fetch("http://localhost:8000/api/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(info),
  }).then((data) => data.json());
}

function SignIn(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await signInUser({ email, password });
    //props.setToken(token);
    //check if login was successful

    //display toast about login

    //Close Modal
    console.log(token)
    props.handleClose();
  };

  return (
    <div>
      <p>{props.show}</p>
      <Modal show={props.show} onHide={props.handleClose} centered>
        <Modal.Header closeButton variant="primary">
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formEmail">
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button block variant="primary" onClick={handleSubmit}>
            Continue
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default SignIn;