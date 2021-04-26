import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <div className="footer-wrap" style={{display:"flex", justifyContent:"flex-end"}}>
                <img src="/img/MDX_logo.svg" alt="mdxlogo" style={{width:"20%", padding:"20px"}}/>
            </div>
        );
    }
}

export default Footer;