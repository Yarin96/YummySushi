import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.length === 5;

const Checkout = (props) => {
  const [formIsValid, setFormIsValid] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const orderName = nameInputRef.current.value;
    const orderStreet = streetInputRef.current.value;
    const orderPostal = postalInputRef.current.value;
    const orderCity = cityInputRef.current.value;

    const nameValidity = !isEmpty(orderName);
    const streetValidity = !isEmpty(orderStreet);
    const postalValidity = isFiveChars(orderPostal);
    const cityValidity = !isEmpty(orderCity);

    setFormIsValid({
      name: nameValidity,
      street: streetValidity,
      postalCode: postalValidity,
      city: cityValidity,
    });

    const formIsValid =
      nameValidity && streetValidity && postalValidity && cityValidity;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: orderName,
      street: orderStreet,
      postalCode: orderPostal,
      city: orderCity,
    });
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div
        className={`${classes.control} ${
          formIsValid.name ? "" : classes.invalid
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef}></input>
        {!formIsValid.name && <p>Please enter a valid name!</p>}
      </div>
      <div
        className={`${classes.control} ${
          formIsValid.street ? "" : classes.invalid
        }`}
      >
        <label htmlFor="name">Street</label>
        <input type="text" id="street" ref={streetInputRef}></input>
        {!formIsValid.street && <p>Please enter a valid street!</p>}
      </div>
      <div
        className={`${classes.control} ${
          formIsValid.postalCode ? "" : classes.invalid
        }`}
      >
        <label htmlFor="name">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef}></input>
        {!formIsValid.postalCode && (
          <p>Please enter a valid postal code! (5 characters long)</p>
        )}
      </div>
      <div
        className={`${classes.control} ${
          formIsValid.city ? "" : classes.invalid
        }`}
      >
        <label htmlFor="name">City</label>
        <input type="text" id="city" ref={cityInputRef}></input>
        {!formIsValid.city && <p>Please enter a valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm Order</button>
      </div>
    </form>
  );
};

export default Checkout;
