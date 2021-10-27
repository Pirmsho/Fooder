import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from "./Checkout.module.css";

const parentVariant = {
  hidden: {
    x: 50,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.3,
    },
  },
};
const childVariant = {
  hidden: {
    x: 50,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
  },
};
const errorMessageVariant = {
  hidden: {
    x: 50,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
  },
};

const isEmpty = (value) => value.trim() === "";

const Checkout = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    address: true,

    city: true,
    postal: true,
  });

  const nameInputRef = useRef();
  const addressInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredAddressIsValid = !isEmpty(enteredAddress);
    const enteredPostalCodeIsValid = !isEmpty(enteredPostalCode);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputValidity({
      name: enteredNameIsValid,
      address: enteredAddressIsValid,
      postal: enteredPostalCodeIsValid,
      city: enteredCityIsValid,
    });

    const formIsValid =
      enteredAddressIsValid &&
      enteredCityIsValid &&
      enteredNameIsValid &&
      enteredPostalCodeIsValid;

    if (!formIsValid) {
      return;
    }
    props.onOrder({
      name: enteredName,
      address: enteredAddress,
      postal: enteredPostalCode,
      city: enteredCity,
    });
  };

  return (
    <motion.form
      variants={parentVariant}
      initial="hidden"
      animate="show"
      onSubmit={confirmHandler}
    >
      <motion.div
        variants={childVariant}
        className={`${styles.control} ${
          formInputValidity.name ? "" : styles.invalid
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputValidity.name && (
          <motion.p
            variants={errorMessageVariant}
            initial="hidden"
            animate="show"
          >
            Please Enter a Valid Name!
          </motion.p>
        )}
      </motion.div>
      <motion.div
        variants={childVariant}
        className={`${styles.control} ${
          formInputValidity.address ? "" : styles.invalid
        }`}
      >
        <label htmlFor="address">Address</label>
        <input type="text" id="address" ref={addressInputRef} />
        {!formInputValidity.address && (
          <motion.p
            variants={errorMessageVariant}
            initial="hidden"
            animate="show"
          >
            Please Enter a Valid Address!
          </motion.p>
        )}
      </motion.div>
      <motion.div
        variants={childVariant}
        className={`${styles.control} ${
          formInputValidity.postal ? "" : styles.invalid
        }`}
      >
        <label htmlFor="zipcode">Zip Code</label>
        <input type="text" id="zipcode" ref={postalCodeInputRef} />
        {!formInputValidity.postal && (
          <motion.p
            variants={errorMessageVariant}
            initial="hidden"
            animate="show"
          >
            Please Enter a Valid Postal Address!
          </motion.p>
        )}
      </motion.div>
      <motion.div
        variants={childVariant}
        className={`${styles.control} ${
          formInputValidity.city ? "" : styles.invalid
        }`}
      >
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputValidity.city && (
          <motion.p
            variants={errorMessageVariant}
            initial="hidden"
            animate="show"
          >
            Please Enter a Valid City!
          </motion.p>
        )}
      </motion.div>
      {props.isSubmitting && (
        <p className={styles.submitting_text}>Submitting Data...</p>
      )}
      {props.didSubmit && !props.isSubmitting && (
        <p className={styles.success}>Data Submitted Successfully!</p>
      )}
      <motion.div
        variants={childVariant}
        initial="hidden"
        animate="show"
        className={styles.actions}
      >
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button>Checkout</button>
      </motion.div>
    </motion.form>
  );
};

export default Checkout;
