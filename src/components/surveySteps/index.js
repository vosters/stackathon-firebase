import React from "react";
// import { Typography, Paper, Avatar, Button, FormGroup, FormControl, FormControlLabel, Checkbox, FormHelperText, FormLabel } from "@material-ui/core";
// import VerifiedUserOutlined from "@material-ui/icons/VerifiedUserOutlined";
import withStyles from "@material-ui/core/styles/withStyles";
// import { Link } from "react-router-dom";
import StepWizard from "react-step-wizard";
import { default as MultipleChoice } from "./MultipleChoice";
import { default as questions } from "./questions";
import { default as SingleInput } from "./SingleInput";
import { Register } from "../";
import { default as Progress } from "./Progress";
// import DotNav from "./DotNav";
import styles from "../withStyles";

function Survey(props) {
  const { classes } = props;

  const [state, setState] = React.useState({
    form: JSON.parse(sessionStorage.getItem("form")) || {}
  });

  const updateForm = (key, value) => {
    const { form } = state;

    form[key] = value;
    // localStorage.setItem(key, value);

    setState({
      ...state,
      form
    });
  };

  React.useEffect(() => {
    sessionStorage.setItem("form", JSON.stringify(state.form));
    console.log("FORM STATE", state.form);
  }, [state]);

  return (
    <main className={classes.main}>
      <StepWizard isHashEnabled>
        <SingleInput
          hashKey={"First"}
          state={state.form}
          update={updateForm}
          question={questions.username}
        />
        <MultipleChoice
          hashKey={"FirstStep"}
          state={state.form}
          update={updateForm}
          question={questions.diagnoses}
        />
        <Progress />
        <Register />
      </StepWizard>
    </main>
  );
}

export default withStyles(styles)(Survey);
