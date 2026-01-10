import { DeepPartial } from "@reduxjs/toolkit"
import { StateSchema } from "app/providers/store"

import { getLoginError } from "./get-login-error"


test("getLoginError", () => {
  const state: DeepPartial<StateSchema> = {
    loginForm: {
      error: "Error"
    }
  } 
  expect(getLoginError(state as StateSchema)).toBe("Error")
})