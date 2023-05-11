import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { useEffect, useState } from "react";
import ReactGA from "react-ga4";


export const CuteButton = styled.button`
  background: teal;
  padding: 1rem;
  border: none;
  color: #fff;
  border-radius: 1rem;
  cursor: pointer;
`;

export const FlexBox = styled.div`
  display: flex;
`;

export const Input = styled.input`
  padding: 2rem;
  border: 2px solid skyblue;
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
  const [name, setName] = useState("cuteLuna");
  const [email, setEmail] = useState("default");

  useEffect(() => {
    // ReactGA.event({
    //   event: "search_event_cuteLuna",
    //   SearchedName: name,
    //   SearchedEmail: email,
    // });

    window.dataLayer.push({
      'event': "search_event_cuteLuna",
        'SearchedName': name,
        'SearchedEmail': email,
     })
  }, [name, email]);
  return (
    <div className="App">
      <header className="App-header">
        <FlexBox>
          <div>
            <p>Enter Name</p>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <p>Enter Email</p>

            <Input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <img src={logo} className="App-logo" alt="logo" />
            <p>A website to practice gtm</p>
            <CuteButton type="button" id="click-me">
              Click Me
            </CuteButton>
          </div>
        </FlexBox>
      </header>
    </div>
  );
}

export default App;
