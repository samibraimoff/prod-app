import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next';

import enUs from '../../../../public/locales/en/translation.json';
import ruRu from '../../../../public/locales/ru/translation.json';

const i18nTest = createInstance();

i18nTest
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: enUs,
      },
      ru: {
        translation: ruRu,
      },
    },
  });

export default i18nTest;
