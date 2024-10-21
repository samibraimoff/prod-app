import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/helpers/classnames";
import { Button, ButtonTheme } from "shared/ui";
import styles from "./language-switcher.module.scss";

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = (props) => {
  const { className } = props;

  const { t, i18n } = useTranslation();

  const onTranslate = () =>
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={onTranslate}
      className={classNames(styles.languageSwitcher, {}, [className])}
    >
      {t("language")}
    </Button>
  );
};
