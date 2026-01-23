/* eslint-disable indent */
/* eslint-disable react/display-name */
import { Story } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/store";
import { profileReducer } from "entities/profile";
import { loginReducer } from "features/auth-by-username/model/slice/login-slice";
import { ReducersList } from "shared/components/dynamic-module-loader/dynamic-module-loader";

const defaultReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer
};

export const StoreDecorator =
  (
    initialState: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList
  ) =>
    (StoryComponent: Story) => (
      <StoreProvider
        initialState={initialState}
        asyncReducers={{ ...defaultReducers, ...asyncReducers }}
      >
        <StoryComponent />
      </StoreProvider>
    );
