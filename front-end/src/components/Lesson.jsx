import React from 'react';
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

const urlBase = process.env.NODE_ENV === 'production' ? '100.26.231.32:80' : 'http://localhost:8000'

class Lesson extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentPage: 0,
            isLoaded: false,
        }
    }

    componentDidMount(){
        fetch(`${urlBase}/lesson?lessonName=${this.props.lessonName}`)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({pages: result, isLoaded:true});
            }
        );
    }

    handlePaging(direction){
        this.setState((state)=>{
            return {currentPage: state.currentPage+direction}
        });
    };

    render() {
        if(!this.state.isLoaded){
            return("Loading...")
        }else{
            return (
                <div>
                        {this.state.pages[this.state.currentPage].map((block, index) => {
                                if(block.contentType === "text"){
                                    return(
                                        <p key={index}>{block.content}</p>
                                    )
                                }else if(block.contentType === "image"){
                                    return(
                                        <img key={index} src={block.content} alt={block.imageAlt}/>
                                    )
                                }else if(block.contentType === "header"){
                                    return(
                                        <h1 key={index}>{block.content}</h1>
                                    )
                                }else{
                                    return(
                                        <p key={index}>YOU ARE MISSING SOME TAGS BUDDY!</p>
                                    )
                                }
                            }
                        )}
                        <Col>
                                <Button 
                                    block 
                                    variant="primary" 
                                    onClick={()=>{this.handlePaging(-1)}}
                                    disabled={(this.state.currentPage === 0)}
                                >Previous Page</Button>
                            </Col>
                            <Col>
                                <Button 
                                    block 
                                    variant="primary" 
                                    onClick={()=>{
                                        this.handlePaging(1)
                                    }}
                                    disabled={(this.state.currentPage === this.state.pages.length-1)}
                                >Next Page</Button>
                            </Col>
                </div>
            );
        }
    }
}

export default Lesson;