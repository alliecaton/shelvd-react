import React from "react";
import image from "../images/book.png";

const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          <img src={image} alt="book logo" />
        </li>
        <li className="navbar">link</li>
        <li className="navbar">link</li>
      </ul>
    </div>
  );
};

export default NavBar;
