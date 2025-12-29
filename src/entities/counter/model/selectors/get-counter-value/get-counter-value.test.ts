import { DeepPartial } from "@reduxjs/toolkit";
import { getCounterValue } from "./get-counter-value"
import { StateSchema } from "app/providers/store";

describe("getCounterValue selector", () => {
  test("should return counter state value", () => {
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 10
      }
    }
    const result = getCounterValue(state as StateSchema)
    expect(result).toBe(10);
  })
})