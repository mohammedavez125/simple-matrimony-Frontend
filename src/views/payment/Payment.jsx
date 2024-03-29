import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Details from "./Details";
import PaymentMode from "./PaymentMode";
import Success from "./Success";
import PayCard from "./PayCard";
// import image from "./image.png";
import PayUpi from "./PayUpi";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    justifyContent: "center",
    height: "50vw",
  },
  actions: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  stepper: {
    iconColor: "#2E3B55",
  },
}));

function getSteps() {
  return ["Enter Details", "Payment Mode", "Payment", "Order Confirmed"];
}

function Payment() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();
  const [paymentMode, setPaymentMode] = useState("UPI");
  const [number, setNumber] = useState("");
  const [cvc, setCvc] = useState("");
  const [upiId, setUpiId] = useState("");

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };
  function getPaymentMethod() {
    if (paymentMode === "card") {
      return <PayCard setNumber={setNumber} setCvc={setCvc} />;
    } else if (paymentMode === "UPI") {
      return <PayUpi setUpiId={setUpiId} />;
    }
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <Details />;
      case 1:
        return <PaymentMode setPaymentMode={setPaymentMode} />;
      case 2:
        return getPaymentMethod();
      case 3:
        return <Success />;
      default:
        return "Unknown step";
    }
  }
  const handleNext = () => {
    if (activeStep === steps.length - 2) {
      handlePayment();
    }
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };
  console.log("number = " + number, "cvv = " + cvc);
  const handlePayment = () => {
    if (paymentMode === "card") {
      axios
        .post("http://localhost:5000/api/payment/createpayment", {
          debitPayment: {
            cardNumber: parseInt(number),
            cvv: parseInt(cvc),
          },
        })
        .then((response) => {
          // Handle the response data here
          console.log("Response Data:", response.data);
        })
        .catch((error) => {
          // Handle any errors here
          console.error("Error:", error);
        });
    } else if (paymentMode === "UPI") {
      axios
        .post("http://localhost:5000/api/payment/createpayment", {
          upiPayment: {
            upiId: upiId,
          },
        })
        .then((response) => {
          // Handle the response data here
          console.log("Response Data:", response.data);
        })
        .catch((error) => {
          // Handle any errors here
          console.error("Error:", error);
        });
    }
  };
  const handleReset = () => {
    setActiveStep(0);
  };
  const handleButton = () => {
    if (activeStep === steps.length - 1) {
      return "Finish";
    } else if (activeStep === steps.length - 2) {
      return "Pay";
    } else {
      return "Next";
    }
  };

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={6}>
          <Card variant="outlined" style={{ marginTop: "5%" }}>
            <CardContent>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={12}>
                  <AppBar
                    position="static"
                    style={{ background: "#2E3B55", alignItems: "center" }}
                  >
                    <Toolbar>
                      <img
                        // src={image}
                        style={{ height: 30 }}
                        alt="logo"
                        className={classes.logo}
                      />
                    </Toolbar>
                  </AppBar>
                </Grid>
                <Grid item xs={12}>
                  <Stepper activeStep={activeStep} className={classes.stepper}>
                    {steps.map((label, index) => {
                      const stepProps = {};
                      const labelProps = {};
                      if (isStepOptional(index)) {
                        labelProps.optional = (
                          <Typography variant="caption"></Typography>
                        );
                      }
                      if (isStepSkipped(index)) {
                        stepProps.completed = false;
                      }
                      return (
                        <Step key={label} {...stepProps}>
                          <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                      );
                    })}
                  </Stepper>
                </Grid>
                <Grid item xs={12}>
                  <div className={classes.actions}>
                    {activeStep === steps.length ? (
                      <div>
                        <Typography
                          className={classes.instructions}
                        ></Typography>
                        <Button
                          onClick={handleReset}
                          className={classes.button}
                        >
                          Reset
                        </Button>
                      </div>
                    ) : (
                      <div>
                        <Typography
                          className={classes.instructions}
                          style={{ height: "350px" }}
                        >
                          {getStepContent(activeStep)}
                          <br />
                        </Typography>
                        <div className={classes.actions}>
                          {activeStep === steps.length - 1 ? (
                            " "
                          ) : (
                            <Button
                              disabled={activeStep === 0}
                              onClick={handleBack}
                              className={classes.button}
                            >
                              Back
                            </Button>
                          )}

                          <Button
                            variant="contained"
                            style={{ background: "#2E3B55", color: "#ffffff" }}
                            onClick={handleNext}
                            className={classes.button}
                          >
                            {handleButton()}
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
export default Payment;
