import React from "react";
import Quiz from './Quiz';
import LessonCard from './LessonCard';
import SignIn from './SignIn';

class Education extends React.Component {
    
    //fetch the state from the DB
    constructor(props) {
        super(props);
        this.hideQuiz = this.hideQuiz.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            lessonName: "Lesson1",
            lessonDesc: "Lesson Description",
            quizName: "Quiz1",
            loggedIn: false,
            showQuiz: false,
        };
    }

    hideQuiz() {this.setState({showQuiz: false})}

    //I axed this for now to work on Auth stuff, we can revisit later
    // <Route path={this.props.match.url + "/lesson-1"}>
    //     <Lesson/>
    // </Route>
    //  <Link to={this.props.match.url + "/lesson-1"} passhref={"true"}><a href="replace"><img className="nav-mobile-image" src="/img/LetsTalk-2.svg" alt=""/></a></Link>

    componentDidMount(){
        if(this.props.user) this.setState({loggedIn: true})
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