import { Link, Routes, Route } from "react-router-dom";
import { AboutAsync as About } from "./pages/about/about.lazy";
import { MainAsync as Main } from "./pages/main/main.lazy";
import "./index.scss";

export const App = () => {
  return (
    <div className={"app"}>
      <Link to={"/about"}>About</Link>
      <Link to={"/"}>Main</Link>
      <Routes>
        <Route path={"/about"} element={<About />} />
        <Route path={"/"} element={<Main />} />
      </Routes>
    </div>
  );
};
