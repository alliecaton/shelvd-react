import React from "react";
import Button from "../Components/Button";
import NavBar from "../Components/NavBar";

const HomeContainer = () => {
  return (
    <div>
      <NavBar />
      <Button text={"Get Random Book"} />
    </div>
  );
};

export default HomeContainer;
