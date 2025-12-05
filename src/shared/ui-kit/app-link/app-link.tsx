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

export const AppLink: FC<AppLinkProps> = (props) => {
  const { children, className, theme = ThemeLink.PRIMARY, to, ...rest } = props;

  return (
    <Link
      to={to}
      {...rest}
      className={cssClassNames(styles.appLink, {}, [className, styles[theme]])}
    >
      {children}
    </Link>
  );
};
