import React from "react";
import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Get the best Sushi in the world with just a click!</h2>
      <p>
        Choose the Sushi which fits to you! All our meals are cooked with
        high-quality ingredients, just-in-time and of course by experienced
        chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
