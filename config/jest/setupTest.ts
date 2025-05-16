import '@testing-library/jest-dom';
import 'regenerator-runtime/runtime';

import { toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { changeLanguage: () => Promise.resolve() },
  }),
  initReactI18next: { type: '3rdParty', init: () => {} },
}));
