import React, { useState } from "react";

function Button(props) {
  return <button onClick={props.onClick}>{props.text}</button>;
}

function App() {
  const [operand1, setOperand1] = useState(0);
  const [operand2, setOperand2] = useState(0);

  // Perform addition
  const add = () => {
    setOperand1(operand1 + operand2);
    setOperand2(0);
  };

  // Perform subtraction
  const subtract = () => {
    setOperand1(operand1 - operand2);
    setOperand2(0);
  };

  // Perform multiplication
  const multiply = () => {
    setOperand1(operand1 * operand2);
    setOperand2(0);
  };

  // Perform division
  const divide = () => {
    setOperand1(operand1 / operand2);
    setOperand2(0);
  };

  // Clear the result
  const clearResult = () => {
    setOperand1(0);
  };

  // Clear the input
  const clearInput = () => {
    setOperand2(0);
  };

  // Handle input change
  const handleInputChange = (e) => {
    setOperand2(Number(e.target.value));
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <span className="last">{operand1}</span>
          <input
            className="current"
            name="myin"
            onChange={handleInputChange}
            value={operand2}
          />
        </div>
        <div className="calcbtns">
          <Button onClick={add} text="Add" />
          <Button onClick={subtract} text="Subtract" />
          <Button onClick={multiply} text="Multiply" />
          <Button onClick={divide} text="Divide" />
          <Button onClick={clearInput} text="Reset Input" />
          <Button onClick={clearResult} text="Reset Result" />
        </div>
      </div>
    </div>
  );
}

export default App;
