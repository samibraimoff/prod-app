import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config';
import { Suspense } from 'react';
import { PageLoader } from 'widgets/page-loader';


export function AppRouter() {
    return (
        <div className="page-wrapper">
            <Routes>
                {Object.values(routeConfig).map(({ element, path }) => (
                    <Route key={path} path={path} element={<Suspense fallback={<PageLoader />}>{element}</Suspense>} />
                ))}
            </Routes>
        </div>
    );
}
