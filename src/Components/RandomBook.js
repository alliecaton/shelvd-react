import React, { useState, useEffect } from "react";
import Button from "./Button";

const RandomBook = () => {
  const [bookData] = useState([]);

  return (
    <div>
      <p>this is the book</p>
      <p>{bookData}</p>
      <Button text={"Get Random Book!!"} />
    </div>
  );
};

export default RandomBook;
