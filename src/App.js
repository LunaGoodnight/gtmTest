import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { useState } from "react";

export const CuteButton = styled.button`
  background: teal;
`;

function App() {
  const [data, setData] = useState("cuteLuna");
  const handleClick = () => {};
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>A website to practice gtm</p>
        <CuteButton type="button" id="click-me">
          Click Me
        </CuteButton>
      </header>
    </div>
  );
}

export default App;
