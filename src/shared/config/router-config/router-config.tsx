import { About } from "pages/about";
import { Home } from "pages/home";
import { NotFoundPage } from "pages/not-found-page";
import { Profile } from "pages/profile";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
  HOME = "home",
  ABOUT = "about",
  NOT_FOUND = "not_found",
  PROFILE = "profile",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.PROFILE]: "/profile",
  [AppRoutes.NOT_FOUND]: "*"
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.HOME]: {
    path: RoutePath.home,
    element: <Home />
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <About />
  },
  [AppRoutes.PROFILE]: {
    path: RoutePath.profile,
    element: <Profile />
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />
  }
};
