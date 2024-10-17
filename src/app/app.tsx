import { Link } from "react-router-dom";
import { useTheme } from "app/providers/theme";
import { classNames } from "shared/lib/helpers/classnames";
import "./styles/index.scss";
import { AppRouter } from "app/providers/router";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <button onClick={toggleTheme}>Theme</button>
      <AppRouter />
    </div>
  );
};
