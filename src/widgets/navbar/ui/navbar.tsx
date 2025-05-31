import { LoginModal } from 'features/auth-by-user';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/class-names/class-names';
import { Button, ButtonTheme } from 'shared/ui';

import classes from './navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export function Navbar(props: NavbarProps) {
  const { className } = props;
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const handleToggleModal = useCallback(() => {
    setIsAuthModal((prevState) => !prevState);
  }, []);

  return (
    <div className={classNames(classes.navbar, {}, [className])}>
      <Button theme={ButtonTheme.CLEAR} className={classes.links} onClick={handleToggleModal}>
        {t('widgets.navbar.signIn')}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={() => setIsAuthModal(false)} />
    </div>
  );
}
