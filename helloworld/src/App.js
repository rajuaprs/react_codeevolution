import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Mycomp from "./components/Greet";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <Mycomp></Mycomp>
      <Welcome />
    </div>
  );
}

export default App;
