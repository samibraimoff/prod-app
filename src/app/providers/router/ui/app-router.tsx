import { Route, Routes } from "react-router-dom";
import { routerConfig } from "shared/config/router/router-config";

export const AppRouter = () => {
  return (
    <Routes>
      {Object.values(routerConfig).map(({ element, path }) => (
        <Route path={path} element={element} key={path} />
      ))}
    </Routes>
  );
};
