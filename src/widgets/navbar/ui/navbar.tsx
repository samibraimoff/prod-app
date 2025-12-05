import { AppLink, ThemeLink } from "shared/ui-kit/app-link/app-link";
import { useTranslation } from "react-i18next";
import { cssClassNames } from "shared/helpers/class-names/css-class-names";
import styles from "./navbar.module.scss";

interface NavbarProps {
  classNames?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { classNames } = props;
  const { t } = useTranslation("translation");

  return (
    <div className={cssClassNames(styles.navbar, {}, [classNames])}>
      <div className={styles.links}>
        <AppLink to="/" theme={ThemeLink.PRIMARY} className={styles.homeLink}>
          {t("navlinks.home")}
        </AppLink>
        <AppLink to="/about" theme={ThemeLink.PRIMARY}>
          {t("navlinks.about")}
        </AppLink>
      </div>
    </div>
  );
};
