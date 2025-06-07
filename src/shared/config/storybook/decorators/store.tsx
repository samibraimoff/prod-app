import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/store';
import { loginReducer } from 'features/auth-by-user/model/slice/login-slice';

const defaultAsyncReducer: DeepPartial<ReducersMapObject<StateSchema>> = {
  login: loginReducer,
};

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers: DeepPartial<ReducersMapObject<StateSchema>>,
) => (StoryComponent: Story) => (
  <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducer, ...asyncReducers }}>
    <StoryComponent />
  </StoreProvider>
);
