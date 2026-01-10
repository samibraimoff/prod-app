import { DeepPartial } from "@reduxjs/toolkit"
import { StateSchema } from "app/providers/store"

import { getLoginUsername } from "./get-login-username"


test("getLoginUsername", () => {
  const state: DeepPartial<StateSchema> = {
    loginForm: {
      username: "admin"
    }
  } 
  expect(getLoginUsername(state as StateSchema)).toBe("admin")
})