import { createSlice } from "@reduxjs/toolkit";

import { IProfileSchema } from "../types";

const initialState: IProfileSchema = {
  data: undefined,
  error: undefined,
  isLoading: false,
  readonly: true
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {}
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;