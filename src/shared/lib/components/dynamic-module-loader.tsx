import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/store';
import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducerList = {
  [name in StateSchemaKey]?: Reducer
}

type ReducersListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps {
    reducers: ReducerList,
    removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const {
    children, reducers, removeAfterUnmount,
  } = props;
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([keyName, reducer]: ReducersListEntry) => {
      store.reducerManager.add(keyName, reducer);
      dispatch({
        type: `@INIT ${keyName}`,
      });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([keyName]: ReducersListEntry) => {
          store.reducerManager.remove(keyName);
          dispatch({ type: `@DESTROY ${keyName}` });
        });
      }
    };
    // eslint-disable-next-line
    }, []);
  return (
  // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {children}
    </>
  );
};
