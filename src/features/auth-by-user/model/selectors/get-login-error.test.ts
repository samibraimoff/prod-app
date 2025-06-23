import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/store';

import { getLoginError } from './get-login-error';

describe('getLoginError', () => {
  it('should return error message', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        error: 'Login error message',
      },
    };
    const expected = 'Login error message';
    expect(getLoginError(state as StateSchema)).toBe(expected);
  });

  it('should return undefined', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginError(state as StateSchema)).toBe(undefined);
  });
});
