import {
    AppBar, Badge, IconButton, Toolbar,
    Typography
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import React from "react";
import { logo } from "./../../constants/imagens";
import useStyles from "./styles";

const Navbar = () => {
  const styles = useStyles();
  return (
    <>
      <AppBar position="fixed" className={styles.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={styles.title} color="inherit">
            <img
              src={logo}
              alt="Commerce.js"
              height="25px"
              className={styles.image}
            />
            E-commerce App
          </Typography>
          <div className={styles.grow} />
          <div className={styles.button}>
            <IconButton aria-label="Mostrar carrinho" color="inherit">
              <Badge badgeContent={2} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
