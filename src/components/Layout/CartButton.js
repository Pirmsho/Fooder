import React, { useContext } from "react";
import { motion } from "framer-motion";
import classes from "./CartButton.module.css";
import CartContext from "../../store/cart-context";
import CartIcon from "./CartIcon";

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfItemsInCart = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
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
      <span
        className={
          numberOfItemsInCart === 0 ? classes.badge : classes.badge_added
        }
      >
        {numberOfItemsInCart}
      </span>
    </motion.button>
  );
};

export default CartButton;
