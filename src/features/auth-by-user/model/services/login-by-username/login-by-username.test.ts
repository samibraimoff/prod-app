import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/store';
import axios from 'axios';
import { userActions } from 'entities/user';
import { TestAsyncThunk } from 'shared/lib/tests/test-async-thunk';

import { loginByUsername } from './login-by-username';

jest.mock('axios');
const axiosMocked = jest.mocked(axios, true);

// describe('loginByUsername', () => {
//   let dispatch: Dispatch;
//   let getState: () => StateSchema;
//
//   beforeEach(() => {
//     dispatch = jest.fn();
//     getState = jest.fn();
//   });
//   it('successfully returns user name', async () => {
//     const userValue = { id: '1', username: 'admin' };
//     axiosMocked.post.mockReturnValue(Promise.resolve({ data: userValue }));
//     const action = loginByUsername({ username: 'admin', password: '123' });
//     const result = await action(dispatch, getState, undefined);
//     expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
//     expect(dispatch).toHaveBeenCalledTimes(3);
//     expect(axiosMocked.post).toHaveBeenCalled();
//     expect(result.meta.requestStatus).toBe('fulfilled');
//     expect(result.payload).toEqual(userValue);
//   });
//
//   it('returns rejected', async () => {
//     axiosMocked.post.mockReturnValue(Promise.resolve({ status: 403 }));
//     const action = loginByUsername({ username: 'admin', password: '123' });
//     const result = await action(dispatch, getState, undefined);
//     expect(dispatch).toHaveBeenCalledTimes(2);
//     expect(axiosMocked.post).toHaveBeenCalled();
//     expect(result.meta.requestStatus).toBe('rejected');
//     expect(result.payload).toEqual('features.apiErrorMessage');
//   });
// });

describe('loginByUsername', () => {
  it('successfully returns user name', async () => {
    const userValue = { id: '1', username: 'admin' };
    axiosMocked.post.mockReturnValue(Promise.resolve({ data: userValue }));
    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: 'admin', password: '123' });
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(axiosMocked.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userValue);
  });

  it('returns rejected', async () => {
    axiosMocked.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: 'admin', password: '123' });
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(axiosMocked.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual('features.apiErrorMessage');
  });
});
