import { DeepPartial } from "@reduxjs/toolkit";
import { ReactNode, useMemo } from "react";
import { Provider } from "react-redux";

import { StateSchema } from "../config/state-schema";
import { createReduxStore } from "../config/store";

interface StoreProviderProps {
  children: ReactNode;
  initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialState } = props;
  const store = useMemo(
    () => createReduxStore(initialState as StateSchema),
    [initialState]
  );

  return <Provider store={store}>{children}</Provider>;
};
