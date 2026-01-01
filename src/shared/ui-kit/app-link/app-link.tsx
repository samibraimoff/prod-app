import { Link, LinkProps } from "react-router-dom";
import { FC } from "react";
import styles from "./app-link.module.scss";
import { cssClassNames } from "shared/helpers/class-names/css-class-names";

export enum ThemeLink {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: ThemeLink;
}

const AppLink: FC<AppLinkProps> = (props) => {
  const { children, className, theme = ThemeLink.PRIMARY, to, ...rest } = props;

  return (
    <Link
      data-testid={"app-link"}
      to={to}
      {...rest}
      className={cssClassNames("", {}, [className, styles[theme]])}
    >
      {children}
    </Link>
  );
};

AppLink.displayName = "AppLink";
export { AppLink };
