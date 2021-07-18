import React, { useEffect } from "react";
import "./App.css";
import { Head } from "./three/Head";
import { Menu } from "./components/Menu"
import styled from "styled-components";

const AppComponent = styled.div`
background: hsla(231, 82%, 6%, 1);

background: linear-gradient(90deg, hsla(231, 82%, 6%, 1) 0%, hsla(339, 80%, 12%, 1) 11.11111111111111%, hsla(354, 93%, 22%, 1) 22.22222222222222%, hsla(358, 97%, 31%, 1) 33.33333333333333%, hsla(0, 100%, 41%, 1) 44.44444444444444%, hsla(12, 98%, 44%, 1) 55.55555555555556%, hsla(23, 97%, 46%, 1) 66.66666666666666%, hsla(34, 95%, 49%, 1) 77.77777777777777%, hsla(39, 96%, 50%, 1) 88.88888888888889%, hsla(43, 100%, 52%, 1) 100%);

background: -moz-linear-gradient(90deg, hsla(231, 82%, 6%, 1) 0%, hsla(339, 80%, 12%, 1) 11.11111111111111%, hsla(354, 93%, 22%, 1) 22.22222222222222%, hsla(358, 97%, 31%, 1) 33.33333333333333%, hsla(0, 100%, 41%, 1) 44.44444444444444%, hsla(12, 98%, 44%, 1) 55.55555555555556%, hsla(23, 97%, 46%, 1) 66.66666666666666%, hsla(34, 95%, 49%, 1) 77.77777777777777%, hsla(39, 96%, 50%, 1) 88.88888888888889%, hsla(43, 100%, 52%, 1) 100%);

background: -webkit-linear-gradient(90deg, hsla(231, 82%, 6%, 1) 0%, hsla(339, 80%, 12%, 1) 11.11111111111111%, hsla(354, 93%, 22%, 1) 22.22222222222222%, hsla(358, 97%, 31%, 1) 33.33333333333333%, hsla(0, 100%, 41%, 1) 44.44444444444444%, hsla(12, 98%, 44%, 1) 55.55555555555556%, hsla(23, 97%, 46%, 1) 66.66666666666666%, hsla(34, 95%, 49%, 1) 77.77777777777777%, hsla(39, 96%, 50%, 1) 88.88888888888889%, hsla(43, 100%, 52%, 1) 100%);`

function App() {
  // useEffect(() => {
  //   Head();
  // }, []);

  return <AppComponent id='app'>
     <Menu/>
  </AppComponent>
}

export default App;
