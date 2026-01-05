import { useTranslation } from "react-i18next";
import { cssClassNames } from "shared/helpers/class-names/css-class-names";
import { Button, ButtonTheme } from "shared/ui-kit/button/button";

import styles from "./language-switcher.module.scss";

interface LanguageSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LanguageSwitcher = (props: LanguageSwitcherProps) => {
  const { className, short } = props;
  const { t, i18n } = useTranslation("translation");

  const toggleLang = () => {
    void i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
  };
  return (
    <div className={cssClassNames("", {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR}
        onClick={toggleLang}
        className={styles.fontColor}
      >
        {t(short ? "short_language" : "language")}
      </Button>
    </div>
  );
};
