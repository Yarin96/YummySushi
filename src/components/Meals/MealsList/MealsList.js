import React, { useEffect, useState } from "react";
import Card from "../../UI/Card/Card";
import MealItem from "../MealItem/MealItem";
import classes from "./MealsList.module.css";

const MealsList = () => {
  const [mealsOptions, setMealsOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://order-food-app1-default-rtdb.firebaseio.com/Meals.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const mealsData = await response.json();

      const mealsArray = [];

      for (const key in mealsData) {
        mealsArray.push({
          id: key,
          name: mealsData[key].name,
          description: mealsData[key].description,
          price: mealsData[key].price,
        });
      }

      setMealsOptions(mealsArray);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setErrorMessage(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.loadingMeals}>
        <p>Loading Meals...</p>
      </section>
    );
  }

  if (errorMessage) {
    return (
      <section className={classes.errorMessage}>
        <p>Failed to fetch data...</p>
      </section>
    );
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {mealsOptions.map((roll) => {
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
