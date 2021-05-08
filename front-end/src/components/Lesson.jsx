import React from 'react';
import { Row, Col } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import axios from "axios"
import { Redirect } from 'react-router';

const urlBase = process.env.NODE_ENV === 'production' ? 'https://lets-talk-cmu.com/api' : 'http://localhost:8000'

class Lesson extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 0,
            isLoaded: false,
            redirect: false
        }
    }

    componentDidMount() {
        this.setState({ user: JSON.parse(sessionStorage.getItem("user")) })
        fetch(`${urlBase}/lesson?lessonName=${this.props.lessonName}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({ pages: result, isLoaded: true });
                }
            );
    }

    handlePaging(direction) {
        this.setState((state) => {
            return { currentPage: state.currentPage + direction }
        });
    };

    updateProgress() {
        let body = {
            user: this.state.user.user,
            done: true,
            lessonNumber: this.props.lessonName.slice(6)
        };

        axios.post(`${urlBase}/lesson/updateProgress`, body, { headers: { "x-auth-token": this.state.user.token } })
            .then(res => { sessionStorage.setItem("user", JSON.stringify(res.data.user)); });
        this.setState({ redirect: true });
    }

    listParser(content, listType, answer) {
        let listArray = content.split('*');
        let listItems = listArray.map((item, i) => {
            if (i === (answer - 1)) {
                return (
                    <div key={i}>
                        <li style={{ width: "100%", textAlign: "left", margin: "2.5px", color: "#7BA07D" }}>{item}</li>
                        <br />
                    </div>
                )
            } else {
                return (
                    <div key={i}>
                        <li style={{ width: "100%", textAlign: "left", margin: "2.5px" }}>{item}</li>
                        <br />
                    </div>
                )
            }
        });
        return (
            <ul className="lessonContentNumberedList" style={{ overflow: "initial", listStyleType: listType }}>
                { listItems}
            </ul >
        )
    }

    render() {
        if (this.state.redirect) {
            return (<Redirect to="/education" />)
        } else if (!this.state.isLoaded) {
            return ("Loading...")
        } else {
            return (
                <div className="lessonContent">
                    <br /> <br />
                    {this.state.pages[this.state.currentPage].map((block, index) => {
                        if (block.contentType === "text") {
                            return (
                                <p key={index} className="lessonContentText">{block.content}</p>
                            )
                        } else if (block.contentType === "subText") {
                            return (
                                <p key={index} className="lessonContentSubText" style={{ float: block.align, fontStyle: "italic" }}>{block.content}</p>
                            )
                        } else if (block.contentType === "leftAlign") {
                            return (
                                <p key={index} className="lessonContentLeftAlign" style={{ textAlign: "left" }}>{block.content}</p>
                            )
                        } else if (block.contentType === "bulletList") {
                            return (
                                <div key={index} style={{ width: "500px", margin: "auto", paddingTop: "20px" }}>
                                    <Row><h5 style={{float: "left", textAlign: "left"}}>{block.listTitle}</h5></Row>
                                    <Row>{this.listParser(block.content, "disc", block.correct)}</Row>
                                    <br />
                                </div>
                            )
                        } else if (block.contentType === "numberedList") {
                            return (
                                <div key={index} style={{ width: "500px", margin: "auto", paddingTop: "20px" }}>
                                    <Row><h5 style={{float: "left", textAlign: "left"}}>{block.listTitle}</h5></Row>
                                    <Row>{this.listParser(block.content, "decimal", block.correct)}</Row>
                                    <br />
                                </div>
                            )
                        } else if (block.contentType === "alphaList") {
                            return (
                                <div key={index} style={{ width: "500px", margin: "auto", paddingTop: "20px" }}>
                                    <Row><h5 style={{float: "left", textAlign: "left"}}>{block.listTitle}</h5></Row>
                                    <Row>{this.listParser(block.content, "upper-alpha", block.correct)}</Row>
                                    <br />
                                </div>
                            )
                        } else if (block.contentType === "image") {
                            return (
                                <img key={index} className="lessonContentImage" src={block.content} alt={block.imageAlt} style={{ maxHeight: "300px", display: "block", margin: "auto" }} />
                            )
                        } else if (block.contentType === "header") {
                            return (
                                <h1 key={index} className="lessonContentHeader">{block.content}</h1>
                            )
                        } else if (block.contentType === "subHeader") {
                            return (
                                <h5 key={index} className="lessonContentSubHeader">{block.content}</h5>
                            )
                        } else if (block.contentType === "bold") {
                            return (
                                <p key={index} className="lessonContentBold"><b>{block.content}</b></p>
                            )
                        } else if (block.contentType === "link") {
                            return (
                                <a key={index} className="lessonContentLink" href={block.link} style={{ color: "#7BA07D" }}>{block.linkText}</a>
                            )
                        } else {
                            return (
                                <p key={index}>YOU ARE MISSING SOME TAGS BUDDY!</p>
                            )
                        }
                    }
                    )}
                    <br /><br />
                    <Col>
                        <Button
                            block
                            variant="primary"
                            onClick={() => { this.handlePaging(-1) }}
                            disabled={(this.state.currentPage === 0)}
                            id="prev-button"
                            style={{ width: "200px", margin: "2.5px auto", border: "1px solid black"}}
                        >Previous Page</Button>
                    </Col>
                    <Col>
                        {(this.state.currentPage !== this.state.pages.length - 1) ? <Button
                            block
                            variant="primary"
                            onClick={() => { this.handlePaging(1) }}
                            id="next-button"
                            style={{ width: "200px", margin: "2.5px auto", border: "1px solid black"}}
                        >Next Page</Button>
                            :
                            <Button
                                block
                                variant="primary"
                                onClick={() => { this.updateProgress() }}
                                id="next-button"
                                style={{ width: "200px", margin: "2.5px auto", border: "1px solid black"}}
                            >Finish Lesson!</Button>}
                    </Col>
                    <br /> <br />
                </div>
            );
        }
    }
}

export default Lesson;