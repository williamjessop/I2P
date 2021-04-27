import React from "react";

class Communication extends React.Component {
    //fetch the state from the DB
    constructor(props) {
        super(props);
        this.state = {
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
            quizAttempts: [
                {
                    pages: [
                        {question: "", answers: ["one", "two", "three", "four"], choice: 0},
                        {question: "", answers: ["one", "two", "three", "four"], choice: 0},
                        {question: "", answers: ["one", "two", "three", "four"], choice: 0}
                    ]
                }
            ]
        };
    }



    render() {
        return (
            <div>
                THIS IS THE DASHBOARD
            </div>
        );
    }
}

export default Communication;