import './shared/config/i18n/i18n';
import './app/styles/index.scss';

import { Suspense } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from './app/App';
import { ErrorBoundary } from './app/providers/error-boundary';
import { StoreProvider } from './app/providers/store';
import { ThemeProvider } from './app/providers/theme';

render(
  <StoreProvider>
    <BrowserRouter>
      <ErrorBoundary>
        <Suspense fallback="">
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById('root'),
);
