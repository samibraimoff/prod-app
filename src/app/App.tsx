import { useTheme } from "app/providers/theme";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/navbar/ui/Navbar";
import "./styles/index.scss";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <button onClick={toggleTheme}>toggle</button>
      <AppRouter />
    </div>
  );
};
