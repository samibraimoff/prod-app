import "./index.scss";
import { Route, Routes } from "react-router-dom";
import { MainLazy as Main } from "./pages/main/MainLazy";
import { AboutLazy as About } from "./pages/about/AboutLazy";
import { Link } from "react-router-dom";
import { Suspense } from "react";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <div>
        <Link to="about">About</Link>
        <Link to="/">Main</Link>
      </div>
      <button onClick={toggleTheme}>Toggle</button>
      <Suspense fallback="loading...">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </Suspense>
    </div>
  );
};
