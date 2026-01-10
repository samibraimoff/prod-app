import { DeepPartial } from "@reduxjs/toolkit"
import { StateSchema } from "app/providers/store"

import { getLoginIsLoading } from "./get-login-is-loading"


test("getLoginIsLoading false", () => {
  const state: DeepPartial<StateSchema> = {
    loginForm: {
      isLoading: false
    }
  } 
  expect(getLoginIsLoading(state as StateSchema)).toBe(false)
})

test("getLoginIsLoading true", () => {
  const state: DeepPartial<StateSchema> = {
    loginForm: {
      isLoading: true
    }
  } 
  expect(getLoginIsLoading(state as StateSchema)).toBe(true)
})