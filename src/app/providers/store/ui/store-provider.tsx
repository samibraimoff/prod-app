import { ReducersMapObject } from "@reduxjs/toolkit";
import { ReactNode, useMemo } from "react";
import { Provider } from "react-redux";
import { useNavigate } from "react-router-dom";

import { StateSchema } from "../config/state-schema";
import { createReduxStore } from "../config/store";

interface StoreProviderProps {
  children: ReactNode;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialState, asyncReducers } = props;

  const navigate = useNavigate();

  const store = useMemo(
    () =>
      createReduxStore(
        initialState as StateSchema,
        asyncReducers as ReducersMapObject<StateSchema>,
        navigate
      ),
    [initialState, asyncReducers, navigate]
  );

  return <Provider store={store}>{children}</Provider>;
};
