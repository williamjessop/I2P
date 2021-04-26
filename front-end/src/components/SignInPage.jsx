import React from "react";
import SignIn from "./SignIn"

class SignInPage extends React.Component {
    render() {
        return (
            <div style={{display:"flex", justifyContent:"center"}}>
                SOMETHING
                <SignIn setToken={this.props.setToken}/>
            </div>
        );
    }
}

export default SignInPage;