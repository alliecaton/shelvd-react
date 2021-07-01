import React, { useState } from "react";
import Button from "./Button";

const RandomBook = () => {
  const [bookData, setState] = useState([]);

  const fetchBook = () => {
    fetch("https://www.googleapis.com/books/v1/volumes?q=fiction+subject")
      .then((resp) => resp.json())
      .then((json) => setState(json));
  };
  console.log("this is the state", bookData.items);
  return (
    <>
      <div className="book-card">{bookData}</div>
      <Button text={"Get Random Book!!"} onClick={fetchBook} />
    </>
  );
};

export default RandomBook;
