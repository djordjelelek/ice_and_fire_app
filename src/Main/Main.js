import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import classes from "./Main.module.css";
import HomePage from "./HomePage/HomePage";
import Books from "./Books/Books";
import Book from "./Books/Book/Book";
import Houses from "./Houses/Houses";
import House from "./Houses/House/House";
import Characters from "./Characters/Characters";
import Character from "./Characters/Character/Character";

const main = () => (
  <div className={classes.Main}>
    <Route path="/home" exact component={HomePage} />
    <Redirect from="/" exact to="/home" />
    <Switch>
      <Route path="/books" exact component={Books} />
      <Route path="/books/:id" exact component={Book} />
    </Switch>
    <Switch>
      <Route path="/houses" exact component={Houses} />
      <Route path="/houses/:id" exact component={House} />
    </Switch>
    <Switch>
      <Route path="/characters" component={Characters} />
      {/* <Route path="/characters/:id" exact component={Character} /> */}
    </Switch>
  </div>
);

export default main;
