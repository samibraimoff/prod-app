import { Link, Routes, Route } from "react-router-dom";
import { classNames } from "shared/lib/class-names/class-names";
import { About } from "pages/about";
import { Main } from "pages/main";
import { useTheme } from "./providers/theme";
import "./styles/index.scss";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>theme</button>
      <Link to={"/about"}>About</Link>
      <Link to={"/"}>Main</Link>
      <Routes>
        <Route path={"/about"} element={<About />} />
        <Route path={"/"} element={<Main />} />
      </Routes>
    </div>
  );
};
