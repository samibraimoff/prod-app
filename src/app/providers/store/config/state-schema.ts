import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { IUserSchema } from "entities/user";
import { ILoginSchema } from "features/auth-by-username";

export interface StateSchema {
  user: IUserSchema,

  // asynchronous reducers
  loginForm?: ILoginSchema
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>,
  // eslint-disable-next-line no-unused-vars
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  // eslint-disable-next-line no-unused-vars
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  // eslint-disable-next-line no-unused-vars
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore {
  reducerManager: ReducerManager;
}