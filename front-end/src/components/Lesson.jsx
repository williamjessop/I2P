import React from 'react';
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

class Lesson extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentPage: 0,
            isLoaded: false,
        }
    }

    componentDidMount(){
        fetch(`http://localhost:8000/lesson?lessonName=${this.props.lessonName}`)
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
                        {this.state.pages[this.state.currentPage].map((block) => {
                                if(block.contentType === "text"){
                                    return(
                                        <p>{block.content}</p>
                                    )
                                }else if(block.contentType === "image"){
                                    return(
                                        <img src={block.content} alt={block.imageAlt}/>
                                    )
                                }else if(block.contentType === "header"){
                                    return(
                                        <h1>{block.content}</h1>
                                    )
                                }else{
                                    return(
                                        <p>YOU ARE MISSING SOME TAGS BUDDY!</p>
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