import React, { useState } from "react";
import classes from "./Menu.module.css";
import menu from "./mobile-menu.png";

const Menu = () => {
  const [showMobileMenu, setShowingMobileMenu] = useState(false);
  const mobile_menu = showMobileMenu ? (
    <ul className={`${classes.List} ${classes.MobileMenu}`}>
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
  ) : null;

  return (
    <>
      <img
        src={menu}
        alt="mobile-menu"
        className={classes.MenuIcon}
        onClick={() => setShowingMobileMenu((previousState) => !previousState)}
      />
      {mobile_menu}
    </>
  );
};
export default Menu;
