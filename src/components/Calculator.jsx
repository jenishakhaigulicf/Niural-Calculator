import React from "react";
import { useCalculator } from "../hooks/useCalculator";

const centerStyle = {
  width: "fit-content",
  margin: "auto",
};

const buttonStyle = {
  fontSize: "1.5em",
  margin: "5px",
};

export function Calculator() {
  const { input, result, handleButtonClick } = useCalculator();

  return (
    <div style={centerStyle}>
      <h1>Calculator</h1>
      <input value={input} readOnly style={{ fontSize: "1.5em", width: "100%", textAlign: "right" }} />
      <h2>{result !== null ? `Result: ${result}` : ""}</h2>
      <div style={centerStyle}>
        <div>
          <button style={buttonStyle} onClick={() => handleButtonClick("7")}>7</button>
          <button style={buttonStyle} onClick={() => handleButtonClick("8")}>8</button>
          <button style={buttonStyle} onClick={() => handleButtonClick("9")}>9</button>
          <button style={buttonStyle} onClick={() => handleButtonClick("/")}>/</button>
        </div>
        <div>
          <button style={buttonStyle} onClick={() => handleButtonClick("4")}>4</button>
          <button style={buttonStyle} onClick={() => handleButtonClick("5")}>5</button>
          <button style={buttonStyle} onClick={() => handleButtonClick("6")}>6</button>
          <button style={buttonStyle} onClick={() => handleButtonClick("-")}>-</button>
        </div>
        <div>
          <button style={buttonStyle} onClick={() => handleButtonClick("1")}>1</button>
          <button style={buttonStyle} onClick={() => handleButtonClick("2")}>2</button>
          <button style={buttonStyle} onClick={() => handleButtonClick("3")}>3</button>
          <button style={buttonStyle} onClick={() => handleButtonClick("+")}>+</button>
        </div>
        <div>
          <button style={buttonStyle} onClick={() => handleButtonClick("0")}>0</button>
          <button style={buttonStyle} onClick={() => handleButtonClick(".")}>.</button>
          <button style={buttonStyle} onClick={() => handleButtonClick("=")}>=</button>
          <button style={buttonStyle} onClick={() => handleButtonClick("C")}>C</button>
        </div>
      </div>
    </div>
  );
}
