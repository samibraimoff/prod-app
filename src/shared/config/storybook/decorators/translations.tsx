import { Story } from '@storybook/react';
import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';

import i18nForSb from '../../../../../config/storybook/i18n-for-sb';

export const TranslationDecorator = (StoryComponent: Story) => (
  <I18nextProvider i18n={i18nForSb}>
    <Suspense fallback="">
      <StoryComponent />
    </Suspense>
  </I18nextProvider>
);
