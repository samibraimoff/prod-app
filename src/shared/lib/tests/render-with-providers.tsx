import i18n from 'shared/config/i18n/i18n-test';
import { I18nextProvider } from 'react-i18next';
import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

interface RenderWithProvidersProps {
  route?: string;
}

export const RenderWithProviders = (component: ReactNode, options: RenderWithProvidersProps = {}) => {
  const { route = '/' } = options;
  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18n}>
        {component}
      </I18nextProvider>
    </MemoryRouter>,
  );
};
