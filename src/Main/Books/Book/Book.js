import React from "react";
import classes from "./Book.module.css";

const book = (props) => {
  const bookItem = props.location.aboutProps.response;
  return (
    <div className={classes.Book}>
      <ul>
        <li>name: {bookItem.name}</li>
        <li>isbn: {bookItem.isbn}</li>
        <li>number of pages: {bookItem.numberOfPages}</li>
        <li>publisher: {bookItem.publisher}</li>
        <li>country: {bookItem.country}</li>
        <li>mediaType: {bookItem.mediaType}</li>
        <li>released: {bookItem.released}</li>
      </ul>
    </div>
  );
};

export default book;
