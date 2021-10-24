import React, { useContext } from "react";
import FoodItemForm from "./FoodItemForm";
import classes from "./FoodItem.module.css";
import CartContext from "../../store/cart-context";
const FoodItem = (props) => {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>${props.price}</div>
      </div>
      <div>
        <FoodItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default FoodItem;
