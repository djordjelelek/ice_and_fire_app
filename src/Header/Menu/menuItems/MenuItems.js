import React from "react";
import { NavLink } from "react-router-dom";

const menuItems = () => (
  <>
    <li>
      <NavLink to="/" exact activeStyle={{ color: "#ffffff" }}>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/books" activeStyle={{ color: "#ffffff" }}>
        Books
      </NavLink>
    </li>
    <li>
      <NavLink to="/" exact>
        Characters
      </NavLink>
    </li>
    <li>
      <NavLink to="/">Houses</NavLink>
    </li>
    <li>
      <NavLink to="/">Search</NavLink>
    </li>
  </>
);

export default menuItems;
