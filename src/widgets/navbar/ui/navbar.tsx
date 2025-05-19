import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/class-names/class-names';
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
        /
      </div>
    </div>
  );
}
