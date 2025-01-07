import { Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "app/themes/index.scss";
import { AboutPage } from "pages/about";
import { MainPage } from "pages/main";
import { useTheme } from "app/providers/theme-provider";
import { classNames } from "helpers/classnames/classnames";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Suspense fallback={"loading..."}>
      <div className={classNames("app", {}, [theme])}>
        <Link to={"/about"}>About</Link>
        <Link to={"/"}>Main</Link>
        <button onClick={toggleTheme}>theme</button>
        <Routes>
          <Route path={"/"} element={<MainPage />} />
          <Route path={"/about"} element={<AboutPage />} />
        </Routes>
      </div>
    </Suspense>
  );
};
