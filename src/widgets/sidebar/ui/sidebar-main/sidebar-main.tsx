import { useState } from "react";

import { cssClassNames } from "shared/helpers/class-names/css-class-names";
import styles from "./sidebar-main.module.scss";
import { ThemeSwithcer } from "widgets/theme-switcher";
import { LanguageSwitcher } from "widgets/language-switcher";

interface SidebarProps {
  className?: string;
}

export const Sidebar = (props: SidebarProps) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed((prevState) => !prevState);
  };

  return (
    <div
      className={cssClassNames(
        styles.sidebar,
        { [styles.collapsed]: collapsed },
        [className],
      )}
    >
      <div className={styles.switchers}>
        <button onClick={toggleSidebar}>toggle</button>
        <ThemeSwithcer />
        <LanguageSwitcher />
      </div>
    </div>
  );
};
