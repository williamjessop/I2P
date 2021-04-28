import React from "react";
import Quiz from './Quiz';
import LessonCard from './LessonCard';
import SignIn from './SignIn';

const urlBase = (process.env.NODE_ENV === 'production') ? '100.26.231.32:80' : 'http://localhost:8000'

class Education extends React.Component {
    
    //fetch the state from the DB
    constructor(props) {
        super(props);
        this.hideQuiz = this.hideQuiz.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            lessonName: "Lesson1",
            quizName: "Quiz1",
            loggedIn: false,
            showQuiz: false,
            isLoaded: false,
        };
    }

    hideQuiz() {this.setState({showQuiz: false})};

    componentDidMount(){
        if(this.props.user) this.setState({loggedIn: true});
        fetch(`http://localhost:8000/quiz?name=${this.props.quiz}`, {headers:{"x-auth-token": this.props.user.token}})
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({pages: result, isLoaded:true});
                this.handlePaging(0);
            }
        );
    }

    handleClose(){
        this.setState({loggedIn: true});
    }

    render() {
        return (
            <div className="dash-lesson">
                <SignIn show={!this.state.loggedIn} handleClose={this.handleClose} setUser={this.props.setUser}/>
                <div className="dash-title">
                    Welcome to the Education page! Take the lessons below then take the quizzes. At the end, you'll receive a certificate!
                </div>    
                <LessonCard 
                    lessonName={this.state.lessonName}
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