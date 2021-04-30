import React from "react";
import { Container, Carousel } from "react-bootstrap";

class Prevention extends React.Component {
    render() {
        return (
            <div>
                <Container className="bgCarousel carouselWidth dropShadow" fluid>
                    <Carousel controls={false} indicators={false}>
                        <Carousel.Item>
                            <div style={{ height: "400px" }}>
                                <img
                                    className="preventionPhoto1"
                                    src="/img/Prevention-Carousel-1.jpg"
                                    alt="First slide"
                                />
                                <div className="bannerShader"></div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div style={{ height: "400px" }}>
                                <img
                                    className="preventionPhoto2"
                                    src="/img/Prevention-Carousel-2.jpg"
                                    alt="Second slide"
                                />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div style={{ height: "400px" }}>
                                <img
                                    className="preventionPhoto3"
                                    src="/img/Prevention-Carousel-3.jpg"
                                    alt="Third slide"
                                />
                                <div className="bannerShader"></div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                    <div className="preventionBannerText">
                        <p className="preventionLetsTalk">Lets Talk:</p>
                        <p className="preventionPrevention">Prevention...</p>
                        <p className="preventionUnity">...Unity</p>
                    </div>
                </Container>
                <div>
                    <h2 style={{padding: "25px"}}>
                        Come to us to prevent violence in our community.
                    </h2>
                </div>
                <div style={{height: "200px"}}>
                    <img src="/img/Branch1.svg" alt="" style={{position: "relative", width: "300px", top: "-265px", float: "left"}}/>
                    <img src="/img/Branch1.svg" alt="" style={{position: "relative", width: "300px", top: "-265px", float: "right"}}/>

                </div>

                <div className="footerSpacer-Prevention" style={{height: "150px"}}></div>
            </div>
        );
    }
}

export default Prevention;