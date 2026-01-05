import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/store";

import { getCounter } from "./get-counter"

describe('getCounter selector', () => { 
  test("should return counter state", () => {
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 10
      }
    }
    const result = getCounter(state as StateSchema);
    expect(result).toEqual({ value: 10 });
  })
})