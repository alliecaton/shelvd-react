import "./App.css";
import React, { useState } from "react";
import HomeContainer from "./Containers/HomeContainer";

function App() {
  const [mode] = useState("light");

  return (
    <div className="App">
      <HomeContainer mode={mode} />
    </div>
  );
}

export default App;
