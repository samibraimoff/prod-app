import { DeepPartial } from "@reduxjs/toolkit";
import { ILoginSchema } from "features/auth-by-username";

import { loginActions, loginReducer } from "./login-slice";

describe("loginReducer", () => {
  test("calls username reducer", () => {
    const initialState: DeepPartial<ILoginSchema> = {
      username: ""
    };
    const actionWithPayload = loginActions.setUsername("123");
    const state = initialState as ILoginSchema;
    expect(loginReducer(state, actionWithPayload)).toEqual({ "username": "123" });
  });

  test("calls password reducer", () => {
    const initialState: DeepPartial<ILoginSchema> = {
      password: ""
    };
    const actionWithPayload = loginActions.setPassword("123");
    const state = initialState as ILoginSchema;
    expect(loginReducer(state, actionWithPayload)).toEqual({ "password": "123" });
  });
});