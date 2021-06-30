import React from "react";
import Button from "../Components/Button";
import NavBar from "../Components/NavBar";

const HomeContainer = ({ mode }) => {
  return (
    <div>
      <NavBar />
      <Button text={"Get Random Book"} styleMode={mode} />
    </div>
  );
};

export default HomeContainer;
