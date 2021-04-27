import React from "react";
import Quiz from './Quiz';
import LessonCard from './LessonCard';

class Education extends React.Component {
    
    //fetch the state from the DB
    constructor(props) {
        super(props);
        this.hideQuiz = this.hideQuiz.bind(this);

        this.state = {
            lessonName: "Lesson1",
            lessonDesc: "Lesson Description",
            quizName: "Quiz1",
            showQuiz: false,
        };
    }

    hideQuiz() {this.setState({showQuiz: false})}

    render() {
        return (
            <div className="dash-lesson">
                <div className="dash-title">
                    Welcome to the Education page! Take the lessons below then take the quizzes. At the end, you'll receive a certificate!
                </div>    
                <LessonCard 
                    lessonName={this.state.lessonName}
                    lessonDesc={this.state.lessonDesc}
                    setLessonName={this.props.setLessonName} 
                />              
                <Quiz
                    quiz={this.state.quizName}
                    show={this.state.showQuiz} 
                    handleClose={this.hideQuiz}
                    user={this.props.user}
                /> 
            </div>
        );
    }
}

export default Education;