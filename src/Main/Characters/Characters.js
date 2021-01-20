import React, { useEffect, useState } from "react";
import classes from "./Characters.module.css";
import { NavLink } from "react-router-dom";
import { Route } from "react-router-dom";
import Character from "./Character/Character";
import axios from "axios";
import { DragHandleRounded } from "@material-ui/icons";

const Characters = () => {
  const [charcterState, setCharacterState] = useState([]);
  const [loading, setLoading] = useState(false);
  const request = "https://www.anapioficeandfire.com/api/houses/1";
  const gettingCharacter = (props) => {
    axios
      .get("https://www.anapioficeandfire.com/api/houses/" + props)
      .then((response) => {
        setCharacterState(() => response.data);
        setLoading(() => true);
        console.log(props);
      });
  };
  useEffect(() => {
    gettingCharacter();
  }, []);

  const handler = (props) => console.log(props);

  return (
    <div>
      <ul className={classes.Houses}>
        <li>
          <NavLink
            to={{ pathname: `/characters/1`, URLnumber: 362 }}
            onClick={() => gettingCharacter("362")}
          >
            Stark
          </NavLink>
        </li>
        <li>
          <NavLink
            to={{ pathname: `/characters/2`, URLnumber: 7 }}
            onClick={() => gettingCharacter("7")}
          >
            Arryn
          </NavLink>
        </li>
        <li>
          <NavLink to={{ pathname: `/characters/3`, URLnumber: 395 }}>
            Tully
          </NavLink>
        </li>
        <li>
          <NavLink to={{ pathname: `/characters/4`, URLnumber: 169 }}>
            Greyjoy
          </NavLink>
        </li>
        <li>
          <NavLink to={{ pathname: `/characters/5`, URLnumber: 229 }}>
            Lannister
          </NavLink>
        </li>
        <li>
          <NavLink to={{ pathname: `/characters/6`, URLnumber: 378 }}>
            Targaryen
          </NavLink>
        </li>
        <li>
          <NavLink to={{ pathname: `/characters/7`, URLnumber: 17 }}>
            Baratheon
          </NavLink>
        </li>
        <li>
          <NavLink to={{ pathname: `/characters/8`, URLnumber: 285 }}>
            Martell
          </NavLink>
        </li>
      </ul>
      <div className={classes.Characters}>{charcterState.name}</div>
      {/* <Route
        path="/characters/:id"
        exact
        component={<div>{charcterState}</div>}
      /> */}
    </div>
  );
};

export default Characters;
