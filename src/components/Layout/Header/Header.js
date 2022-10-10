import React from "react";
import coverImage from "../../../assets/Meals.jpg";
import classes from "./Header.module.css";
import CartButton from "../CartButton/CartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>YummySushi</h1>
        <CartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={coverImage} alt="sample of meals" />
      </div>
    </>
  );
};

export default Header;
