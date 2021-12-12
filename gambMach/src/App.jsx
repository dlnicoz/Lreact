import React from "react";
import "./App.css";
import Slot from "./Slot";
function App() {
  let x = "😀";
  let y = "😎";
  let z = "👽";
  return (
    <>
      <div className="mainBody">
        <h1>slot machine</h1>
      </div>
      <div className="slotBody">
        <Slot e1={x} e2={y} e3={z} />
        <Slot e1={z} e2={y} e3={x} />
        <Slot e1={y} e2={z} e3={z} />
        <Slot e1={z} e2={z} e3={z} />
      </div>
    </>
  );
}

export default App;
