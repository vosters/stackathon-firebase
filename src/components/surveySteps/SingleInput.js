import React from "react";
import Stats from "./Stats";
import { Typography, Paper, TextField } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "../withStyles";

const SingleInput = props => {
    const { classes } = props;
    
  const update = e => {
    props.update(e.target.name, e.target.value);
  };

  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Typography component="h3" variant="h5">
          {props.question.headline}
        </Typography>
        <form
          name="firstName"
          className={classes.root}
          noValidate
          autoComplete="off"
        >
          <TextField fullWidth id="standard-basic" name={props.question.name} value={props.state[props.question.name]}label={props.question.label} onChange={update}/>
        </form>
        
        <Stats step={1} {...props} />
      </Paper>
    </main>
  );
};

export default withStyles(styles)(SingleInput);
