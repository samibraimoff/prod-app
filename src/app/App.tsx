import { AppRouter } from "app/providers/router";
import { Link } from "react-router-dom";
import { classNames } from "shared/lib/class-names/class-names";
import { useTheme } from "./providers/theme";
import "./styles/index.scss";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>theme</button>
      <Link to={"/about"}>About</Link>
      <Link to={"/"}>Main</Link>
      <AppRouter />
    </div>
  );
};
