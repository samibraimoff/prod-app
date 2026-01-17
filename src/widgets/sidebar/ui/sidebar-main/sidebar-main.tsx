import { memo, useState } from "react";
import { cssClassNames } from "shared/helpers/class-names/css-class-names";
import { Button, ButtonTheme } from "shared/ui-kit";
import { ButtonSize } from "shared/ui-kit/button/button";
import { LanguageSwitcher } from "widgets/language-switcher";
import { ThemeSwitcher } from "widgets/theme-switcher";

import { items } from "../../model/items";
import { SidebarItem } from "../sidebar-item/sidebar-item";
import styles from "./sidebar-main.module.scss";

interface SidebarProps {
  className?: string;
}


export const Sidebar = memo((props: SidebarProps) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);

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
        {items.map((item) => (
          <SidebarItem
            collapsed={collapsed}
            key={item.path}
            item={item}
          />
        ))}
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
});

Sidebar.displayName = "Sidebar";
