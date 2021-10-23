import React from "react";
import { motion } from "framer-motion";
import classes from "./CartButton.module.css";

import CartIcon from "./CartIcon";

const CartButton = (props) => {
  return (
    <motion.button
      onClick={props.onClick}
      whileHover={{
        scale: 1.1,
        backgroundColor: "#89C2D9",
      }}
      whileTap={{
        scale: 0.9,
      }}
      className={classes.button}
    >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Shopping Cart</span>
      <span className={classes.badge}>0</span>
    </motion.button>
  );
};

export default CartButton;
