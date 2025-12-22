import { cssClassNames } from "shared/helpers/class-names/css-class-names";
import styles from "./navbar.module.scss";

interface NavbarProps {
  classNames?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { classNames } = props;

  return (
    <div className={cssClassNames(styles.navbar, {}, [classNames])}>
      <div className={styles.links}>

      </div>
    </div>
  );
};
