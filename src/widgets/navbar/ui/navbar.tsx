import { getUserAuthData, userActions } from 'entities/user';
import { LoginModal } from 'features/auth-by-user';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib';
import { Button, ButtonTheme } from 'shared/ui';

import classes from './navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export function Navbar(props: NavbarProps) {
  const { className } = props;
  const { t } = useTranslation();
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const handleOnCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const handleOnOpenModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const handleOnLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <div className={classNames(classes.navbar, {}, [className])}>
        <Button
          theme={ButtonTheme.CLEAR}
          className={classes.links}
          onClick={handleOnLogout}
        >
          {t('widgets.navbar.signOut')}
        </Button>
      </div>
    );
  }

  return (
    <div className={classNames(classes.navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR}
        className={classes.links}
        onClick={handleOnOpenModal}
      >
        {t('widgets.navbar.signIn')}
      </Button>
      <LoginModal
        isOpen={isAuthModal}
        onClose={handleOnCloseModal}
      />
    </div>
  );
}
