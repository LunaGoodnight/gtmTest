import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { useState } from "react";
import { Tab } from "../utils/Tab";

export const CuteButton = styled.button`
  background: teal;
  padding: 1rem;
  border: none;
  color: #fff;
  border-radius: 1rem;
  cursor: pointer;
`;

const tabList = [
  {
    name: "First Page",
    id: "first-page",
  },
  {
    name: "Second Page",
    id: "second-page",
  },
];

function App() {
  const [data, setData] = useState("cuteLuna");
  return (
    <div className="App">
      <header className="App-header">
        <Tab tabList={tabList} />
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
