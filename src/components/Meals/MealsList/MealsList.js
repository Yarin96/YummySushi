import React from "react";
import Card from "../../UI/Card/Card";
import MealItem from "../MealItem/MealItem";
import classes from "./MealsList.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "California Roll",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Philadelphia Roll",
    description: "A Philadelphia specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Spicy California Roll",
    description: "American, spicy...",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Vegetarian Roll",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const MealsList = () => {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((roll) => {
            return (
              <MealItem
                key={roll.id}
                id={roll.id}
                name={roll.name}
                description={roll.description}
                price={roll.price}
              />
            );
          })}
        </ul>
      </Card>
    </section>
  );
};

export default MealsList;
