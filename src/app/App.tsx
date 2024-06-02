import { Suspense } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Main } from "pages/main";
import { About } from "pages/about";
import { useTheme } from "app/providers/theme";
import { classNames } from "shared/lib/classNames/classNames";
import "./styles/index.scss";

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
