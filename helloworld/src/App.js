import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Mycomp from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";

function App() {
  return (
    <div className="App">
      <Mycomp name="Bruce" heroname="Batman">
        <p>This is childrenprops </p>
      </Mycomp>
      <Mycomp name="Clark" heroname="Superman"></Mycomp>
      <Mycomp name="Diana " heroname="wonder Woman"></Mycomp>
      <Welcome />
      <Hello />
    </div>
  );
}

export default App;
