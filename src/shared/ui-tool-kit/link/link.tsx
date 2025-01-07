import { FC } from "react";
import { LinkProps, Link as RouterLink } from "react-router-dom";
import { classNames } from "shared/lib/classnames/classnames";
import styles from "./link.module.scss";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  to: string;
  className?: string;
  theme?: AppLinkTheme;
}

export const Link: FC<AppLinkProps> = (props) => {
  const {
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;
  return (
    <RouterLink
      to={to}
      className={classNames(styles.link, {}, [className, styles[theme]])}
      {...otherProps}
    >
      {children}
    </RouterLink>
  );
};
