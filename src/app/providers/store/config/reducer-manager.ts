import { AnyAction, combineReducers, Reducer, ReducersMapObject } from "@reduxjs/toolkit";

import { ReducerManager,StateSchema, StateSchemaKey } from "./state-schema";

export const createReducerManager = (initialReducers: ReducersMapObject<StateSchema>): ReducerManager => {
  const reducers = { ...initialReducers };
  let combinedReducers = combineReducers(reducers);
  let keysToRemove: Array<StateSchemaKey> = [];

  return {
    getReducerMap: () => reducers,
    reduce: (state: StateSchema, action: AnyAction) => {
      if (keysToRemove.length > 0) {
        state = { ...state };
        keysToRemove.forEach((key) => {
          delete state[key];
        });
        keysToRemove = [];
      }
      return combinedReducers(state, action);

    },
    add: (key: StateSchemaKey, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return;
      }
      reducers[key] = reducer;
      combinedReducers = combineReducers(reducers);
    },
    remove: (key: StateSchemaKey) => {
      if (!key || !reducers[key]) {
        return;
      }
      delete reducers[key];
      keysToRemove.push(key);
      combinedReducers = combineReducers(reducers);
    }
  };
};