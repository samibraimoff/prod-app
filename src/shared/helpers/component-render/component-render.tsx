import { DeepPartial } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { StateSchema, StoreProvider } from "app/providers/store";
import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import i18nTest from "shared/config/i18n/i18n-test";

export interface ComponentRenderProps {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
}

export const componentRender = (
  component: ReactNode,
  options: ComponentRenderProps = {}
) => {
  const { route = "/", initialState } = options;
  return render(
    <StoreProvider initialState={initialState}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nTest}>{component}</I18nextProvider>
      </MemoryRouter>
    </StoreProvider>
  );
};
