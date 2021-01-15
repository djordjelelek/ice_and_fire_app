import React from "react";
import classes from "./Header.module.css";
import Logo from "./Logo/Logo";

const header = () => (
  <div className={classes.Header}>
    <Logo />
    <div>
      <ul>
        <li>HOME</li>
        <li>BOOKS</li>
        <li>CHARACTERS</li>
        <li>HOUSES</li>
        <li>SEARCH</li>
      </ul>
    </div>
  </div>
);
export default header;
