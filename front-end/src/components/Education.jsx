import React from "react";
import Quiz from './Quiz'
import  Card  from 'react-bootstrap/Card';
import { Route, Link } from 'react-router-dom';
import Lesson from './Lesson';
import SignIn from './SignIn'

class Education extends React.Component {
    //fetch the state from the DB
    constructor(props) {
        super(props);
        this.hideQuiz = this.hideQuiz.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            loggedIn: false,
            activeQuiz: "Quiz1",
            showQuiz: false,
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


        const { path } = this.props.match;

        return (
            <div className="dash-lesson">
                <SignIn show={!this.state.loggedIn} handleClose={this.handleClose} setUser={this.props.setUser}/>
                <div className="dash-title">
                    Welcome to the Education page! Take the lessons below then take the quizzes. At the end, you'll receive a certificate!
                </div>

                <Card className="dash-lesson-card dropShadow" style={{ backgroundColor: "#FFFEF5", borderRadius: "10px" }}>
                    <div className="primaryBackground dash-lesson-progress-container">
                        [Progress Bar Here]
                    </div>
                    <div className="primaryBackground dash-lesson-card-content dash-lesson-header">
                        <div className="dash-lesson-title">Lesson 1 - Lessons</div>
                        <div className="dash-lesson-title-button-container">
                            <Link to={`${path}/lesson-1`}>
                                <button className="btn-primary dash-lesson-button dash-lesson-title-button">Begin Lesson 1</button>
                            </Link>
                        </div>
                    </div>
                    <div className="secondaryBackground dash-lesson-card-content dash-lesson-content">
                        <div className="dash-lesson-description">
                            This lesson covers lesson content in a lesson-like manner, rendering a lesson (how many times can I say lesson in this lesson example description lesson).
                                </div>
                        <div className="dash-lesson-description-button-container">
                            <button className="btn-primary dash-lesson-button dash-lesson-description-button" onClick={() => {this.setState({showQuiz: true})}}>Begin Lesson 1 Quiz</button>
                        </div>
                    </div>
                </Card>

                {this.props.user &&     
                    <Quiz
                        quiz={this.state.activeQuiz}
                        show={this.state.showQuiz} 
                        handleClose={this.hideQuiz}
                        handleSubmit={this.submitQuiz}
                        user={this.props.user}
                    /> 
                }
            </div>
        );
    }
}

export default Education;