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
  const [token, setToken] = useState(null);
  const {carrinho} = useCommerceContext();
  const steps = ["Informações para entrega", "Forma de Pagamento"];
  console.log('useEffect token',token);
  useEffect(() => {
    const generateToken = async () => {
      try{
        const newToken = await commerce.checkout.generateToken(carrinho.id, {type: 'cart'});
        setToken(newToken)
      
        console.log('useEffect token-carrinho',carrinho)
      }catch(error){
        console.log(error)
      }
    }

    generateToken();
  }, [])


  const Confirmation = () => (
      <div>
          Confirmation
      </div>
  )

  const Form = () => activeStep === 0 ? <EnderecoForm carrinho={carrinho} /> : <PagamentoForm />

    return (
    <>
      <div className={styles.toolbar} />
      <div className={styles.layout}>
        <Paper className={styles.paper}>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={0} className={styles.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation /> : <Form />}
        </Paper>
      </div>
    </>
  );
};

export default SubmitForm;
