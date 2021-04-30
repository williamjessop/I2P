import React from "react";
import Quiz from './Quiz';
import LessonCard from './LessonCard';
import SignIn from './SignIn';

class Education extends React.Component {
    //fetch the state from the DB
    constructor(props) {
        super(props);
        this.showQuiz = this.showQuiz.bind(this);
        this.hideQuiz = this.hideQuiz.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            lessonName: "Lesson1",
            quizName: "Quiz1",
            loggedIn: false,
            showQuiz: false,
            isLoaded: false,
            user: JSON.parse(sessionStorage.user)
        };
    }

    hideQuiz() {this.setState({showQuiz: false})};
    showQuiz() {this.setState({showQuiz: true})};

    handleClose(){
        this.setState({loggedIn: true});
        fetch("http://localhost:8000/lesson/listlesson", {headers:{"x-auth-token": this.state.user.token}})
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
                        showQuiz={this.showQuiz}
                    />
                )
                this.setState({lessons: newLessons, isLoaded:true});
            }
        );
    }

    componentDidMount(){
        if(this.state.user){ 
            this.setState({loggedIn: true});
            fetch("http://localhost:8000/lesson/listlesson", {headers:{"x-auth-token": this.state.user.token}})
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
                            showQuiz={this.showQuiz}
                        />
                    )
                    this.setState({lessons: newLessons, isLoaded:true});   
                }
            );
        }
    }

    //decide on rendering a back to home button

    render() {
        return (
            <div className="dash-lesson">
                <SignIn show={!this.state.loggedIn} handleClose={this.handleClose} showClose={false}/>
                <div className="dash-title">
                    Welcome to the Education page! Take the lessons below then take the quizzes. At the end, you'll receive a certificate!
                </div>    

                {this.state.lessons}

                {this.state.loggedIn && <Quiz
                    quiz={this.state.quizName}
                    show={this.state.showQuiz} 
                    handleClose={this.hideQuiz}
                />}
            </div>
        );
    }
}

export default Education;