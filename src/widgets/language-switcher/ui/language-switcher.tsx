import { useTranslation } from "react-i18next";

import { cssClassNames } from "shared/helpers/class-names/css-class-names";
import { Button, ThemeButton } from "shared/ui-kit/button/button";
import styles from "./language-switcher.module.scss";

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher = (props: LanguageSwitcherProps) => {
  const { className } = props;
  const { t, i18n } = useTranslation("translation");

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
  };
  return (
    <div className={cssClassNames("", {}, [className])}>
      <Button
        theme={ThemeButton.CLEAR}
        onClick={toggleLang}
        className={styles.fontColor}
      >
        {t("language")}
      </Button>
    </div>
  );
};
