import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUser, userActions } from 'entities/user';
import i18n from 'shared/config/i18n/i18n';
import { USER_AUTH_KEY } from 'shared/constants/local-storage';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<IUser, LoginByUsernameProps, { rejectValue: string}>(
  'login/loginByUsername',
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await axios.post<IUser>('http://localhost:8080/login', {
        username, password,
      }, {
        headers: {
          Authorization: 'Bearer token',
        },
      });
      if (!response.data) {
        throw new Error();
      }
      localStorage.setItem(USER_AUTH_KEY, JSON.stringify(response.data));
      thunkAPI.dispatch(userActions.setAuthData(response.data));
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(i18n.t('features.apiErrorMessage'));
    }
  },
);
