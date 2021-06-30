import React, { useEffect } from "react";
import logo from "./logo.svg";
import * as THREE from "three";
import "./App.css";
import { Head } from "./Head";

function App() {
  useEffect(() => {
    Head();
  }, []);

  return <div className="App"></div>;
}

export default App;
