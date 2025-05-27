import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/store';

import { getCounterValue } from './get-counter-value';

describe('getCounterValueSelector', () => {
  it('should return getCounter value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 10,
      },
    };
    expect(getCounterValue(state as StateSchema)).toBe(10);
  });
});
