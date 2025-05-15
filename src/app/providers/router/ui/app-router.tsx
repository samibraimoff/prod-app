import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from 'shared/config/router/router-config';
import { PageLoader } from 'widgets/page-loader';

export function AppRouter() {
  return (
    <Routes>
      {Object.values(routerConfig).map(({ element, path }) => (
        <Route
          path={path}
          element={(
            <Suspense fallback={<PageLoader />}>
              <div className="wrapper">{element}</div>
            </Suspense>
          )}
          key={path}
        />
      ))}
    </Routes>
  );
}
