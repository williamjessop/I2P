import React from "react";
import Quiz from './Quiz';
import LessonCard from './LessonCard';

const urlBase = process.env.NODE_ENV === 'production' ? 'https://lets-talk-cmu.com/api' : 'http://localhost:8000'

class Education extends React.Component {
    //fetch the state from the DB
    constructor(props) {
        super(props);
        this.showQuiz = this.showQuiz.bind(this);
        this.hideQuiz = this.hideQuiz.bind(this);

        this.state = {
            lessonName: "Lesson1",
            quizName: false,
            isLoaded: false,
            user: JSON.parse(sessionStorage.user)
        };
    }

    hideQuiz() {this.setState({quizName: false})};
    showQuiz(quizName) {this.setState({showQuiz: true, quizName: quizName})};

    componentDidMount(){
        fetch(urlBase+"/lesson/listlesson", {headers:{"x-auth-token": this.state.user.token}})
        .then(res => res.json())
        .then(
            (result) => {
                let newLessons = result.map((lesson) =>
                    <LessonCard 
                        lessonName={lesson.lessonName}
                        lessonTitle={lesson.lessonTitle}
                        lessonDesc={lesson.lessonDesc}
                        setLessonName={this.props.setLessonName}
                        key={lesson.lessonName}
                    />
                )
                this.setState({lessons: newLessons, isLoaded:true, user: JSON.parse(sessionStorage.user)});   
            }
        );
    }

    render() {
        return (
            <div className="dash-lesson">
                
                <div className="dash-title">
                    Welcome to the Education page! Take the lessons below then take the quizzes. At the end, you'll receive a certificate!
                </div>

                <button className="btn-primary dash-lesson-button dash-lesson-description-button" 
                    onClick={() => {this.showQuiz("Quiz1")}}        
                >Begin Pre-Quiz</button>

                {this.state.lessons}

                <button className="btn-primary dash-lesson-button dash-lesson-description-button"
                    onClick={() => {this.showQuiz("Quiz2")}}        
                >Begin Post-Quiz</button>

                {(this.state.quizName==="Quiz1") && <Quiz
                    quiz="Quiz1"
                    show={this.state.quizName==="Quiz1"} 
                    handleClose={this.hideQuiz}
                />}

                {(this.state.quizName==="Quiz2") && <Quiz
                    quiz="Quiz2"
                    show={this.state.quizName==="Quiz2"} 
                    handleClose={this.hideQuiz}
                />}
                
            </div>
        );
        

    }
}

export default Education;