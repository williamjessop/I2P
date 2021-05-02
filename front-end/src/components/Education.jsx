import React from "react";
import Quiz from './Quiz';
import LessonCard from './LessonCard';
import {Link} from 'react-router-dom'

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

    hideQuiz() {
        this.setState({quizName: false, isLoaded: false});
        this.forceUpdate();
    };
    showQuiz(quizName){this.setState({showQuiz: true, quizName: quizName})};

    componentDidMount(){
        fetch(urlBase+"/lesson/listlesson", {headers:{"x-auth-token": this.state.user.token}})
        .then(res => res.json())
        .then(
            (result) => {
                let newLessons = result.map((lesson) =>{
                    let lessonActive = true;
                    let lessonNumber = lesson.lessonName.slice(6)
                    let previousLesson = `Lesson${lessonNumber-1}`
                    if(lessonNumber-1 === 0){
                        lessonActive = false
                    }else if(this.state.user.appData[previousLesson] === true){
                        lessonActive = false
                    }
                    return(<LessonCard 
                        lessonName={lesson.lessonName}
                        lessonTitle={lesson.lessonTitle}
                        lessonDesc={lesson.lessonDesc}
                        setLessonName={this.props.setLessonName}
                        key={lesson.lessonName}
                        lessonActive={lessonActive}
                    />)
                }
                )
                this.setState({lessons: newLessons, isLoaded:true, user: JSON.parse(sessionStorage.user)});   
            }
        );
    }
    componentDidUpdate(){
        if(!this.state.isLoaded){
            fetch(urlBase+"/lesson/listlesson", {headers:{"x-auth-token": this.state.user.token}})
            .then(res => res.json())
            .then(
                (result) => {
                    let newLessons = result.map((lesson) =>{
                        let lessonActive = true;
                        let lessonNumber = lesson.lessonName.slice(6)
                        let previousLesson = `Lesson${lessonNumber-1}`
                        if(lessonNumber-1 === 0){
                            lessonActive = false
                        }else if(this.state.user.appData[previousLesson] === true){
                            lessonActive = false
                        }
                        return(<LessonCard 
                            lessonName={lesson.lessonName}
                            lessonTitle={lesson.lessonTitle}
                            lessonDesc={lesson.lessonDesc}
                            setLessonName={this.props.setLessonName}
                            key={lesson.lessonName}
                            lessonActive={lessonActive}
                        />)
                    }
                    )
                    this.setState({lessons: newLessons, isLoaded:true, user: JSON.parse(sessionStorage.user)});   
                }
        );}
    }

    render() {

        const userData = this.state.user.appData;

        return (
            <div className="dash-lesson">
                
                <div className="dash-title">
                    Welcome to the Education page! Take the lessons below then take the quizzes. At the end, you'll receive a certificate!
                </div>

                {!!userData.Quiz1 ? <p>You scored {userData.Quiz1*100}% on the Pre-Quiz.</p>:
                
                    <button className="btn-primary dash-lesson-button dash-lesson-description-button" 
                        onClick={() => {this.showQuiz("Quiz1")}}
                        disabled={userData.Quiz1}
                    >Begin Pre-Quiz</button>
                }

                {this.state.lessons}

                <p>This is where we will render your post quiz score. (Will will only store one for now, whichever is highest)</p>
                
                
                {
                    //usage here of the !! is to force userData.Quiz2 to be either true or false, it just forces the bool out of a truthy/falsy value
                    //this condition is only here to make sure there is a score to render
                    //Without the !! it would render a 0 on the page
                }
                
                {userData.Quiz2 > .7 ? 
                
                    <div>
                        <p>You scored {userData.Quiz2*100}% on the Post-Quiz.</p>
                        <Link onClick={() => { this.props.setLessonName(this.props.lessonName) }} to={`/certificate`}>
                            <button className="btn-primary dash-lesson-button dash-lesson-title-button">Click Here to see your Certificate!</button>
                        </Link>
                    </div>
                
                :
                    <div>
                        {!!userData.Quiz2 && <p>You scored {userData.Quiz2*100}% on the Post-Quiz.</p>}
                        <button className="btn-primary dash-lesson-button dash-lesson-description-button"
                            onClick={() => {this.showQuiz("Quiz2")}}        
                        >Begin Post-Quiz</button>
                    </div>
                }
                

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