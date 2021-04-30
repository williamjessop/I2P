import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./theme.scss";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert"
import Spinner from "react-bootstrap/Spinner"

async function signInUser(info, setLoggedIn) {
  return fetch("http://localhost:8000/auth/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(info),
  }).then(
    (data) => data.json(),
    (error) => error
  );
}

function SignIn(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    
    const response = await signInUser({ email, password });

    if(response.errors){
      console.log(response.errors);
      setError(response.errors[0].error);
      setIsLoading(false);
    }else{
      setError(null);
      props.setUser(response);
      sessionStorage.setItem("user", JSON.stringify(response));
      setIsLoading(false);
      props.handleClose();
    }
  };

  return (
    <div>
      <p>{props.show}</p>
      <Modal show={props.show} onHide={props.handleClose} centered backdrop="static">
        <Modal.Header closeButton={props.showClose} variant="primary">
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {error && <Alert variant="danger">
          {error}
        </Alert>}
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
          {isLoading ? <Spinner animation="border" variant="primary" />
            :
            <Button block variant="primary" onClick={handleSubmit}>
              Continue
            </Button>
          }
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default SignIn;
