import React from "react";
import { Button } from "@material-ui/core";

/**
 * Stats Component - to illustrate the possible functions
 * Could be used for nav buttons or overview
 */
const Stats = ({
  currentStep,
  firstStep,
  goToStep,
  lastStep,
  nextStep,
  previousStep,
  totalSteps,
  step
}) => (
  <div>
    {currentStep > 1 && (
      <Button onClick={previousStep} variant="contained" color="primary">
        Previous
      </Button>
    )
    // <button className='btn btn-default btn-block' >Go Back</button>
    }
    {step < totalSteps ? (
      <Button onClick={nextStep} variant="contained" color="primary">
        Next
      </Button>
    ) : (
      // <button className='btn btn-primary btn-block' >Continue</button>
      <Button onClick={nextStep} variant="contained" color="primary">
        Finish
      </Button>
    )
    // <button className='btn btn-success btn-block' onClick={nextStep}>Finish</button>
    }
    {/* <hr />
        <div style={{ fontSize: '21px', fontWeight: '200' }}>
            <h4>Other Functions</h4>
            <div>Current Step: {currentStep}</div>
            <div>Total Steps: {totalSteps}</div>
            <button className='btn btn-block btn-default' onClick={firstStep}>First Step</button>
            <button className='btn btn-block btn-default' onClick={lastStep}>Last Step</button>
            <button className='btn btn-block btn-default' onClick={() => goToStep(2)}>Go to Step 2</button>
        </div> */}
  </div>
);

export default Stats;
