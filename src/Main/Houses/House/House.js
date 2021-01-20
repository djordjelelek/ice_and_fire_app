import React, { useEffect, useState } from "react";
import classes from "./House.module.css";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

const House = (props) => {
  const [houseState, setHouseState] = useState([]);
  const [loading, setLoading] = useState(false);
  const request =
    "https://www.anapioficeandfire.com/api/houses/" + props.location.URLnumber;
  const gettingHouses = () => {
    axios.get(request).then((response) => {
      setHouseState(() => response.data);
      setLoading(() => true);
    });
  };
  useEffect(() => {
    gettingHouses();
  }, []);
  return loading ? (
    <div className={classes.House}>
      <ul>
        <li>url: {houseState.url}</li>
        <li>name: {houseState.name}</li>
        <li>region: {houseState.region}</li>
        <li>coatOfArms: {houseState.coatOfArms}</li>
        <li>words: {houseState.words}</li>
        <li>titles: {houseState.titles}</li>
        <li>seats: {houseState.seats}</li>
        <li>currentLord: {houseState.currentLord}</li>
        <li>heir: {houseState.heir}</li>
        <li>founded: {houseState.founded}</li>
        <li>founder: {houseState.founder}</li>
        <li>diedOut: {houseState.diedOut}</li>
        <li>ancestralWeapons: {houseState.ancestralWeapons}</li>
        <li>cadetBranches: {houseState.cadetBranches}</li>
        <li>swornMembers: {houseState.swornMembers}</li>
      </ul>
    </div>
  ) : (
    <div>
      <Spinner animation="border" variant="light" className={classes.Spinner} />
    </div>
  );
};

export default House;
