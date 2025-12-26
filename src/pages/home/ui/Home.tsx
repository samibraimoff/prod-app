import { useTranslation } from "react-i18next";
import { cssClassNames } from "shared/helpers/class-names/css-class-names";
import styles from "./Home.module.scss";
import { Counter } from "entities/counter";

const Home = () => {
  const { t } = useTranslation("main");
  return (
    <div className={cssClassNames(styles.Home, {}, [])}>
      <h2>{t("home")}</h2>
      <Counter />
    </div>
  );
};

export default Home;
