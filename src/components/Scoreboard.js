import React, { Component } from 'react';

class Scoreboard extends Component {

    constructor(props){
        super(props);
        console.log(props)
        this.state = {
            userX: this.props.userX,
            userY: this.props.userY,
        }
    }

    render() {
        return (
            <div>
                {this.state.userX} {this.state.userY}
            </div>
        );
    }
}

export default Scoreboard;