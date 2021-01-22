import React from "react";
import { NavLink } from "react-router-dom";

const menuItems = () => (
  <>
    <li>
      <NavLink to="/home" activeStyle={{ color: "#ffffff" }}>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/books" activeStyle={{ color: "#ffffff" }}>
        Books
      </NavLink>
    </li>
    <li>
      <NavLink to="/houses" activeStyle={{ color: "#ffffff" }}>
        Houses
      </NavLink>
    </li>
    {/* <li>
      <NavLink to="/characters" activeStyle={{ color: "#ffffff" }}>
        Characters
      </NavLink>
    </li> */}
    {/* <li>
      <NavLink to="/search" activeStyle={{ color: "#ffffff" }}>
        Search
      </NavLink>
    </li> */}
  </>
);

export default menuItems;
