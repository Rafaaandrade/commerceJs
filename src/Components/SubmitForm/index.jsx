import { Paper, Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useCommerceContext } from "../Context/commerceContext";
import EnderecoForm from "./EnderecoForm";
import PagamentoForm from "./PagamentoForm";
import useStyles from "./styles";
import { commerce } from "../../Commerce/commerce";

const SubmitForm = () => {
  const styles = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [shippingState, setShippingState] = useState([]);
  const [token, setToken] = useState(null);
  const { carrinho } = useCommerceContext();
  const steps = ["Informações para entrega", "Forma de Pagamento"];

  useEffect(() => {
    const generateToken = async () => {
      try {
        const newToken = await commerce.checkout.generateToken(carrinho.id, {
          type: "cart",
        });
        setToken(newToken);
      } catch (error) {
        console.log(error);
      }
    };

    generateToken();
  }, []);

  const Confirmation = () => <div>Confirmation</div>;

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const next = (data) => {
    setShippingState(data);
    nextStep();
  };

  const Form = () =>
    activeStep === 0 ? (
      <EnderecoForm token={token} next={next} />
    ) : (
      <PagamentoForm token={token} shippingState={shippingState} backStep={backStep}/>
    );

  return (
    <div>
      <div className={styles.toolbar} />
      <div className={styles.layout}>
        <Paper className={styles.paper}>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={styles.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation /> : token && <Form />}
        </Paper>
      </div>
    </div>
  );
};

export default SubmitForm;
