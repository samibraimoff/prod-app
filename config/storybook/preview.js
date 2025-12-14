import { addDecorator } from "@storybook/react";
import { StyleDecorator } from "../../src/shared/config/storybook/decorators/style-decorator";
import { ThemeDecorator } from "../../src/shared/config/storybook/decorators/theme-decorator";
import { RouterDecorator } from "../../src/shared/config/storybook/decorators/router-decorator";
import { Theme } from "../../src/app/providers/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);
