import React from "react";
import classes from "./CartItem.module.css";

import { motion } from "framer-motion";

const CartItem = (props) => {
  return (
    <li className={classes.cart_item}>
      <h4>{props.item.name}</h4>
      <p>${props.item.price}</p>
      <div className={classes.amount_buttons}>
        <motion.button
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.9,
          }}
          className={classes.btn}
          onClick={props.onAdd}
        >
          ▲
        </motion.button>
        <p>X {props.item.amount}</p>
        <motion.button
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.9,
          }}
          className={classes.btn}
          onClick={props.onRemove}
        >
          ▼
        </motion.button>
      </div>
    </li>
  );
};

export default CartItem;
