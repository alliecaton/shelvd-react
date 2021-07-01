import React from "react";
import NavBar from "../Components/NavBar";
import RandomBook from "../Components/RandomBook";

const HomeContainer = ({ mode }) => {
  return (
    <div>
      <NavBar />
      <RandomBook />
    </div>
  );
};

export default HomeContainer;
