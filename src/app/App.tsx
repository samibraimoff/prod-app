import { useTheme } from "app/providers/theme";
import { classNames } from "shared/lib/classNames/classNames";
import "./styles/index.scss";
import { AppRouter } from "./providers/router";
import { Link } from "react-router-dom";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <div>
        <Link to="about">About</Link>
        <Link to="/">Main</Link>
      </div>
      <button onClick={toggleTheme}>Toggle</button>
      <AppRouter />
    </div>
  );
};
