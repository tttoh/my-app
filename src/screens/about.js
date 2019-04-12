import React, { Component } from 'react';

class About extends Component {
    homePage = () => {
        this.props.history.push("/"); //programmatically route to path ( / - root)
    }

    render() {
        return (
            <div>
                <h3>About Me</h3>
                <p>tttoh :)</p>
                <button onClick={this.homePage}>Back to Home</button>
            </div>
        )
    }
}

export default About;