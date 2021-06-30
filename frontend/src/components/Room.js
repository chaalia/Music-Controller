import React, {Component} from "react";

export default class Room extends Component {
    constructor(props) {
        super(props);
        this.state = {
            votesToSkip = 2,
            guestCanPause = false,
            isHost = false
        };
    }
    render(){
        return(
            <div>
                <p>Votes: {this.state.votesToSkip}</p>
                <p>Guest Can pause: {this.state.guestCanPause}</p>
                <p>is Host: {this.state.isHost}</p>
            </div>
        )
    }
}