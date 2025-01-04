import { useState } from "react";
import "./counter.scss";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button onClick={() => setCounter((prev) => prev - 1)}>decrement</button>
      <p>counter: {counter}</p>
      <button onClick={() => setCounter((prev) => prev + 1)}>increment</button>
    </div>
  );
};
