import React from "react";
import { Route } from "react-router-dom";
import classes from "./Main.module.css";
import HomePage from "./HomePage/HomePage";
import Books from "./Books/Books";

const main = () => (
  <div className={classes.Main}>
    <Route path="/" exact component={HomePage} />
    <Route path="/books" exact component={Books} />
  </div>
);

export default main;
