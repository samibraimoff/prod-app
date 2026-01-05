import { useTranslation } from "react-i18next";

import styles from "./not-found-page.module.scss";

export const NotFoundPage = () => {
  const { t } = useTranslation("translation");
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{t("notFoundPage.title")}</h1>
      <p className={styles.text}>{t("notFoundPage.text")}</p>
    </div>
  );
};
