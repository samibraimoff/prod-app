import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui";
import { classNames } from "shared/lib/class-names/class-names";
import classes from "./language-switcher.module.scss";

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher = (props: LanguageSwitcherProps) => {
  const { className } = props;
  const { t, i18n } = useTranslation();
  const changeLang = () => {
    void i18n.changeLanguage(i18n.language === "en-US" ? "ru-RU" : "en-US");
  };
  return (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={changeLang}
      className={classNames(classes.languageSwitcher, {}, [className])}
    >
      {t("language")}
    </Button>
  );
};
