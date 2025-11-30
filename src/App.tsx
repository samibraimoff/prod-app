import { Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";

import { About } from "./pages/about/About-Async";
import { Home } from "./pages/home/Home-Async";
import { useTheme } from "./theme/use-theme";

import { cssClassNames } from "./helpers/class-names/css-class-names";

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
