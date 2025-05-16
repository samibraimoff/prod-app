import { addDecorator } from '@storybook/react';
import { ThemeDecorator } from '../../src/shared/config/storybook/decorators/theme';
import { RouterDecorator } from '../../src/shared/config/storybook/decorators/router';
import { TranslationDecorator } from '../../src/shared/config/storybook/decorators/translations';
import '../../src/app/styles/index.scss';
import { Theme } from '../../src/app/providers/theme';

addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);
addDecorator(TranslationDecorator);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
