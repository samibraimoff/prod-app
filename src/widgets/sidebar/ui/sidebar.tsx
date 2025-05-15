import { useState } from 'react';
import { LanguageSwitcher } from 'widgets/language-switcher';
import { ThemeSwitcher } from 'widgets/theme-switcher';
import { classNames } from 'shared/lib/class-names/class-names';
import { Button } from 'shared/ui';
import classes from './sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export function Sidebar(props: SidebarProps) {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prevState) => !prevState);
  };

  return (
    <div
      className={classNames(
        classes.sidebar,
        { [classes.collapsed]: collapsed },
        [className],
      )}
      data-testid="sidebar"
    >
      <Button
        data-testid="sidebar-button"
        type="button"
        onClick={onToggle}
      >
        toggle
      </Button>
      <div className={classes.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </div>
  );
}
