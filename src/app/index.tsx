import { Suspense } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/theme';
import { ErrorBoundary } from 'app/providers/error-boundary';
import { App } from './App';
import 'shared/config/i18n/i18n';

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
