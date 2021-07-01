import React, { useState } from "react";
import Button from "./Button";

const RandomBook = () => {
  const [bookData, setState] = useState(null);

  const fetchBook = () => {
    fetch("https://www.googleapis.com/books/v1/volumes?q=fiction+subject")
      .then((resp) => resp.json())
      .then((json) => {
        fetch(
          "https://www.googleapis.com/books/v1/volumes?q=fiction+subject&startIndex=300"
        );
      });
  };

  //   const getRandom = (data) => {
  //     let num = Math.floor(Math.random() * (data.totalItems - 1) + 1);
  //     setState(data.items[num]);
  //   };

  console.log(bookData);
  return (
    <>
      <div className="book-card"></div>
      <Button text={"Get Random Book!!"} onClick={fetchBook} />
    </>
  );
};

export default RandomBook;
