import React from "react";
import { Typography, List, ListItem, ListItemText } from "@material-ui/core";
import useStyles from "../styles";

const Amostragem = ({token}) => {
  const styles = useStyles();
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Seus produtos
      </Typography>
      <List disablePadding>
      {token.live.line_items.map((produto) => (
          <ListItem className={styles.listItem} key={produto.id}>
            <ListItemText
              primary={produto.name}
              secondary={`Quantidade :${produto.quantity}`}
            />
            <Typography variant="body2">
              {produto.line_total.formatted_with_symbol}
            </Typography>
          </ListItem>
        ))} 
        <ListItem className={styles.listItem}>
          <ListItemText primary="Total" />
          <Typography className={styles.total} variant="subtitle1">
            {token.live.subtotal.formatted_with_symbol} 
          </Typography>
        </ListItem>
      </List>
    </div>
  );
};

export default Amostragem;
