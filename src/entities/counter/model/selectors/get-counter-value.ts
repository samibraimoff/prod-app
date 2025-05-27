import { createSelector } from '@reduxjs/toolkit';

import { getCounter } from './get-counter';

export const getCounterValue = createSelector(getCounter, (counter) => counter.value);
