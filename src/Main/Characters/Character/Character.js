import React, { useEffect, useState } from "react";
import classes from "./Character.module.css";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

const Character = (props) => {
  const [charcterState, setCharacterState] = useState([]);
  const [loading, setLoading] = useState(false);
  const request =
    "https://www.anapioficeandfire.com/api/houses/" + props.location.URLnumber;
  const gettingCharacter = () => {
    axios.get(request).then((response) => {
      setCharacterState(() => response.data);
      setLoading(() => true);
    });
  };
  useEffect(() => {
    gettingCharacter();
  }, []);

  let members =
    charcterState.swornMembers !== undefined
      ? charcterState.swornMembers.map((response, index) => (
          <li key={index}>{response}</li>
        ))
      : null;
  return loading ? (
    <div className={classes.Character}>
      <h1>{charcterState.name}</h1>
      <ul>{members}</ul>
    </div>
  ) : (
    <div>
      <Spinner animation="border" variant="light" className={classes.Spinner} />
    </div>
  );
};

export default Character;
