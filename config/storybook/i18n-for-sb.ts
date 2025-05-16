import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import enUs from '../../public/locales/en-US/translation.json';
import ruRU from '../../public/locales/ru-RU/translation.json';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      'en-US': {
        translation: enUs,
      },
      'ru-RU': {
        translation: ruRU,
      },
    },
    lng: 'en-US',
    fallbackLng: 'en-US',
    debug: false,
    react: { useSuspense: false },
    interpolation: { escapeValue: false },
    supportedLngs: ['en-US', 'ru-RU'],
    load: 'currentOnly',
  });

export default i18n;
