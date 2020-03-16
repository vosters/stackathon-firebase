import React from "react";
import Stats from "./Stats";
import {
  Typography,
  Paper,
  FormGroup,
  FormControl,
  FormControlLabel,
  Checkbox,
  FormLabel
} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "../withStyles";

function MultipleChoice(props) {
  const { classes } = props;

  const update = e => {
    props.update(e.target.name, e.target.checked);
  };

  return (
    // console.log('PROPS.STATE', props.state)
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Typography component="h3" variant="h5">
          {props.question.headline}
        </Typography>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Select all that apply</FormLabel>
          <FormGroup>
            {props.question.options.map(option => {
              return (
                
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={props.state[option.name]}
                      //   onChange={handleChange("gilad")}
                      onChange={update}
                      value={option.name}
                      name={option.name}
                    />
                  }
                  label={option.label}
                />
              );
            })}
          </FormGroup>
        </FormControl>
        <Stats step={1} {...props} />
      </Paper>
    </main>
  );
}

export default withStyles(styles)(MultipleChoice);
