import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/navbar";

import { useTheme } from "app/providers/theme";
import { cssClassNames } from "shared/helpers/class-names/css-class-names";
import { Sidebar } from "widgets/sidebar";
import { Suspense } from "react";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={cssClassNames("app", {}, [theme])}>
      <Suspense fallback={"loading..."}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
