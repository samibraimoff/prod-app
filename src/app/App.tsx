import { useTheme } from "app/providers/theme";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/navbar";
import "./styles/index.scss";
import { Sidebar } from "widgets/sidebar";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <div className="content">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};
