import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const handleInputChange = (e) => {
    setStep(Number(e.target.value));
  };

  const decreaseByOne = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const decreaseByStep = () => {
    if (count - step >= 0) {
      setCount(count - step);
    } else {
      setCount(0);
    }
  };

  return (
    <div className="counter-container">
      <h1>Counter: {count}</h1>
      <div className="btn-group">
        <button onClick={decreaseByOne}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>

      <div className="custom-step">
        <input
          type="number"
          value={step}
          onChange={handleInputChange}
        />
        <button onClick={() => setCount(count + step)}>+</button>
        <button onClick={decreaseByStep}>-</button>
      </div>
    </div>
  );
}

export default Counter;
