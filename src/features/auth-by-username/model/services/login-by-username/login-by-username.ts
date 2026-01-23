import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/store";
import { IUser, userActions } from "entities/user";
import { LOCAL_STORAGE_USER_KEY } from "shared/consts/local-storage";

export interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  IUser,
  LoginByUsernameProps,
  ThunkConfig<string>
>("login/loginByUsername", async (authData, thunkAPI) => {
  const { dispatch, rejectWithValue, extra } = thunkAPI;

  try {
    const response = await extra.api.post(
      "/login",
      authData
    );
    if (!response.data) {
      throw new Error();
    }
    extra.navigate?.("/about");
    localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(response.data));
    dispatch(userActions.setAuthData(response.data));

    return response.data;
  } catch (error) {
    console.log(error);
    return rejectWithValue("error");
  }
});
