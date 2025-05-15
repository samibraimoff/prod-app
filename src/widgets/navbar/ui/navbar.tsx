import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/class-names/class-names';
import { Link, LinkTheme } from 'shared/ui';
import classes from './navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export function Navbar(props: NavbarProps) {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(classes.navbar, {}, [className])}>
      <div className={classes.links}>
        <Link
          theme={LinkTheme.SECONDARY}
          to="/"
          className={classes['main-link']}
        >
          {t('main.link')}
        </Link>
        <Link theme={LinkTheme.SECONDARY} to="/about">
          {t('about.link')}
        </Link>
      </div>
    </div>
  );
}
