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
import FormControlLabel from "@material-ui/core/FormLabelControl";


export default class CreateRoomPage extends Component {
    defaultVotes = 2 ;
    constructor(props) {
        super(props);
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
             <RadioGroup row defaultValue="true"
                <FormControlLabel value="true"
                control={Radio color="primary"}
                label="Play / Pause"
                labelPlacement="bottom"
                />

             <RadioGroup row defaultValue="false"
                <FormControlLabel value="secondary"
                control={Radio color="primary"}
                label="No control"
                labelPlacement="bottom"
                />

             </RadioGroup>
         </FormControl>
    </Grid>
    </Grid>
    );
  }
}
