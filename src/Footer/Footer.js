import React from "react";
import classes from "./Footer.module.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const footer = () => (
  <div className={classes.Footer}>
    <hr className={classes.Hr} />
    <div className={classes.Icons}>
      <a
        href="https://www.linkedin.com/in/djordje-lelek-3580b7193/"
        className={classes.LinedIn}
      >
        <LinkedInIcon />
      </a>
      <a href="https://github.com/djordjelelek" className={classes.GitHub}>
        <GitHubIcon />
      </a>
    </div>
    <p>Created by: Djordje Lelek</p>
  </div>
);
export default footer;
