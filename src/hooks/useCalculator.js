import { useState } from "react";

export function useCalculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  // Function to evaluate multiplication and division first
  const evaluateMD = (tokens) => {
    const stack = [];
    let currentNumber = null;
    let currentOperator = null;

    while (tokens.length) {
      const token = tokens.shift();

      if (/\d/.test(token)) {
        //checks if a given token is a number
        currentNumber = parseFloat(token);
        if (currentOperator === "*" || currentOperator === "/") {
          const prevNumber = stack.pop();
          currentNumber = currentOperator === "*"
            ? prevNumber * currentNumber
            : prevNumber / currentNumber;
          currentOperator = null;
        }
        stack.push(currentNumber);
      } else if (token === "*" || token === "/") {
        currentOperator = token;
      }
    }

    return stack;
  };

  // Function to evaluate addition and subtraction
  const evaluateAS = (tokens) => {
    let result = 0;
    let currentOperator = "+";

    while (tokens.length) {
      const token = tokens.shift();

      if (/\d/.test(token)) {
        const num = parseFloat(token);
        result = currentOperator === "+"
          ? result + num
          : result - num;
      } else if (token === "+" || token === "-") {
        currentOperator = token;
      }
    }

    return result;
  };

  // Main calculate function
  const calculate = (expr) => {
    
    const tokens = expr.match(/[+\-*/]|\d+(\.\d+)?/g) || [];
    const mdTokens = evaluateMD(tokens.slice());

    return evaluateAS(mdTokens);
  };

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        setResult(calculate(input));
      } catch {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult(null);
    } else {
      setInput(input + value);
    }
  };

  return {
    input,
    result,
    handleButtonClick,
  };
}
