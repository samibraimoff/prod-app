import { Link, Routes, Route } from "react-router-dom";
import { AboutAsync as About } from "./pages/about/about.lazy";
import { MainAsync as Main } from "./pages/main/main.lazy";
import { useTheme } from "./theme/use-theme";
import "./styles/index.scss";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
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
