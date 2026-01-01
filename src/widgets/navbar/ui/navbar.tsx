import { LoginModal } from "features/auth-by-username";
import { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui-kit";
import { cssClassNames } from "shared/helpers/class-names/css-class-names";

import styles from "./navbar.module.scss";

interface NavbarProps {
  classNames?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { classNames } = props;
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const onOpenModal = useCallback(() => {
    setIsOpen(true);
  }, []);

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
