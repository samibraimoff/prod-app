import { lazy } from "react";

const ProfileAsync = lazy(() => import("./Profile"));

export { ProfileAsync as Profile };
