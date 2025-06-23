import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/store';

import { getLoginIsLoading } from './get-login-is-loading';

describe('getLoginIsLoading', () => {
  it('should return default loading status', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginIsLoading(state as StateSchema)).toBe(false);
  });

  it('should return loading status true', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        isLoading: true,
      },
    };
    expect(getLoginIsLoading(state as StateSchema)).toBe(true);
  });
});
