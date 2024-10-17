import { Link } from "react-router-dom";
import { useTheme } from "app/providers/theme";
import { classNames } from "shared/lib/helpers/classnames";
import "./styles/index.scss";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/navbar";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <button onClick={toggleTheme}>Theme</button>
      <AppRouter />
    </div>
  );
};
