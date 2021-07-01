import React, { useState, useEffect } from "react";
import Button from "./Button";

const RandomBook = () => {
  const [bookData] = useState([]);

  const fetchBook = () => {
    // fetch request to API.
  };

  return (
    <>
      <div className="book-card">this is the book</div>
      <Button text={"Get Random Book!!"} />
    </>
  );
};

export default RandomBook;
