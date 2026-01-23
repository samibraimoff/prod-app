import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/store";

import { IProfile } from "../../types";

export const fetchProfileData = createAsyncThunk<
  IProfile,
  void,
  ThunkConfig<string>
>("profile/fetchProfileData", async (_, thunkAPI) => {
  const { rejectWithValue, extra } = thunkAPI;
  try {
    const response = await extra.api.get<IProfile>(
      "/profile"
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return rejectWithValue("error");
  }
});
