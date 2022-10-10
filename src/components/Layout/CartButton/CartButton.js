import React, { useContext, useEffect, useState } from "react";
import { BsCart3 } from "react-icons/bs";
import CartContext from "../../../context/CartContext";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const [buttonHighlight, setButtonHighlight] = useState(false);
  const cartContext = useContext(CartContext);
  const { items } = cartContext;

  const buttonClasses = `${classes.button} ${
    buttonHighlight ? classes.bump : ""
  }`;

  useEffect(() => {
    if (cartContext.items.length === 0) {
      return;
    }

    setButtonHighlight(true);
    const timer = setTimeout(() => {
      setButtonHighlight(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={buttonClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <BsCart3 />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>
        {cartContext.items.reduce((currentNumber, item) => {
          return currentNumber + item.amount;
        }, 0)}
      </span>
    </button>
  );
};

export default CartButton;
