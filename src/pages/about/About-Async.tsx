import { lazy } from "react";

const AboutAsync = lazy(() => import("./About"));

export { AboutAsync as About };
