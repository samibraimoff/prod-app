import { classNames } from "shared/lib/helpers/classnames";
import styles from "./app-link.module.scss";
import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...others
  } = props;

  return (
    <Link
      to={to}
      className={classNames(styles.appLink, {}, [className, styles[theme]])}
      {...others}
    >
      {children}
    </Link>
  );
};
