import { Suspense } from "react";
import { Link } from "react-router-dom";
import "app/themes/index.scss";
import { AppRouter } from "app/providers/app-router";
import { useTheme } from "app/providers/theme-provider";
import { classNames } from "shared/lib/classnames/classnames";
import { Navbar } from "widgets/navbar";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Suspense fallback={"loading..."}>
      <div className={classNames("app", {}, [theme])}>
        <Navbar />
        <button onClick={toggleTheme}>theme</button>
        <AppRouter />
      </div>
    </Suspense>
  );
};
