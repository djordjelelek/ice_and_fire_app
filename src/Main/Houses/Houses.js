import React from "react";
import classes from "./Houses.module.css";
import Image from "react-bootstrap/Image";
import housespicture from "./housespicture.jpg";
import { NavLink } from "react-router-dom";

const Houses = () => {
  return (
    <div>
      <Image src={housespicture} fluid />
      <ul className={classes.Houses}>
        <li>
          <NavLink to={{ pathname: `/houses/1`, URLnumber: 362 }}>
            Stark
          </NavLink>
        </li>
        <li>
          <NavLink to={{ pathname: `/houses/2`, URLnumber: 7 }}>Arryn</NavLink>
        </li>
        <li>
          <NavLink to={{ pathname: `/houses/3`, URLnumber: 395 }}>
            Tully
          </NavLink>
        </li>
        <li>
          <NavLink to={{ pathname: `/houses/4`, URLnumber: 169 }}>
            Greyjoy
          </NavLink>
        </li>
        <li>
          <NavLink to={{ pathname: `/houses/5`, URLnumber: 229 }}>
            Lannister
          </NavLink>
        </li>
        <li>
          <NavLink to={{ pathname: `/houses/6`, URLnumber: 378 }}>
            Targaryen
          </NavLink>
        </li>
        <li>
          <NavLink to={{ pathname: `/houses/7`, URLnumber: 17 }}>
            Baratheon
          </NavLink>
        </li>
        <li>
          <NavLink to={{ pathname: `/houses/8`, URLnumber: 285 }}>
            Martell
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Houses;
