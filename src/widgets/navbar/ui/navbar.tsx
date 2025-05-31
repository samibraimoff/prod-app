import { LoginModal } from 'features/auth-by-user';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import { Button, ButtonTheme } from 'shared/ui';

import classes from './navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export function Navbar(props: NavbarProps) {
  const { className } = props;
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const handleOnCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const handleOnOpenModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  return (
    <div className={classNames(classes.navbar, {}, [className])}>
      <Button theme={ButtonTheme.CLEAR} className={classes.links} onClick={handleOnOpenModal}>
        {t('widgets.navbar.signIn')}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={handleOnCloseModal} />
    </div>
  );
}
