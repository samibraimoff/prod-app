import { StateSchema } from "app/providers/store";

import { getLoginPassword } from "./get-login-password";


test("getLoginPassword", () => {
  const state: DeepPartial<StateSchema> = {
    loginForm: {
      password: "123"
    }
  };
  expect(getLoginPassword(state as StateSchema)).toBe("123");
});