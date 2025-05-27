import '../../src/app/styles/index.scss';

import { addDecorator } from '@storybook/react';

import { Theme } from '../../src/app/providers/theme';
import { RouterDecorator } from '../../src/shared/config/storybook/decorators/router';
import { ThemeDecorator } from '../../src/shared/config/storybook/decorators/theme';
import { TranslationDecorator } from '../../src/shared/config/storybook/decorators/translations';

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
