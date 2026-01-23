import { userActions } from "entities/user";
import { TestAsyncThunk } from "shared/helpers/test-async-thunk/test-async-thunk";

import { loginByUsername } from "./login-by-username";


describe("login-by-username", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("successfully returns user data", async () => {
    const userData = { username: "admin", id: "1" };
    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ data: userData }));
    const result = await thunk.callThunk({ username: "admin", password: "123" });

    expect(thunk.api.post).toHaveBeenCalledTimes(1);
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(userData);
  });

  test("rejected call", async () => {
    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(
      Promise.resolve({ status: 403 })
    );
    const result = await thunk.callThunk({ username: "admin", password: "123" });
    expect(thunk.api.post).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toBe("error");
  });
});