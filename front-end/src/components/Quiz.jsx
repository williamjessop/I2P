import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import axios from "axios"

class Quiz extends React.Component {
    //fetch the state from the DB
    constructor(props){
        super(props);
        this.state = {
            answerChoices: [],
            answers: [],
            currentPage: 0,
            isLoaded: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handlePaging(direction){
        this.setState((state)=>{
            return {currentPage: state.currentPage+direction}
        });
    };

    componentDidMount(){
        fetch(`http://localhost:8000/quiz?name=${this.props.quiz}`, {headers:{"x-auth-token": this.props.user.token}})
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({pages: result, isLoaded:true});
                this.handlePaging(0);
            }
        );
        
    }

    handleSubmit(){
        let currentAnswers = {answers:[]};
        
        for(let i = 0; i < this.state.answers.length; i+=1){
            currentAnswers.answers[i] = {"id": i, "answer": this.state.answers[i]};
        }

        axios.post(`http://localhost:8000/quiz/grade?name=${this.props.quiz}`, currentAnswers, {headers:{"x-auth-token": this.props.user.token}})
        .then(res => {
            console.log(res);
            console.log(typeof(res.data));
        })
    }

    render() {
        if(!this.state.isLoaded){
            return("Loading...")
        }else{
            const { show, handleClose } = this.props;

            return (
                <div>
                    <Modal show={show} onHide={handleClose} centered size="xl">
                        <Modal.Header closeButton variant="primary">
                            <h2>Quiz 1</h2>
                        </Modal.Header>
                        <Modal.Body>
                            <h4>Question {this.state.currentPage+1}:</h4>
                            <p>{this.state.pages[this.state.currentPage].question}</p>
                            <hr/>

                            {this.state.pages[this.state.currentPage].answerChoices.map((answer, index) =>
                                <Form.Check
                                    type="radio"
                                    label={answer}
                                    name={`question${this.state.currentPage}`}
                                    checked={index === this.state.answers[this.state.currentPage]}
                                    onChange={()=>{this.setState((state)=>{
                                        let newAnswers = state.answers;
                                        newAnswers[state.currentPage] = index;
                                        return {answers: newAnswers};
                                    })}}
                                    key={index}
                                />
                            )}
                            
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
                                    onClick={()=>{
                                        this.handlePaging(1)
                                    }}
                                    disabled={(this.state.currentPage === this.state.pages.length-1)}
                                >Next</Button>
                            </Col>
                            {(this.state.currentPage === this.state.pages.length-1) && <Col>
                                <Button block variant="primary" onClick={this.handleSubmit}>Submit</Button>
                            </Col>}
                        </Modal.Footer>
                    </Modal>
                </div>
            );
        }
    }
}

export default Quiz;