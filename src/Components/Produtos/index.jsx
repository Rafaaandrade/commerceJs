import { Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { produtos } from "../../Store/Produtos";
import { useCommerceContext } from "../Context/commerceContext";
import SingleProduct from "../SingleProduct";
import useStyles from "./styles";

const Produtos = () => {

  const {fetchProdutos} = useCommerceContext();
  useEffect(() => {
    fetchProdutos();
  }, [])

  const styles = useStyles();
  return (
    <div className={styles.content}>
      <div className={styles.toolbar}/>
        <Grid container justifyContent="center" spacing={4}>
          {produtos.map((prod) => (
            <Grid item key={prod.id} xs={12} sm={6} md={4} lg={3}>
              <SingleProduct product={prod} />
            </Grid>
          ))}
        </Grid>
    </div>
  );
};

export default Produtos;
