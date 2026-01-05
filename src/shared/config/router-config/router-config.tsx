import { About } from "pages/about";
import { Home } from "pages/home";
import { NotFoundPage } from "pages/not-found-page";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
  HOME = "home",
  ABOUT = "about",
  NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.HOME]: {
    path: RoutePath.home,
    element: <Home />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <About />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
