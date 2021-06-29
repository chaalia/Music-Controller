import React, { Component } from "react";
import Button from "@material-ui/core/button";
import Grid from "@material-ui/core/grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import {Link} from "react-router-dom";
import Radio from "@material-ui/core/Radio  ";
import RadioGroup from "@material-ui/core/RadioGroup  ";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";


export default class CreateRoomPage extends Component {
    defaultVotes = 2 ;
    constructor(props) {
        super(props);
        this.state = {
            GuestCanPause =false,
            VotesToSkip = this.defaultVotes === 'true' ? true : false,
        };
        this.handleGuestCanPauseChange = this.handleGuestCanPauseChange.bind(this);
        this.handleRoomButtonPressed = this.handleRoomButtonPressed.bind(this);
        this.handleVotesChanged = this.handleVotesChanged.bind(this);

      }

    handleVotesChanged(e) {
        this.setState({
            VotesToSkip: e.target.value
        })
    };

    handleGuestCanPauseChange(e) {
        this.setState({
            GuestCanPause: e.target.value
        })
    }

    handleRoomButtonPressed() {
        const RequestOptions = {
          method: "POST",
          Headers: {"content-type": "application/json" },
          body: Json.stringify({
            votes_to_skip: this.state.VotesToSkip,
            guest_can_pause: this.state.GuestCanPause
          }),
        };
      fetch('/api/create-room', RequestOptions).then((response) => 
      response.json())
      .then((data) => console.log(data));
    }


  render() {
    return (
    <Grid container spacing={1}>
    <Grid item xs={12} align="center" >
        <Typography component="h4" variant="h4">
            Create a Room
        </Typography>
    </Grid >
    <Grid item xs={12} align="center">
        <FormControl component="fieldset">
             <FormHelperText>
                <div align='center'>
                    Guest Control of playback state
                </div>
             </FormHelperText>
             <RadioGroup row defaultValue="true" onChange={this.handleGuestCanPauseChange}>
             <FormControlLabel
                value="true"
                control={<Radio color="primary" />}
                label="Play/Pause"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="false"
                control={<Radio color="secondary" />}
                label="No Control"
                labelPlacement="bottom"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} align="center">
          <FormControl>
            <TextField
              required={true}
              type="number"
              onChange={this.handleVotesChange}
              defaultValue={this.defaultVotes}
              inputProps={{
                min: 1,
                style: { textAlign: "center" },
              }}
            />
            <FormHelperText>
              <div align="center">Votes Required To Skip Song</div>
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} align="center">
          <Button
            color="primary"
            variant="contained"
            onClick={this.handleRoomButtonPressed}
          >
            Create A Room
          </Button>
        </Grid>
        <Grid item xs={12} align="center">
          <Button color="secondary" variant="contained" to="/" component={Link}>
            Back
          </Button>
        </Grid>
      </Grid>
    );
  }
}