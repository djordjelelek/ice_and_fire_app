import React from "react";
import classes from "./Book.module.css";

const book = (props) => {
  const bookItem = props.location.aboutProps.response;
  return (
    <ul className={classes.Book}>
      <li>name: {bookItem.name}</li>
      <li>isbn: {bookItem.isbn}</li>
      <li>number of pages: {bookItem.numberOfPages}</li>
      <li>publisher: {bookItem.publisher}</li>
      <li>country: {bookItem.country}</li>
      <li>media type: {bookItem.mediaType}</li>
      <li>released: {bookItem.released}</li>
    </ul>
  );
};

export default book;
