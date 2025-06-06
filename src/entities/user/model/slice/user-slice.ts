import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_AUTH_KEY } from 'shared/constants/local-storage';

import { IUser, UserSchema } from '../types/user-types';

const initialState: UserSchema = {
  authData: {
    id: '',
    username: '',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<IUser>) => {
      state.authData = action.payload;
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(USER_AUTH_KEY);
      if (user) {
        state.authData = JSON.parse(user);
      }
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_AUTH_KEY);
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
