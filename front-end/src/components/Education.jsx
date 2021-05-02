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



    //

    render() {

        const userData = this.state.user.appData;

        return (
            <div className="dash-lesson">
                
                <div className="dash-title">
                    Welcome to the Education page! Take the lessons below then take the quizzes. At the end, you'll receive a certificate!
                </div>

                {!!userData.Quiz1 && <p>This is where we will show your pre quiz score: {userData.Quiz1}</p>}
                <p>Note for you guys, I want this button to be disabled if the user took the pre-quiz already. I am assuming you can only take the pre-quiz once.</p>
                <p>I have it disabled now but a user could not really tell. There is some work to be done here</p>
                
                <button className="btn-primary dash-lesson-button dash-lesson-description-button" 
                    onClick={() => {this.showQuiz("Quiz1")}}
                    disabled={userData.Quiz1}
                >Begin Pre-Quiz</button>

                {this.state.lessons}

                <p>This is where we will render your post quiz score. (Will will only store one for now, whichever is highest)</p>
                
                
                {
                    //usage here of the !! is to force userData.Quiz2 to be either true or false, it just forces the bool out of a truthy/falsy value
                    //this condition is only here to make sure there is a score to render
                    //Without the !! it would render a 0 on the page
                }
                
                {!!userData.Quiz2 && <p>Final Quiz Score: {userData.Quiz2}</p>}

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