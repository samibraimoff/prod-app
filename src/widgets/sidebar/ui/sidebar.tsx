import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/home.svg';
import { RoutePath } from 'shared/config/router/router-config';
import { classNames } from 'shared/lib';
import {
  Button, ButtonSize, ButtonTheme, Link, LinkTheme,
} from 'shared/ui';
import { LanguageSwitcher } from 'widgets/language-switcher';
import { ThemeSwitcher } from 'widgets/theme-switcher';

import classes from './sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export function Sidebar(props: SidebarProps) {
  const { className } = props;
  const { t } = useTranslation();
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
      <div className={classes.links}>
        <Link
          theme={LinkTheme.PRIMARY}
          to={RoutePath.main}
          className={classes.link}
        >
          <MainIcon className={classes.icon} />
          <span className={classes['link-text']}>{t('pages.main.link')}</span>
        </Link>
        <Link
          theme={LinkTheme.PRIMARY}
          to={RoutePath.about}
          className={classes.link}
        >
          <AboutIcon className={classes.icon} />
          <span className={classes['link-text']}>{t('pages.about.link')}</span>
        </Link>
      </div>
      <Button
        data-testid="sidebar-button"
        type="button"
        onClick={onToggle}
        className={classes.collapsedBtn}
        theme={ButtonTheme.BACKGROUND}
        size={ButtonSize.XL}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={classes.switchers}>
        <ThemeSwitcher className={classes.themeSwitcher} />
        <LanguageSwitcher />
      </div>
    </div>
  );
}
