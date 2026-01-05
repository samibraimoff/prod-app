import "./shared/config/i18n/i18n";
import "./app/styles/index.scss";

import { App } from "app/App";
import { ErrorBoundary } from "app/providers/error-boundary";
import { StoreProvider } from "app/providers/store";
import { ThemeProvider } from "app/providers/theme";
// eslint-disable-next-line react/no-deprecated
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

const component = (
  <StoreProvider>
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StoreProvider>
);

render(component, document.getElementById("root"));
