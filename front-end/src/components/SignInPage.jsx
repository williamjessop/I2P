import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import "./theme.scss";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import { Redirect } from "react-router";

const urlBase =
  process.env.NODE_ENV === "production"
    ? "https://lets-talk-cmu.com/api"
    : "http://localhost:8000";

async function signInUser(info) {
  return fetch(urlBase + "/auth/signin", {
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
  const [redirect, setRedirect] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const response = await signInUser({ email, password });

    if (response.errors) {
      console.log(response.errors);
      setError(response.errors[0].error);
      setIsLoading(false);
    } else {
      setError(null);
      sessionStorage.setItem("user", JSON.stringify(response));
      setIsLoading(false);
      setRedirect("/education");
    }
  };

  return (
    <div style={{ padding: "50px" }}>
      {redirect ? (
        <Redirect to={redirect} />
      ) : (
        <Container>
          <Card bg="secondary">
            <Card.Header variant="primary">
              <Card.Title>Please Sign In To Access This Page</Card.Title>
            </Card.Header>
            <Card.Body>
              {error && <Alert variant="danger">{error}</Alert>}
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
            </Card.Body>
            <Card.Footer>
              {isLoading ? (
                <Spinner animation="border" variant="primary" />
              ) : (
                <Button block variant="primary" onClick={handleSubmit}>
                  Continue
                </Button>
              )}
            </Card.Footer>
          </Card>
        </Container>
      )}
    </div>
  );
}

export default SignIn;
