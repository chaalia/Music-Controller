import React, {Component} from "react";

export default class Room extends Component {
    constructor(props) {
        super(props);
        this.state = {
            votesToSkip = 2,
            guestCanPause = false,
            isHost = false
        };
        this.roomCode = this.props.match.params.roomCode;
    }


    render(){
        console.log(this.props.match.params)
        return(
            <div>
                <p>Votes: {this.state.votesToSkip}</p>
                <p>Room Code: {this.roomCode}</p>
                <p>Guest Can pause: {this.state.guestCanPause}</p>
                <p>is Host: {this.state.isHost}</p>
            </div>
        )
    }
}