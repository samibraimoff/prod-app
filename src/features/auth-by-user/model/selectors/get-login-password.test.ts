import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/store';

import { getLoginPassword } from './get-login-password';

describe('getLoginPassword', () => {
  it('should return password', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        password: '123',
      },
    };
    const expected = '123';
    expect(getLoginPassword(state as StateSchema)).toBe(expected);
  });
});
