import { classNames } from "shared/lib/classnames/classnames";
import styles from "./navbar.module.scss";
import { AppLinkTheme, Link } from "shared/ui-tool-kit/link/link";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  return (
    <nav className={classNames(styles.navbar, {}, [className])}>
      <div className={styles.links}>
        <Link
          to={"/about"}
          className={styles.mainLink}
          theme={AppLinkTheme.SECONDARY}
        >
          About
        </Link>
        <Link to={"/"} theme={AppLinkTheme.PRIMARY}>
          Main
        </Link>
      </div>
    </nav>
  );
}
