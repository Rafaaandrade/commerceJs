import { Grid } from "@material-ui/core";
import React from "react";
import SingleProduct from "../SingleProduct";
import useStyles from "./styles";

const Produtos = ({products, adicionarCarrinho}) => {
  const styles = useStyles();

  return (
    <div className={styles.content}>
      <div className={styles.toolbar} />
      <Grid container justifyContent="center" spacing={4}>
        {products && products.map((prod) => (
          <Grid item key={prod.id} xs={12} sm={6} md={4} lg={3}>
            <SingleProduct product={prod} adicionarCarrinho={adicionarCarrinho} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Produtos;
