import React from "react";
import { Card } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import Lesson from '../components/Lesson';

class Education extends React.Component {
    //fetch the state from the DB


    constructor(props) {
        super(props);
        this.state = {
            lessons: [
                {
                    pages: [
                        { content: "", img: "" },
                        { content: "", img: "" },
                        { content: "", img: "" }
                    ],
                    progress: 0,
                    visible: true
                }
            ],
            quizAttempts: [
                {
                    pages: [
                        { question: "", answers: ["one", "two", "three", "four"], choice: 0 },
                        { question: "", answers: ["one", "two", "three", "four"], choice: 0 },
                        { question: "", answers: ["one", "two", "three", "four"], choice: 0 }
                    ]
                }
            ]
        };
    }


    render() {

        const { path } = this.props.match;

        return (
            <div className="dash-lesson">
                <div className="dash-title">
                    Welcome to the Education page! Take the lessons below then take the quizzes. At the end, you'll receive a certificate!
                </div>

                <Card className="dash-lesson-card dropShadow" style={{ backgroundColor: "#FFFEF5", borderRadius: "10px" }}>
                    <div className="primaryBackground dash-lesson-progress-container">
                        [Progress Bar Here]
                    </div>
                    <div className="primaryBackground dash-lesson-card-content dash-lesson-header">
                        <div className="dash-lesson-title">Lesson 1 - Lessons</div>
                        <div className="dash-lesson-title-button-container">
                            <Link to={`${path}/lesson-1`}>
                                <button className="btn-primary dash-lesson-button dash-lesson-title-button">Begin Lesson 1</button>
                            </Link>
                        </div>
                    </div>
                    <div className="secondaryBackground dash-lesson-card-content dash-lesson-content">
                        <div className="dash-lesson-description">
                            This lesson covers lesson content in a lesson-like manner, rendering a lesson (how many times can I say lesson in this lesson example description lesson).
                                </div>
                        <div className="dash-lesson-description-button-container">
                            <button className="btn-primary dash-lesson-button dash-lesson-description-button">Begin Lesson 1 Quiz</button>
                        </div>
                    </div>
                </Card>
                <Route path={`${path}/lesson-1`} component={Lesson} />
            </div>
        );
    }
}

export default Education;