import React, { useState } from "react";

function TestPlayGround({ initialCount }) {
  console.log("001...." + initialCount);

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
      <h1>
        {" "}
        Count: <span data-testid="count">{count}</span>
      </h1>
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
