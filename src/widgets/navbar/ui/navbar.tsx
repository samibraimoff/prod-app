import { getAuthData, userActions } from "entities/user";
import { LoginModal } from "features/auth-by-username";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { cssClassNames } from "shared/helpers/class-names/css-class-names";
import { Button, ButtonTheme } from "shared/ui-kit";

import styles from "./navbar.module.scss";

interface NavbarProps {
  classNames?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { classNames } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const authData = useSelector(getAuthData);
  const [isOpen, setIsOpen] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const onOpenModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onLougout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <div
        data-testid="navbar"
        className={cssClassNames(styles.navbar, {}, [classNames])}
      >
        <Button
          theme={ButtonTheme.BACKGROUND_INVERTED}
          onClick={onLougout}
          className={styles.links}
        >
          {t("navbar.logout")}
        </Button>
      </div>
    );
  }

  return (
    <div
      data-testid="navbar"
      className={cssClassNames(styles.navbar, {}, [classNames])}
    >
      <Button
        theme={ButtonTheme.BACKGROUND_INVERTED}
        onClick={onOpenModal}
        className={styles.links}
      >
        {t("navbar.signIn")}
      </Button>
      <LoginModal onClose={onCloseModal} isOpen={isOpen} />
    </div>
  );
};
