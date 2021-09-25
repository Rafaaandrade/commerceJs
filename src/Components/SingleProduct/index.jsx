import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import React from "react";
import useStyles from "./styles";

const SingleProduct = ({ product }) => {
  const styles = useStyles();
  return (
    <Card className={styles.root}>
      <CardMedia className={styles.media} image={product.image} title={product.name} />
      <CardContent>
        <div className={styles.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">{product.preco}</Typography>
        </div>
        <Typography variant="body2" color="textSecondary">
          {product.descricao}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={styles.cardActions}>
        <IconButton aria-label="Adicionar ao carrinho">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default SingleProduct;
