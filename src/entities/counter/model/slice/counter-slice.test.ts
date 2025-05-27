import { CounterSchema } from '../types/counter-schema';
import { counterActions, counterReducer } from './counter-slice';

describe('counter slice', () => {
  it('should call increament action on counter reducer', () => {
    const state: CounterSchema = {
      value: 10,
    };
    expect(counterReducer(state, counterActions.increment())).toEqual({
      value: 11,
    });
  });

  it('should call decreament action on counter reducer', () => {
    const state: CounterSchema = {
      value: 10,
    };
    expect(counterReducer(state, counterActions.decrement())).toEqual({
      value: 9,
    });
  });

  it('should call increament action on counter reducer with empty state', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({
      value: 1,
    });
  });
});
