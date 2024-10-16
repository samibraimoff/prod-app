import { Routes, Route } from "react-router-dom";
import { AboutPageLazy as AboutPage } from "./pages/about/about-page-async";
import { MainPageLazy as MainPage } from "./pages/main/main-page-async";
import { Link } from "react-router-dom";
import { Suspense } from "react";
import "./styles/index.scss";
import { useTheme } from "./theme/use-theme";
import { classNames } from "./helpers/classnames";

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
