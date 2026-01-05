import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LOCAL_STORAGE_USER_KEY } from "shared/consts/local-storage";

import { IUser, IUserSchema } from "../types";

const initialState: IUserSchema = {
  authData: undefined
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<IUser>) => {
      state.authData = action.payload;
    },
    initAuthData: (state) => {
      const userData = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
      if (userData) {
        state.authData = JSON.parse(userData);
      }
    },
    logout: (state) => {
      state.authData = undefined
      localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
    }
  }
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;