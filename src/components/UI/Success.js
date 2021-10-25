import React from "react";
import classes from "./Success.module.css";
import { motion } from "framer-motion";
const Success = ({ onHide }) => {
  return (
    <motion.div
      initial={{
        x: -50,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      className={classes.success_div}
    >
      <h3 className={classes.success_text}>
        You Have Succesfully Bought The Items!
      </h3>

      <span onClick={onHide} className={classes.success_remove}>
        X
      </span>
    </motion.div>
  );
};

export default Success;
