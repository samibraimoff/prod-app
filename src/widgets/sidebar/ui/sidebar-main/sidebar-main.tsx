import { useState } from "react";
import { useTranslation } from "react-i18next";

import { cssClassNames } from "shared/helpers/class-names/css-class-names";
import { AppLink, Button, ButtonTheme, ThemeLink } from "shared/ui-kit";
import { ButtonSize } from "shared/ui-kit/button/button";
import { LanguageSwitcher } from "widgets/language-switcher";
import { ThemeSwitcher } from "widgets/theme-switcher";
import { RoutePath } from "shared/config/router-config/router-config";
import HomeIcon from "shared/assets/icons/home.svg";
import AboutIcon from "shared/assets/icons/about.svg";
import styles from "./sidebar-main.module.scss";

interface SidebarProps {
  className?: string;
}

export const Sidebar = (props: SidebarProps) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation("translation");

  const toggleSidebar = () => {
    setCollapsed((prevState) => !prevState);
  };

  return (
    <div
      data-testid="sidebar"
      className={cssClassNames(
        styles.sidebar,
        { [styles.collapsed]: collapsed },
        [className]
      )}
    >
      <div className={styles.links}>
        <AppLink className={styles.item} to={RoutePath.home} theme={ThemeLink.PRIMARY}>
          <HomeIcon className={styles.icon} />
          <span className={styles.link}>{t("navlinks.home")}</span>
        </AppLink>
        <AppLink className={styles.item} to={RoutePath.about} theme={ThemeLink.PRIMARY}>
          <AboutIcon className={styles.icon} />
          <span className={styles.link}>{t("navlinks.about")}</span>
        </AppLink>
      </div>
      <Button
        data-testid="sidebar-toggle"
        onClick={toggleSidebar}
        className={styles.collapseButton}
        theme={ButtonTheme.BACKGROUND}
        square
        size={ButtonSize.L}
      >
        {collapsed ? ">" : "<"}
      </Button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher short={collapsed} />
      </div>
    </div>
  );
};
