import { FC, useState } from "react";
import { classNames } from "shared/lib/helpers/classnames";
import { ThemeSwitcher } from "widgets/theme-switcher";
import { LanguageSwitcher } from "widgets/language-switcher";
import styles from "./sidebar-main.module.scss";

interface SidebarMainProps {
  className?: string;
}

export const SidebarMain: FC<SidebarMainProps> = (props) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => setCollapsed((prevState) => !prevState);

  return (
    <div
      className={classNames(
        styles.sidebarMain,
        { [styles.collapsed]: collapsed },
        [className]
      )}
    >
      <button onClick={onToggle}>toggle</button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </div>
  );
};
