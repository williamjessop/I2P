import React from "react";
import Quiz from './Quiz'
import { Button, Card } from 'react-bootstrap';

class Education extends React.Component {
    //fetch the state from the DB
    constructor(props) {
        super(props);
        this.submitQuiz = this.submitQuiz.bind(this);
        this.hideQuiz = this.hideQuiz.bind(this);

        this.state = {
            activeQuiz: 0,
            activeQuizTest: "Quiz1",
            showQuiz: false,
            lessons: [
                {
                    pages: [
                        {content: "", img: ""},
                        {content: "", img: ""},
                        {content: "", img: ""}
                    ],
                    progress: 0
                }
            ],
            quizzes: [
                {
                    pages: [
                        {question: "this is question 1", answers: ["one", "two", "three", "four"], choice: 0},
                        {question: "This is question 2", answers: ["this", "is", "a", "test"], choice: 0},
                    ],
                    //ATTEMPTS NEED TO BE STORED IN THE USER OBJECT NOT HERE!
                    attempts:[
                        {score: 0},
                        {score: 1}
                    ],
                    currentAttempt: [
                        {question1: "choice a"}
                    ]
                }
            ]
        };
    }

    hideQuiz() {this.setState({showQuiz: false})}
    submitQuiz() {console.log("submit the quiz")}

    render() {
        return (
            <div className="dash-container">
                <div className="dash-lesson">
                    <Card className="dash-lesson-card">
                        <div className="dash-lesson-card-content dash-lesson-header">
                            <div className="dash-lesson-title">
                                Lesson 1
                                </div>
                            <div className="dash-lesson-title-button">
                                <Button>Begin Lesson</Button>
                            </div>
                        </div>
                        <div className="dash-lesson-card-content dash-lesson-content">
                            <div className="dash-lesson-description">
                                This lesson covers lesson content in a lesson-like manner, rendering a lesson (how many times can I say lesson in this lesson example description lesson).
                                </div>
                            <div className="dash-lesson-description-button">
                                <Button>Begin Lesson 1 Quiz</Button>
                            </div>
                        </div>
                    </Card>
                </div>
                <button onClick={() => {this.setState({showQuiz: true})}}>Click me</button>
                <Quiz
                    quiz={this.state.activeQuizTest}
                    content={this.state.quizzes[this.state.activeQuiz]} 
                    show={this.state.showQuiz} 
                    handleClose={this.hideQuiz}
                    handleSubmit={this.submitQuiz}
                /> 
            </div>

        );
    }
}

export default Education;