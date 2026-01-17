import axios from "axios";
import { userActions } from "entities/user";
import { TestAsyncThunk } from "shared/helpers/test-async-thunk/test-async-thunk";

import { loginByUsername } from "./login-by-username";

jest.mock("axios");
const mockedAxios = jest.mocked(axios, true);

describe("login-by-username", () => {
  // let dispatch: Dispatch;
  // let getState: () => StateSchema;
  //
  // beforeEach(() => {
  //   dispatch = jest.fn();
  //   getState = jest.fn();
  // });
  // afterEach(() => {
  //   jest.clearAllMocks();
  // });
  //
  // test("successfully returns user data", async () => {
  //   const userData = { username: "admin", id: "1" };
  //   mockedAxios.post.mockReturnValue(
  //     Promise.resolve({ data: userData })
  //   );
  //   const action = loginByUsername({ username: "admin", password: "123" });
  //   const result = await action(dispatch, getState, undefined);
  //   expect(mockedAxios.post).toHaveBeenCalledTimes(1);
  //   expect(dispatch).toHaveBeenCalledTimes(3);
  //   expect(result.meta.requestStatus).toBe("fulfilled");
  //   expect(result.payload).toEqual(userData);
  //   expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
  // });
  //
  // test("rejected call", async () => {
  //   mockedAxios.post.mockReturnValue(
  //     Promise.resolve({ status: 403 })
  //   );
  //   const action = loginByUsername({ username: "admin", password: "123" });
  //   const result = await action(dispatch, getState, undefined);
  //   expect(mockedAxios.post).toHaveBeenCalled();
  //   expect(dispatch).toHaveBeenCalledTimes(2);
  //   expect(result.meta.requestStatus).toBe("rejected");
  //   expect(result.payload).toBe("error");
  // });

  test("successfully returns user data", async () => {
    const userData = { username: "admin", id: "1" };
    mockedAxios.post.mockReturnValue(
      Promise.resolve({ data: userData })
    );
    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: "admin", password: "123" });

    expect(mockedAxios.post).toHaveBeenCalledTimes(1);
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(userData);
  });

  test("rejected call", async () => {
    mockedAxios.post.mockReturnValue(
      Promise.resolve({ status: 403 })
    );
    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: "admin", password: "123" });
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toBe("error");
  });
});