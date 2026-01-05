import { AppRouter } from "app/providers/router";
import { useTheme } from "app/providers/theme";
import { userActions } from "entities/user";
import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { cssClassNames } from "shared/helpers/class-names/css-class-names";
import { Navbar } from "widgets/navbar";
import { Sidebar } from "widgets/sidebar";

export const App = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={cssClassNames("app", {}, [theme])}>
      <Suspense fallback={""}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
