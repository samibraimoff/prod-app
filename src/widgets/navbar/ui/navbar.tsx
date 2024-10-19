import styles from "./navbar.module.scss";
import { classNames } from "shared/lib/helpers/classnames";
import { FC } from "react";
import { AppLink, AppLinkTheme } from "shared/ui";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props;

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <div className={classNames(styles.links, {}, [])}>
        <AppLink
          to="/"
          theme={AppLinkTheme.SECONDARY}
          className={classNames(styles.mainLink, {}, [])}
        >
          Main
        </AppLink>
        <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>
          About
        </AppLink>
      </div>
    </div>
  );
};
