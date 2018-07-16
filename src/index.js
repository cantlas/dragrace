import React from "react";
import ReactDOM from "react-dom";
import DragRace from "./DragRace";

import "./styles.css";

function App() {
  return <DragRace />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
