import React from "react";
import { Carousel } from "react-bootstrap";

class Prevention extends React.Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="branchGraphic2"
                            src="/img/Branch2.svg"
                            alt="First slide"
                        />

                        <h3 style={{ color: "black" }}>Banner Image 1</h3>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default Prevention;