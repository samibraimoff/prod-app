import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next';

import enUs from '../../public/locales/en/translation.json';
import ruRu from '../../public/locales/ru/translation.json';

const i18nStorybook = createInstance();

i18nStorybook
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enUs,
      },
      ru: {
        translation: ruRu,
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    debug: false,
    react: { useSuspense: false },
    interpolation: { escapeValue: false },
    supportedLngs: ['en', 'ru'],
    load: 'currentOnly',
  });

export default i18nStorybook;
