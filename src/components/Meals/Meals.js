import React from "react";
import MealsList from "./MealsList/MealsList";
import MealsSummary from "./MealsSummary/MealsSummary";

const Meals = () => {
  return (
    <>
      <MealsSummary />
      <MealsList />
    </>
  );
};

export default Meals;
