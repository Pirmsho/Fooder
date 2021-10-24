import { useRef, useState } from "react";

import classes from "./FoodItemForm.module.css";
import Input from "../UI/Input";

const FoodItemForm = (props) => {
  const [isValid, setIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "10",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add +</button>
      {!isValid && <p>Please enter a Valid Amount (1 to 5)</p>}
    </form>
  );
};

export default FoodItemForm;
