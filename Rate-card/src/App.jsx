import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  let div = useRef();
  function checked(e) {
    e.target.checked
      ? div.current.classList.replace("d-none", "d-block")
      : div.current.classList.replace("d-block", "d-none");
  }
  return (
    <div className="container border border-1 border-danger">
      <input type="text" className="form-control mt-5"></input>
      <button className="btn btn-primary mt-4">Add User</button>
      <input type="checkbox" onClick={checked}></input>
      <div className="d-none" ref={div}>
        black
      </div>
    </div>
  );
}

export default App;
