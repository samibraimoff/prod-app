import { useState } from "react";
import classes from "./counter.module.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  return (
    <div>
      <h1>Counter</h1>
      <button className={classes.button} onClick={increase}>
        increase
      </button>
      <p>Count: {count}</p>
      <button className={classes.button} onClick={decrease}>
        decrease
      </button>
    </div>
  );
};
