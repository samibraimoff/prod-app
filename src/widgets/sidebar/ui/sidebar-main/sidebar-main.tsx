import { FC, useState } from "react";
import styles from "./sidebar-main.module.scss";
import { classNames } from "shared/lib/helpers/classnames";
import { ThemeSwitcher } from "widgets/theme-switcher";

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
      </div>
    </div>
  );
};
