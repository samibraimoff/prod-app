import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { loginByUsername } from "../services/login-by-username/login-by-username";
import { ILoginSchema } from "../types";

const initialState: ILoginSchema = {
  password: "",
  username: "",
  isLoading: false,
  error: null,
};

export const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByUsername.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(loginByUsername.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(loginByUsername.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
