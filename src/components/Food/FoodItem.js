import React from "react";
import classes from "./FoodItem.module.css";
const FoodItem = (props) => {
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>${props.price}</div>
      </div>
      <div></div>
    </li>
  );
};

export default FoodItem;
