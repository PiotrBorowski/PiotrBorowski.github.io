import React from "react";
import { Menu } from "./components/Menu";
import styled from "styled-components";

const AppComponent = styled.div`
  background-image: url("./assets/stacked-waves-haikei.svg");
  background-size: cover;
`;

const TitleLetter = styled.span`
  list-style-type: none;
  font-family: archivo-black, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 10em;
  position: relative;
`;

const TitleContainer = styled.div`
  animation: scatter 1s infinite;
`;

const NAME = "Piotr Borowski";

function App() {
  return (
    <AppComponent id="app">
      {/* <Menu/> */}
      <TitleContainer>
        {NAME.split("").map((l, i) => (
          <TitleLetter
            style={{
              textShadow: `4px 4px ${i % 2 ? "#e85d04" : "#6a040f"}`,
              color: i - (1 % 2) ? "#faa307" : "#ffba08",
            }}
          >
            {l}
          </TitleLetter>
        ))}
      </TitleContainer>
      <div style={{ height: 1000 }}></div>

      <div style={{ height: 1000 }}></div>
    </AppComponent>
  );
}

export default App;
