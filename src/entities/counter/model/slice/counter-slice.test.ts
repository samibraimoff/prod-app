import { CounterSchema } from "../types"
import { counterActions, counterReducer } from "./counter-slice"

describe("counter slice reducers", () => {
  test("should increment counter value on increment action", () => {
    const state: CounterSchema = { value: 10 };
    const result = counterReducer(state, counterActions.increment);
    expect(result).toEqual({ value: 11 });
  })

  test("should decrement counter value on decrement action", () => {
    const state: CounterSchema = { value: 10 };
    const result = counterReducer(state, counterActions.decrement);
    expect(result).toEqual({ value: 9 });
  })

  test("should increment counter default value on increment action", () => {
    const result = counterReducer(undefined, counterActions.increment);
    expect(result).toEqual({ value: 1 });
  })
})