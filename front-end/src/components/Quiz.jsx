import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

class Quiz extends React.Component {
    //fetch the state from the DB
    constructor(){
        super();
        this.state = {
            answerChoices: [],
            currentPage: 0
        }
    }

    handlePaging(direction){
        this.setState((state) => ({
            currentPage: state.currentPage+=direction
        }));
        
        console.log(this.state.currentPage)
       
        let answerChoices = this.props.content.pages[this.state.currentPage].answers.map((answer) =>
                <Form.Check
                type="radio"
                label={answer}
                name="formHorizontalRadios"
            />
            
        );
        this.setState({answerChoices})
    };

    componentDidMount(){
        this.handlePaging(0);
    }

    render() {
        const { show, handleClose, handleSubmit } = this.props;

        return (
            <div>
                <Modal show={show} onHide={handleClose} centered size="xl">
                    <Modal.Header closeButton variant="primary">
                        <h2>Quiz 1</h2>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Question 1:</h4>
                        <p>How would you stop violence on campus?</p>
                        <hr/>
                        <Form>
                            {this.state.answerChoices}
                            
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Col>
                            <Button block variant="primary" onClick={()=>{this.handlePaging(-1)}}>Previous</Button>
                        </Col>
                        <Col>
                            <Button block variant="primary" onClick={()=>{this.handlePaging(1)}}>Next</Button>
                        </Col>
                        {false && <Col>
                            <Button block variant="primary" onClick={handleSubmit}>Submit</Button>
                        </Col>}
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default Quiz;