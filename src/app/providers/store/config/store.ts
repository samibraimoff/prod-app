import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/counter';
import { userReducer } from 'entities/user';

import { StateSchema } from './state-schema';

const rootReducer: ReducersMapObject<StateSchema> = {
  counter: counterReducer,
  user: userReducer,
};

export const createReduxStore = (initialState?: StateSchema) => configureStore<StateSchema>({
  reducer: rootReducer,
  devTools: __IS_DEV__,
  preloadedState: initialState,
});
