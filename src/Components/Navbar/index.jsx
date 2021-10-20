import {
  AppBar,
  Badge,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import React from "react";
import { Link, useLocation} from "react-router-dom";
import { logo } from "../../utils/constants/imagens";
import useStyles from "./styles";

const Navbar = ({ quantidade }) => {
  const styles = useStyles();
  const location = useLocation();
  return (
    <>
      <AppBar position="fixed" className={styles.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={styles.title}
            color="inherit"
          >
            <img
              src={logo}
              alt="Commerce.js"
              height="25px"
              className={styles.image}
            />
            E-commerce App
          </Typography>
          <div className={styles.grow} />
          {location.pathname === "/" && (
            <div className={styles.button}>
              <IconButton
                component={Link}
                to="/carrinho"
                aria-label="Mostrar carrinho"
                color="inherit"
              >
                <Badge badgeContent={quantidade} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
