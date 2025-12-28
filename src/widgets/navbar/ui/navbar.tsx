import { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme, Modal } from "shared/ui-kit";
import { cssClassNames } from "shared/helpers/class-names/css-class-names";

import styles from "./navbar.module.scss";

interface NavbarProps {
  classNames?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { classNames } = props;
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div
      data-testid="navbar"
      className={cssClassNames(styles.navbar, {}, [classNames])}
    >
      <Button
        theme={ButtonTheme.BACKGROUND_INVERTED}
        onClick={onToggleModal}
        className={styles.links}
      >
        {t("navbar.signIn")}
      </Button>
      <Modal isOpen={isOpen} onClose={onToggleModal}>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
          veritatis vitae quasi rerum harum nemo quidem in numquam dicta. Ipsum
          cumque veniam, sed modi quisquam consectetur sapiente repellat ipsam
          maxime aperiam magnam perspiciatis. Voluptate delectus, assumenda
          voluptatum necessitatibus ab unde? Molestias alias, doloribus laborum
          voluptas quia ex laudantium, eveniet iusto aspernatur, tempore ab
          totam. Eligendi facilis iure asperiores quasi dicta ratione ullam
          commodi inventore quae ipsam magnam placeat animi minus sed nemo,
          quaerat accusantium libero rem necessitatibus perferendis. Explicabo
          ut perferendis aut impedit saepe odit illo ipsam odio tenetur, quam
          officia eligendi nisi voluptas deleniti sapiente asperiores libero
          iusto blanditiis.
        </span>
      </Modal>
    </div>
  );
};
