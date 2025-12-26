import { useDispatch, useSelector } from "react-redux";

import { counterActions } from "../model/slice/counter-slice";
import { getCounterValue } from "../model/selectors/get-counter-value/get-counter-value";
import { Button, ButtonTheme } from "shared/ui-kit";

/* eslint-disable i18next/no-literal-string */
export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <>
      <h1>Counter value: {counterValue}</h1>
      <p>store example using redux</p>
      <Button onClick={increment} theme={ButtonTheme.OUTLINE}>
        Increment
      </Button>
      <Button onClick={decrement} theme={ButtonTheme.OUTLINE}>
        Decrement
      </Button>
    </>
  );
};
