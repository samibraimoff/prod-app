import { Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./index.scss";
import AboutPage from "./pages/about/about-page-lazy";
import MainPage from "./pages/main/main-page-lazy";

export const App = () => {
  return (
    <Suspense fallback={"loading..."}>
      <div className={"app"}>
        <Link to={"/about"}>About</Link>
        <Link to={"/"}>Main</Link>
        <Routes>
          <Route path={"/"} element={<MainPage />} />
          <Route path={"/about"} element={<AboutPage />} />
        </Routes>
      </div>
    </Suspense>
  );
};
