import "./App.css";
import Quiz from "./components/Quiz";
import React, { useState } from "react";
import First from "./components/First";

function App() {
  /////////////////////////////////////////

  // state declaring area
  const [start, setStart] = useState(true);
  /////////////////////////////////////////////
  //  functions
  function startGame() {
    setStart((prevState) => !prevState);
    console.log(start);
  }
  ////////////////////////////////////

  return <div>{start ? <Quiz startGame={startGame} /> : <First />}</div>;
}

export default App;
