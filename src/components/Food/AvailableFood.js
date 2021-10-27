import React, { useEffect, useState } from "react";

import FoodItem from "./FoodItem";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./AvailableFood.module.css";

const AvailableFood = () => {
  const [foods, setFoods] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setError] = useState();

  useEffect(() => {
    const fetchFood = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://fooder-12149-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("Something Went Wrong!");
      }

      const responseData = await response.json();
      const loadedFood = [];
      for (const key in responseData) {
        loadedFood.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setFoods(loadedFood);
      setIsLoading(false);
    };

    fetchFood().catch((error) => {
      setIsLoading(false);
      setError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.LoadingSection}>
        <LoadingSpinner />
      </section>
    );
  }
  if (httpError) {
    return (
      <section className={classes.LoadingSection}>
        <p className={classes.err_message}>{httpError}</p>
      </section>
    );
  }
  const foodList = foods.map((meal) => (
    <FoodItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      id={meal.id}
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
