import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useTheme } from "./ThemeContext";
import styled, { withTheme } from "styled-components";
import { buttonBackgroundColor, buttonTextColor } from "./theme";
import tooth from "./tooth.png";

function App(props) {
  const themeToggle = useTheme();

  const Button = styled.button`
    background: ${buttonBackgroundColor};
    border: none;
    border-radius: 0.3em;
    box-shadow: none;
    color: ${buttonTextColor};
    cursor: pointer;
    font-size: 1em;
    padding: 0.5em 1em;
  `;

  const teeth = [
    <img className="tooth-image one" src={tooth} alt="" />,
    <img className="tooth-image two" src={tooth} alt="" />,
    <img className="tooth-image three" src={tooth} alt="" />,
    <img className="tooth-image four" src={tooth} alt="" />,
    <img className="tooth-image five" src={tooth} alt="" />,
    <img className="tooth-image six" src={tooth} alt="" />,
    <img className="tooth-image seven" src={tooth} alt="" />,
    <img className="tooth-image eight" src={tooth} alt="" />,
    <img className="tooth-image nine" src={tooth} alt="" />,
    <img className="tooth-image ten" src={tooth} alt="" />
  ];

  return (
    <>
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>
            <Button onClick={() => themeToggle.toggle()}>
              {props.theme.mode === "dark"
                ? "Switch to Light Mode"
                : "Switch to Dark Mode"}
            </Button>
          </p>
        </header>
      </div>
      <div className="semi-circle">
        {teeth.map(tooth => {
          console.log(tooth);
          return tooth;
        })}
      </div>
    </>
  );
}

export default withTheme(App);
