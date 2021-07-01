import "./App.css";
import React, { useState } from "react";
import HomeContainer from "./Containers/HomeContainer";
import NavBar from "./Components/NavBar.js";

function App() {
  const [mode] = useState("light");

  return (
    <div className="App">
      <NavBar />
      <HomeContainer mode={mode} />
    </div>
  );
}

export default App;
