import { useState } from "react";
import styles from "./counter.module.scss";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button
        className={styles.button}
        onClick={() => setCounter((prev) => prev - 1)}
      >
        decrement
      </button>
      <p>counter: {counter}</p>
      <button
        className={styles.button}
        onClick={() => setCounter((prev) => prev + 1)}
      >
        increment
      </button>
    </div>
  );
};
