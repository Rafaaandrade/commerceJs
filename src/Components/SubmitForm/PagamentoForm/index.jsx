import { Button, Divider, Typography } from "@material-ui/core";
import {
  CardElement,
  Elements,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import Amostragem from "../Amostragem";
import useStyles from "../styles";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const PagamentoForm = ({ token, shippingState, backStep }) => {
  const styles = useStyles();
  const handleSubmit = (event, element, stripe) => {
    event.preventDefault();

    if(!stripe || !element) return ;
    const cartao = element.getElement(CardElement);
    console.log('cartao', cartao)

  }
  return (
    <div>
      <Amostragem token={token} />
      <Divider />
      <Typography variant="h6">Pagamento</Typography>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ element, stripe }) => (
            <form onSubmit={(e) => handleSubmit(e, element, stripe)} >
              <CardElement />
              <div className={styles.buttonContainer}>
                <Button variant="contained" onClick={backStep}>
                  Voltar
                </Button>
                <Button type="submit" variant="contained" disabled={!stripe}>
                  Pagar {token.live.subtotal.formatted_with_symbol}
                </Button>
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </div>
  );
};

export default PagamentoForm;
