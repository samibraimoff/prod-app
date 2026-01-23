import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { fetchProfileData } from "../services/fetch-profile-data/fetch-profile-data";
import { IProfile, IProfileSchema } from "../types";

const initialState: IProfileSchema = {
  data: undefined,
  error: undefined,
  isLoading: false,
  readonly: true
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<IProfile>) => {
        state.isLoading = false;
        state.data = action.payload
      })
      .addCase(fetchProfileData.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;