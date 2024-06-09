import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/themeSwitcher';
import { LangSwitcher } from 'widgets/langSwitcher';
import cls from './Sidebar.module.scss';

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
        <button type='button' onClick={onToggleMenu}>
          toggle
        </button>
      </div>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
