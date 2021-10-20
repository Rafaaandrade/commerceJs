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

const SingleProduct = ({ product, adicionarCarrinho }) => {
  const styles = useStyles();
  return (
    <Card className={styles.root}>
      <CardMedia
        className={styles.media}
        image={product.media.source}
        title={product.name}
      />
      <CardContent>
        <div className={styles.cardContent}>
          <Typography variant="h6" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h6">
            {product.price.formatted_with_symbol}
          </Typography>
        </div>
        <Typography
          dangerouslySetInnerHTML={{ __html: product.description }}
          variant="body2"
          color="textSecondary"
        />
      </CardContent>
      <CardActions disableSpacing className={styles.cardActions}>
        <IconButton
          aria-label="Adicionar ao carrinho"
          onClick={() => adicionarCarrinho(product.id, 1)}
        >
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default SingleProduct;
