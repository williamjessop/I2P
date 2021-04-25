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
        this.setState((state)=>{
            return {currentPage: state.currentPage+direction}
        });
        this.setState((state) => {
            let newAnswers = this.props.content.pages[state.currentPage].answers.map((answer) =>
                    <Form.Check
                    type="radio"
                    label={answer}
                    name="formHorizontalRadios"
                />
            );
            return {
                answerChoices: newAnswers
            }
        });
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
                        <h4>Question {this.state.currentPage+1}:</h4>
                        <p>{this.props.content.pages[this.state.currentPage].question}</p>
                        <hr/>
                        <Form>
                            {this.state.answerChoices}
                            
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Col>
                            <Button 
                                block 
                                variant="primary" 
                                onClick={()=>{this.handlePaging(-1)}}
                                disabled={(this.state.currentPage === 0)}
                            >Previous</Button>
                        </Col>
                        <Col>
                            <Button 
                                block 
                                variant="primary" 
                                onClick={()=>{this.handlePaging(1)}}
                                disabled={(this.state.currentPage === this.props.content.pages.length-1)}
                            >Next</Button>
                        </Col>
                        {(this.state.currentPage === this.props.content.pages.length-1) && <Col>
                            <Button block variant="primary" onClick={handleSubmit}>Submit</Button>
                        </Col>}
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default Quiz;