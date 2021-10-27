import React from "react";
import styles from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return <div className={styles.lds_hourglass}></div>;
};

export default LoadingSpinner;
