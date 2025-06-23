import { DeepPartial } from '@reduxjs/toolkit';

import { LoginSchema } from '../types/login-schema';
import { loginActions, loginReducer } from './login-slice';

describe('Login slice', () => {
  it('should set username', () => {
    const initialState: DeepPartial<LoginSchema> = {
      username: 'username',
    };
    const expected = { username: '123' };
    const result = loginReducer(initialState as LoginSchema, loginActions.setUsername('123'));
    expect(result).toEqual(expected);
  });

  it('should set password', () => {
    const initialState: DeepPartial<LoginSchema> = {
      password: 'password',
    };
    const expected = { password: '123' };
    const result = loginReducer(initialState as LoginSchema, loginActions.setPassword('123'));
    expect(result).toEqual(expected);
  });
});
