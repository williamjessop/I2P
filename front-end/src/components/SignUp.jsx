import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import './theme.scss';
import Form from 'react-bootstrap/Form'

function SignUp(props) {

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
          <Form>
                <Form.Group controlId="formFullName">
                    <Form.Control type="text" placeholder="Full Name" />
                </Form.Group>

                <Form.Group controlId="formEmail">
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group controlId="formPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group controlId="formConfirmPassword">
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
            <Button block variant="primary">Continue</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

export default SignUp;