import { Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";

import { About } from "pages/about";
import { Home } from "pages/home";
import { useTheme } from "app/providers/theme";

import { cssClassNames } from "shared/helpers/class-names/css-class-names";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={cssClassNames("app", {}, [theme])}>
      <Link to="/about">About</Link>
      <Link to="/">Home</Link>
      <button onClick={toggleTheme}>theme</button>
      <Suspense fallback={"loading..."}>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about"} element={<About />} />
        </Routes>
      </Suspense>
    </div>
  );
};
