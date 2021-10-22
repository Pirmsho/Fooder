import React from "react";

import FoodItem from "./FoodItem";

import Card from "../UI/Card";
import classes from "./AvailableFood.module.css";
const FAKE_FOOD = [
  {
    id: "f1",
    name: "Steak",
    description: "0.5kg Piece of Roast Meat",
    price: "25.99",
  },
  {
    id: "f2",
    name: "Salad",
    description: "Greek Salad with vegetables and Seafood",
    price: "16.99",
  },
  {
    id: "f3",
    name: "Chimichanga",
    description: "Mexican Specialty for dinner",
    price: "15.99",
  },
  {
    id: "f4",
    name: "Burrito",
    description: "Fresh burrito with spices",
    price: "7.99",
  },
  {
    id: "f5",
    name: "Risotto",
    description: "Rice dish with mushrooms",
    price: "17.99",
  },
  {
    id: "f6",
    name: "Vegan Hamburger",
    description: "Tasty non-meat hamburger",
    price: "21.99",
  },
];
const AvailableFood = () => {
  const foodList = FAKE_FOOD.map((meal) => (
    <FoodItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{foodList}</ul>
      </Card>
    </section>
  );
};

export default AvailableFood;
