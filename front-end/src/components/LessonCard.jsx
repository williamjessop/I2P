import React from "react";
import  Card  from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

class Lesson extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    componentDidMount(){
        fetch(`http://localhost:8000/lesson?name=${this.props.lessonName}`, {headers:{"x-auth-token": this.props.user.token}})
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({pages: result, isLoaded:true});
                this.handlePaging(0);
            }
        );
        
    }

    render() {

        return (
            <Card className="dash-lesson-card dropShadow" style={{ backgroundColor: "#FFFEF5", borderRadius: "10px" }}>
                <div className="primaryBackground dash-lesson-progress-container">
                    [Progress Bar Here]
                    </div>
                <div className="primaryBackground dash-lesson-card-content dash-lesson-header">
                    <div className="dash-lesson-title">{`Lesson ${this.props.lessonName.slice(6)} - ${this.props.lessonDesc}`}</div>
                    <div className="dash-lesson-title-button-container">
                        <Link onClick={() => { this.props.setLessonName(this.props.lessonName) }} to={`/education/${this.props.lessonName}`}>
                            <button className="btn-primary dash-lesson-button dash-lesson-title-button" onClick={() => { this.props.setLessonName(this.props.lessonName) }}>{`Begin Lesson ${this.props.lessonName.slice(6)}`}</button>
                        </Link>
                    </div>
                </div>
                <div className="secondaryBackground dash-lesson-card-content dash-lesson-content">
                    <div className="dash-lesson-description">
                        This lesson covers lesson content in a lesson-like manner, rendering a lesson (how many times can I say lesson in this lesson example description lesson).
                                </div>
                    <div className="dash-lesson-description-button-container">
                        <button className="btn-primary dash-lesson-button dash-lesson-description-button" onClick={() => { this.setState({ showQuiz: true }) }}>Begin Lesson 1 Quiz</button>
                    </div>
                </div>
            </Card>
        );
    }
}

export default Lesson;