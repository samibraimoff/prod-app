// eslint-disable-next-line react/no-deprecated
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "app/App";
import { ThemeProvider } from "app/providers/theme";
import { ErrorBoundary } from "app/providers/error-boundary";
import { StoreProvider } from "app/providers/store";
import "./shared/config/i18n/i18n";
import "./app/styles/index.scss";

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
