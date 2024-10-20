import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config";

export function AppRouter() {
  return (
    <div className="page-wrapper">
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </div>
  );
}
