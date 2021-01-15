import React from "react";
import classes from "./Menu.module.css";

const menu = () => (
  <ul className={classes.Menu}>
    <li link="/">
      <a href="/">HOME</a>
    </li>
    <li link="/">
      <a href="/">BOOKS</a>
    </li>
    <li link="/">
      <a href="/">CHARACTERS</a>
    </li>
    <li link="/">
      <a href="/">HOUSES</a>
    </li>
    <li link="/">
      <a href="/">SEARCH</a>
    </li>
  </ul>
);
export default menu;
