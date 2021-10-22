import React from "react";

import { motion } from "framer-motion";

import food from "../../../assets/food.jpg";

import classes from "./Hero.module.css";

const Hero = () => {
  const ulVariant = {
    hidden: {
      x: 20,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
  };
  const listVariant = {
    hidden: {
      y: 15,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <section className={classes.hero_section}>
      <div className={classes.image_div}>
        <motion.img
          initial={{
            opacity: 0,
            x: -20,
          }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              delay: 0.1,
            },
          }}
          className={classes.food_image}
          src={food}
          alt="Food"
        />
      </div>
      <motion.div className={classes.hero_text_div}>
        <h1 className={classes.hero_header}>Fooder - Express Delivery</h1>
        <motion.ul
          variants={ulVariant}
          initial="hidden"
          animate="visible"
          className={classes.hero_list}
        >
          <motion.li variants={listVariant} className={classes.list_item}>
            <span className={classes.hero_checkmark}>&#10003;</span> Big
            Selection of Foods
          </motion.li>
          <motion.li variants={listVariant}>
            <span className={classes.hero_checkmark}>&#10003;</span> Fast and
            Reliable Delivery
          </motion.li>
          <motion.li variants={listVariant}>
            <span className={classes.hero_checkmark}>&#10003;</span> Low Prices
            Available
          </motion.li>
        </motion.ul>
      </motion.div>
    </section>
  );
};

export default Hero;
