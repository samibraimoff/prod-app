import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/store";

import { getCounterValue } from "./get-counter-value"

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