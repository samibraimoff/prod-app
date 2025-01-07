import { classNames } from "shared/lib/classnames/classnames";
import styles from "./navbar.module.scss";
import { Link } from "react-router-dom";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  return (
    <nav className={classNames(styles.navbar, {}, [className])}>
      <div className={styles.links}>
        <Link to={"/about"} className={styles.mainLink}>
          About
        </Link>
        <Link to={"/"}>Main</Link>
      </div>
    </nav>
  );
}
