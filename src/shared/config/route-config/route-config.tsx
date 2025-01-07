import { RouteProps } from "react-router-dom";
import { AboutPage } from "pages/about";
import { MainPage } from "pages/main";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.MAIN]: "/",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.ABOUT]: {
    path: RoutePaths.about,
    element: <AboutPage />,
  },
  [AppRoutes.MAIN]: {
    path: RoutePaths.main,
    element: <MainPage />,
  },
};
