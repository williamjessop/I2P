import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./theme.scss";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

const urlBase =
  process.env.NODE_ENV === "production"
    ? "https://lets-talk-cmu.com/api"
    : "http://localhost:8000";
const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

async function signUpUser(info) {
  return fetch(urlBase + "/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(info),
  }).then((data) => data.json());
}

function SignUp(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [privacyPolicyChoice, setPrivacyPolicyChoice] = useState(false);

  const [warning, setWarning] = useState(false);

  //this is for controlling email opt in, it is not needed for the first version of the website
  //const [emailOptIn, setEmailOptIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!emailRegexp.test(email)) {
      setWarning("Please enter a valid email address");
    } else if (password !== confirmPassword) {
      setWarning("Passwords do not match");
      setConfirmPassword("");
      setPassword("");
    } else if (password === "") {
      setWarning("Password cannot be empty");
    } else if (privacyPolicyChoice === false) {
      setWarning("Please accept privacy policy to sign up");
    } else {
      const response = await signUpUser({
        email,
        password,
        confirmPassword,
        firstName,
        lastName,
      });

      console.log(response);

      if (response.errors) {
        setWarning(response.errors[0].error);
        setPassword("");
        setConfirmPassword("");
        setEmail("");
        setFirstName("");
        setLastName("");
      } else {
        setWarning(false);
        sessionStorage.setItem("user", JSON.stringify(response.result));
        props.handleClose();
      }
    }
  };

  return (
    <div>
      <p>{props.show}</p>
      <Modal show={props.show} onHide={props.handleClose} centered>
        <Modal.Header closeButton variant="primary">
          <Modal.Title>Create an Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {warning && <Alert variant="danger">{warning}</Alert>}
          <Form>
            <Form.Group controlId="firstName">
              <Form.Control
                type="text"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
              />
            </Form.Group>
            <Form.Group controlId="lastName">
              <Form.Control
                type="text"
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </Form.Group>
            <Form.Group controlId="formConfirmPassword">
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
              />
            </Form.Group>
            <Form.Group controlId="formEmailOptIn">
              <Form.Check
                type="checkbox"
                label="Opt in to receive emails from us"
              />
            </Form.Group>
            <Form.Group controlId="formPolicy">
              <Form.Check
                type="checkbox"
                label="By checking this you agree to out policy"
                onChange={(e) => setPrivacyPolicyChoice(e.target.checked)}
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

export default SignUp;
