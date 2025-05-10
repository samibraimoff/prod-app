import { Route, Routes } from 'react-router-dom';
import { routerConfig } from 'shared/config/router/router-config';

export function AppRouter() {
    return (
        <Routes>
            {Object.values(routerConfig).map(({ element, path }) => (
                <Route
                    path={path}
                    element={<div className="wrapper">{element}</div>}
                    key={path}
                />
            ))}
        </Routes>
    );
}
