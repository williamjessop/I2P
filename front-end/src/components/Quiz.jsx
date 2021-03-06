import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import axios from "axios";

const urlBase =
  process.env.NODE_ENV === "production"
    ? "https://lets-talk-cmu.com/api"
    : "http://localhost:8000";

class Quiz extends React.Component {
  //fetch the state from the DB
  constructor(props) {
    super(props);
    this.state = {
      answerChoices: [],
      answers: [],
      currentPage: 0,
      isLoaded: false,
      user: JSON.parse(sessionStorage.user),
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlePaging(direction) {
    this.setState((state) => {
      return { currentPage: state.currentPage + direction };
    });
  }

  handleSubmit() {
    let body = { answers: [], user: this.state.user.user };

    for (let i = 0; i < this.state.answers.length; i += 1) {
      body.answers[i] = { id: i, answer: this.state.answers[i] };
    }

    axios
      .post(`${urlBase}/quiz/grade?name=${this.props.quiz}`, body, {
        headers: { "x-auth-token": this.state.user.token },
      })
      .then((res) => {
        let newUser = this.state.user;
        newUser.appData = res.data.user.appData;
        sessionStorage.setItem("user", JSON.stringify(newUser));
        this.setState({ currentPage: 0 });
      });

    this.setState({ user: JSON.parse(sessionStorage.getItem("user")) });

    this.props.handleClose();
  }

  componentDidMount() {
    fetch(`${urlBase}/quiz?name=${this.props.quiz}`, {
      headers: { "x-auth-token": this.state.user.token },
    })
      .then((res) => res.json())
      .then((result) => {
        this.setState({ pages: result, isLoaded: true, currentPage: 0 });
        this.handlePaging(0);
      });
  }

  render() {
    if (!this.state.isLoaded) {
      return "Loading...";
    } else {
      const { show, handleClose } = this.props;

      return (
        <div>
          <Modal show={show} onHide={handleClose} centered size="xl">
            <Modal.Header closeButton variant="primary">
              <h2>{this.props.quizTitle}</h2>
            </Modal.Header>
            <Modal.Body>
              <h4>Question {this.state.currentPage + 1}:</h4>
              <p>{this.state.pages[this.state.currentPage].question}</p>
              <hr />

              {this.state.pages[this.state.currentPage].answerChoices.map(
                (answer, index) => (
                  <Form.Check
                    type="radio"
                    label={answer}
                    name={`question${this.state.currentPage}`}
                    checked={
                      index === this.state.answers[this.state.currentPage]
                    }
                    onChange={() => {
                      this.setState((state) => {
                        let newAnswers = state.answers;
                        newAnswers[state.currentPage] = index;
                        return { answers: newAnswers };
                      });
                    }}
                    key={index}
                  />
                )
              )}
            </Modal.Body>
            <Modal.Footer>
              <Col>
                <Button
                  block
                  variant="primary"
                  onClick={() => {
                    this.handlePaging(-1);
                  }}
                  disabled={this.state.currentPage === 0}
                >
                  Previous
                </Button>
              </Col>
              <Col>
                <Button
                  block
                  variant="primary"
                  onClick={() => {
                    this.handlePaging(1);
                  }}
                  disabled={
                    this.state.currentPage === this.state.pages.length - 1
                  }
                >
                  Next
                </Button>
              </Col>
              {this.state.currentPage === this.state.pages.length - 1 && (
                <Col>
                  <Button block variant="primary" onClick={this.handleSubmit}>
                    Submit
                  </Button>
                </Col>
              )}
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  }
}

export default Quiz;
