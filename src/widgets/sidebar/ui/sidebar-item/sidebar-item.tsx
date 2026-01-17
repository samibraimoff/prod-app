import { memo } from "react";
import { useTranslation } from "react-i18next";
import { cssClassNames } from "shared/helpers/class-names/css-class-names";
import { AppLink, ThemeLink } from "shared/ui-kit";
import { SidebarItemType } from "widgets/sidebar/model/items";
import styles from "widgets/sidebar/ui/sidebar-item/sidebar-item.module.scss";

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo((props: SidebarItemProps) => {
  const { item, collapsed } = props;

  const { t } = useTranslation("translation");
  return (
    <AppLink
      className={cssClassNames(styles.item, { [styles.collapsed]: collapsed }, [])}
      to={item.path}
      theme={ThemeLink.PRIMARY}
    >
      <item.Icon className={styles.icon} />
      <span className={styles.link}>{t(item.text)}</span>
    </AppLink>
  );
});

SidebarItem.displayName = "SidebarItem";