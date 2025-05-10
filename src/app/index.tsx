import { Suspense } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/theme';
import { App } from './App';
import 'shared/config/i18n/i18n';

render(
    <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </Suspense>
    </BrowserRouter>,
    document.getElementById('root'),
);
