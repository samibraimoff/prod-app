import { DeepPartial } from '@reduxjs/toolkit';

import { StateSchema } from '../../../../../app/providers/store';
import { getCounter } from './get-counter';

describe('getCounterSelector', () => {
  it('should return getCounter', () => {
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 0,
      },
    };
    expect(getCounter(state as StateSchema)).toEqual({
      value: 0,
    });
  });
});
