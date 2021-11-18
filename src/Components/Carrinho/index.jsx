import { Button, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import SingleItemCarrinho from "../SingleItemCarrinho";
import useStyles from "./styles";

const Carrinho = ({
  carrinho,
  handleQuantityChange,
  removerCarrinho,
  limparCarrinho,
}) => {
  const styles = useStyles();
  const isEmpty = !carrinho.line_items;

  const CarrinhoVazio = () => (
    <Typography variant="subtitle1">
      Você não possui itens no carrinho, faça compras!
    </Typography>
  );

  const CarrinhoCheio = () => (
    <div>
      <Grid container spacing={3}>
        {carrinho.line_items.map((c) => (
          <Grid item xs={12} sm={4} key={c.id}>
            <SingleItemCarrinho
              item={c}
              handleQuantityChange={handleQuantityChange}
              removerCarrinho={removerCarrinho}
            />
          </Grid>
        ))}
      </Grid>
      <div className={styles.details}>
        <Typography variant="h4">
          Total: {carrinho.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={styles.limparButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick={limparCarrinho}
          >
            Esvaziar
          </Button>
          <Button
            className={styles.finalizarButton}
            size="large"
            type="button"
            variant="contained"
            color="primary"
            to="/checkout"
            component={Link}
          >
            Finalizar
          </Button>
        </div>
      </div>
    </div>
  );

  if (!carrinho.line_items) return "Carregando...";

  return (
    <Container>
      <div className={styles.toolbar} />
      <Typography className={styles.title} variant="h3">
        Seu carrinho de compras
      </Typography>
      {isEmpty ? <CarrinhoVazio /> : <CarrinhoCheio />}
    </Container>
  );
};

export default Carrinho;
