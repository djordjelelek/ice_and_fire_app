import React, { useEffect, useState } from "react";
import classes from "./Books.module.css";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Image from "react-bootstrap/Image";
import bookspicture from "./bookspicture.jpg";
import { NavLink } from "react-router-dom";

const Books = () => {
  const [booksState, setBooksState] = useState([]);
  const [loading, setLoading] = useState(false);
  const gettingBooks = () => {
    axios
      .get("https://www.anapioficeandfire.com/api/books?page=1&pageSize=500")
      .then((response) => {
        setBooksState(() => response.data);
        setLoading(() => true);
      });
  };
  useEffect(() => {
    gettingBooks();
  }, []);
  const books = booksState.map((response, index) => (
    <li key={index} className={classes.BookItems}>
      <NavLink
        to={{ pathname: `/books/${index + 1}`, aboutProps: { response } }}
        activeStyle={{ color: "#ffffff", fontSize: "18px" }}
      >
        {response.name}
      </NavLink>
    </li>
  ));
  return loading > 0 ? (
    <div className={classes.Books}>
      <Image src={bookspicture} fluid />
      <h5 className={classes.Header}>
        CLick on the book for more information:
      </h5>
      <ul className={classes.BookList}>{books}</ul>
    </div>
  ) : (
    <div className={classes.SpinnerContainer}>
      <Spinner animation="border" variant="light" className={classes.Spinner} />
    </div>
  );
};

export default Books;
