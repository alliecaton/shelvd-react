import React, { useState } from "react";
import Button from "./Button";

const RandomBook = () => {
  const [bookData] = useState([]);

  const fetchBook = () => {
    fetch("https://www.googleapis.com/books/v1/volumes?q=fiction+subject")
      .then((resp) => resp.json())
      .then((json) => console.log(json));
  };

  return (
    <>
      <div className="book-card">{bookData}</div>
      <Button text={"Get Random Book!!"} onClick={fetchBook} />
    </>
  );
};

export default RandomBook;
