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
  useCalculator();
  return (
    <div style={centerStyle}>
      <h1>Calculator</h1>
      <input />
      <div style={centerStyle}>
        <div>
          <button style={buttonStyle}>7</button>
          <button style={buttonStyle}>8</button>
          <button style={buttonStyle}>9</button>
          <button style={buttonStyle}>*</button>
        </div>
        <div>
          <button style={buttonStyle}>4</button>
          <button style={buttonStyle}>5</button>
          <button style={buttonStyle}>6</button>
          <button style={buttonStyle}>-</button>
        </div>
        <div>
          <button style={buttonStyle}>1</button>
          <button style={buttonStyle}>2</button>
          <button style={buttonStyle}>3</button>
          <button style={buttonStyle}>+</button>
        </div>
        <div>
          <button style={buttonStyle}>0</button>
          <button style={buttonStyle}>.</button>
          <button style={buttonStyle}>=</button>
        </div>
      </div>
    </div>
  );
}
