import { MainPage } from 'pages/main';
import { AboutPage } from 'pages/about';
import { RouteProps } from 'react-router-dom';
import { NotFoundPage } from 'pages/not-found-page';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOTFOUND = 'notfound'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.MAIN]: '/',
    [AppRoutes.NOTFOUND]: '*'
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.NOTFOUND]: {
        path: RoutePath.notfound,
        element: <NotFoundPage />
    }
};
