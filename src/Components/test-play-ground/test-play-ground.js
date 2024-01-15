import React, { useState } from "react";

function TestPlayGround({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => prev - 1);
  };
  const restart = () => {
    setCount(0);
  };
  const switchSighs = () => {
    setCount((prev) => prev * -1);
  };
  return (
    <div>
      count : <span data-testid="count">{count}</span>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={restart}>Restart</button>
        <button onClick={switchSighs}>SwitchSighs</button>
      </div>
    </div>
  );
}

export default TestPlayGround;
