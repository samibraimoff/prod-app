import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/counter';
import { userReducer } from 'entities/user';
import { loginReducer } from 'features/auth-by-user';

import { StateSchema } from './state-schema';

const rootReducer: ReducersMapObject<StateSchema> = {
  counter: counterReducer,
  user: userReducer,
  login: loginReducer,
};

export const createReduxStore = (initialState?: StateSchema) => configureStore<StateSchema>({
  reducer: rootReducer,
  devTools: __IS_DEV__,
  preloadedState: initialState,
});
