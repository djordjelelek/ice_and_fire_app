import React, { useEffect, useState } from "react";
import classes from "./Books.module.css";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import bookspicture from "./bookspicture.jpg";
import Image from "react-bootstrap/Image";

const Books = () => {
  const [booksState, setBooksState] = useState([]);
  const gettingBooks = () => {
    axios
      .get("https://www.anapioficeandfire.com/api/books")
      .then((response) => {
        setBooksState(() => response.data);
      });
  };
  useEffect(() => {
    gettingBooks();
  }, []);
  const books = booksState.map((response) => (
    <li key={response.isbn}>{response.name}</li>
  ));
  return books.length > 0 ? (
    <div>
      {/* <img
        src={bookspicture}
        alt="books-list"
        className={classes.BookPicture}
      /> */}
      <Image src={bookspicture} fluid />
      <ul className={classes.Books}>{books}</ul>
    </div>
  ) : (
    <div className={classes.SpinnerContainer}>
      <Spinner animation="border" variant="light" className={classes.Spinner} />
    </div>
  );
};

export default Books;
