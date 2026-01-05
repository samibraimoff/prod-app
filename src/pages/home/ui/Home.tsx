import { useTranslation } from "react-i18next";
import { cssClassNames } from "shared/helpers/class-names/css-class-names";

import styles from "./Home.module.scss";

const Home = () => {
  const { t } = useTranslation("main");
  return (
    <div className={cssClassNames(styles.Home, {}, [])}>
      <h2>{t("home")}</h2>
    </div>
  );
};

export default Home;
