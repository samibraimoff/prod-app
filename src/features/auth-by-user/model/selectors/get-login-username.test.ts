import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/store';

import { getLoginUsername } from './get-login-username';

describe('getLoginUsername', () => {
  it('should return login username', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        username: 'admin',
      },
    };
    const expected = 'admin';
    expect(getLoginUsername(state as StateSchema)).toBe(expected);
  });
});
