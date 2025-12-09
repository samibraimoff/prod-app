import { useTranslation } from "react-i18next";
import styles from "./page-with-error-message.module.scss";
import { cssClassNames } from "shared/helpers/class-names/css-class-names";

interface PageWithErrorMessageProps {
  className?: string;
}

export const PageWithErrorMessage = (props: PageWithErrorMessageProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div
      className={cssClassNames(styles.pageWithErrorMessage, {}, [className])}
    >
      <p className={styles.text}>{t("errorMessage.text")}</p>
    </div>
  );
};
