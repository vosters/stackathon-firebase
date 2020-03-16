import React from "react";

function Step2(props) {

  React.useEffect(() => {
    console.log('STEP 2 STATE', props.state)
  });

  return (
    <React.Fragment>
      <h1>STEP 2 THOOO</h1>

      <p>
        <button onClick={props.previousStep}>Previous</button>
      </p>
      <p>
        <button onClick={props.nextStep}>Next </button>
      </p>
    </React.Fragment>
  );
}

export default Step2;
