import React from "react";
import Quiz from './Quiz';
import LessonCard from './LessonCard';
import SignIn from './SignIn';
import { Redirect } from 'react-router-dom'

const urlBase = process.env.NODE_ENV === 'production' ? 'https://lets-talk-cmu.com/api' : 'http://localhost:8000'

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
            loggedIn: (sessionStorage.user === null),
            showQuiz: false,
            isLoaded: false,
            user: null
        };
    }

    hideQuiz() {this.setState({showQuiz: false})};
    showQuiz(quizName) {this.setState({showQuiz: true, quizName: quizName});};

    handleClose(){
        this.setState({loggedIn: true, isLoaded: false, user: JSON.parse(sessionStorage.user)});
    }

    componentDidMount(){
        this.setState({user: JSON.parse(sessionStorage.user)})
    }

    //decide on rendering a back to home button

    //We need to add a disabled style for the quiz buttons/lesson buttons

    componentDidUpdate(){
        if(!this.state.isLoaded && this.state.user){
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
                                showQuiz={this.showQuiz}
                            />
                        )
                        this.setState({lessons: newLessons, isLoaded:true, user: JSON.parse(sessionStorage.user)});   
                    }
                );
        }
    }

    render() {
        return (
            <div className="dash-lesson">
                <SignIn show={!this.state.user} handleClose={this.handleClose} showClose={false}/>
                {this.state.user && <div>
                    <div className="dash-title">
                        Welcome to the Education page! Take the lessons below then take the quizzes. At the end, you'll receive a certificate!
                    </div>

                    <button className="btn-primary dash-lesson-button dash-lesson-description-button" 
                            onClick={() => {this.showQuiz("Quiz1")}}        
                    >Begin Pre-Quiz</button>

                    {this.state.lessons}

                    <button className="btn-primary dash-lesson-button dash-lesson-description-button"
                            
                            onClick={() => {
                                this.setState((state)=>{
                                    state.quizName = "Quiz2";
                                    this.showQuiz()
                                })
                            }}        
                    >Begin Post-Quiz</button>


                    {(this.state.loggedIn && this.state.quizName==="Quiz1") && <Quiz
                        quiz="Quiz1"
                        show={this.state.showQuiz} 
                        handleClose={this.hideQuiz}
                    />}

                    {(this.state.loggedIn && this.state.quizName==="Quiz2") && <Quiz
                        quiz="Quiz2"
                        show={this.state.showQuiz} 
                        handleClose={this.hideQuiz}
                    />}
                </div>}
            </div>
        );
        

    }
}

export default Education;