import React, {useState} from 'react';
import { Button, Modal } from 'react-bootstrap';
import './theme.scss';
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'

const urlBase = process.env.NODE_ENV === 'production' ? '100.26.231.32:80' : 'http://localhost:8000'

async function signUpUser(info) {
  return fetch(urlBase+'/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(info)
  })
  .then(data => data.json())
}

function SignUp(props) {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();

    const [showWarning, setShowWarning] = useState(false);


    const handleSubmit = async e => {
      e.preventDefault();
      if(password===confirmPassword){
        const response = await signUpUser({
          email,
          password,
          confirmPassword,
          firstName,
          lastName
        });

        //verify sign up was successful

        setShowWarning(false);
      }else{
        setShowWarning(true);
      }
    }

    return (
      <div>
        <p>{props.show}</p>
        <Modal
          show={props.show}
          onHide={props.handleClose}
          centered
        >
          <Modal.Header closeButton variant="primary">
            <Modal.Title>Create an Account</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          {showWarning && <Alert variant="danger">Passwords do not match.</Alert>}
          <Form>
                <Form.Group controlId="firstName">
                    <Form.Control type="text" placeholder="First Name" onChange={e => setFirstName(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="lastName">
                    <Form.Control type="text" placeholder="Last Name" onChange={e => setLastName(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="formEmail">
                    <Form.Control type="email" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="formConfirmPassword" onChange={e => setConfirmPassword(e.target.value)}>
                    <Form.Control type="password" placeholder="Confirm Password" />
                </Form.Group>
                <Form.Group controlId="formEmailOptIn">
                    <Form.Check type="checkbox" label="Opt in to receive emails from us" />
                </Form.Group>
                <Form.Group controlId="formPolicy">
                    <Form.Check type="checkbox" label="By checking this you agree to out policy" />
                </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button block variant="primary" onClick={handleSubmit}>Continue</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

export default SignUp;