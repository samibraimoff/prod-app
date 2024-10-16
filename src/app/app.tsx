import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { AboutPage } from "pages/about";
import { MainPage } from "pages/main";
import { useTheme } from "app/providers/theme";
import { classNames } from "shared/lib/helpers/classnames";
import "./styles/index.scss";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <button onClick={toggleTheme}>Theme</button>
      <Suspense fallback="loading...">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
