import { useTheme } from "app/providers/theme";
import { classNames } from "shared/lib/helpers/classnames";
import "./styles/index.scss";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/navbar";
import { SidebarMain } from "widgets/sidebar";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <div className="content-page">
        <SidebarMain />
        <AppRouter />
      </div>
    </div>
  );
};
