import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { userReducer } from "entities/user";

import { createReducerManager } from "./reducer-manager"
import { StateSchema } from "./state-schema";

export const createReduxStore = (
  initialState?: StateSchema, 
  asyncReducers?: ReducersMapObject<StateSchema>
) => {

  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducer);

  const store =  configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
};