import 'shared/config/i18n/i18n';
import 'app/styles/index.scss';

import { ErrorBoundary } from 'app/providers/error-boundary';
import { ThemeProvider } from 'app/providers/theme';
import { Suspense } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';

render(
  <BrowserRouter>
    <ErrorBoundary>
      <Suspense fallback="">
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Suspense>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById('root'),
);
