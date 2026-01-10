import { lazy } from "react";

const LoginFormAsync = lazy(() => import("./login-form"));

export { LoginFormAsync as LoginForm };
