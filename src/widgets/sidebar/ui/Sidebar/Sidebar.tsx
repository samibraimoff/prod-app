import { useState } from "react";
import cls from "./Sidebar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { ThemeSwitcher } from "widgets/themeSwitcher";
import { LangSwitcher } from "widgets/langSwitcher";

interface SideBarProps {
  className?: string;
}

export const Sidebar = (props: SideBarProps) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);

  const onToggleMenu = () => {
    setCollapsed((prevState) => !prevState);
  };

  return (
    <div
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <div>
        <button onClick={onToggleMenu}>toggle</button>
      </div>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
