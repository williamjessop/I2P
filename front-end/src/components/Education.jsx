import React from "react";
import Quiz from './Quiz'

class Education extends React.Component {
    //fetch the state from the DB
    constructor(props) {
        super(props);
        this.state = {
            test: true,
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
                        {question: "", answers: ["one", "two", "three", "four"], choice: 0},
                        {question: "", answers: ["one", "two", "three", "four"], choice: 0},
                        {question: "", answers: ["one", "two", "three", "four"], choice: 0}
                    ],
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



    render() {
        return (
            <div>
                THIS IS THE DASHBOARD
                <Quiz test={this.state.test}/>
            </div>
        );
    }
}

export default Education;