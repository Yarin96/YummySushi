import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input/Input";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const currentAmountString = amountInputRef.current.value;
    const currentAmountNumber = +currentAmountString;

    if (
      currentAmountString.trim().length === 0 ||
      currentAmountNumber < 1 ||
      currentAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    } else {
      props.onAddToCart(currentAmountNumber);
      return;
    }
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          key: props.id,
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
