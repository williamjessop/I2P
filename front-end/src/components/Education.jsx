import React from "react";
import Quiz from './Quiz'
import  Card  from 'react-bootstrap/Card';
import { Route, Link } from 'react-router-dom';
import Lesson from '../components/Lesson';

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
            <div className="dash-lesson">
                

                <Route path={this.props.match.url + "/lesson-1"}>
                    <Lesson/>
                </Route>

                <div className="dash-title">
                    Welcome to the Education page! Take the lessons below then take the quizzes. At the end, you'll receive a certificate!
                </div>

                <Card className="dash-lesson-card dropShadow" style={{backgroundColor: "#FFFEF5", borderRadius: "10px"}}>
                    <div className="primaryBackground dash-lesson-progress-container">
                        [Progress Bar Here]
                    </div>
                    <div className="primaryBackground dash-lesson-card-content dash-lesson-header">
                        <div className="dash-lesson-title">Lesson 1 - Lessons</div>
                        <div className="dash-lesson-title-button-container">
                            <button className="btn-primary dash-lesson-button dash-lesson-title-button">Begin Lesson 1</button>
                        </div>
                    </div>
                    <div className="secondaryBackground dash-lesson-card-content dash-lesson-content">
                        <div className="dash-lesson-description">
                            This lesson covers lesson content in a lesson-like manner, rendering a lesson (how many times can I say lesson in this lesson example description lesson).
                                </div>
                        <div className="dash-lesson-description-button-container">
                            <button className="btn-primary dash-lesson-button dash-lesson-description-button" onClick={() => {this.setState({showQuiz: true})}}>Begin Lesson 1 Quiz</button>
                        </div>
                    </div>
                </Card>
                <Link to={this.props.match.url + "/lesson-1"} passhref={"true"}><a href="replace"><img className="nav-mobile-image" src="/img/LetsTalk-2.svg" alt=""/></a></Link>
            
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