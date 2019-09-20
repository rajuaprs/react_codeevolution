import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Mycomp from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";

function App() {
  return (
    <div className="App">
      <Mycomp></Mycomp>
      <Welcome />
      <Hello />
    </div>
  );
}

export default App;
