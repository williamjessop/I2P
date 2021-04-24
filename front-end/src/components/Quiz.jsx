import React from "react";
import Education from "./Education"

class Quiz extends Education {
    //fetch the state from the DB
    render() {
        const { test } = this.props;
        return (
            <div>
                SOMETHING
                {test}
            </div>
        );
    }
}

export default Quiz;