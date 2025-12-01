import { lazy } from "react";

const HomeAsync = lazy(() => import("./Home"));
export { HomeAsync as Home };
