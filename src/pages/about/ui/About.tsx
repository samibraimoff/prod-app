import { useTranslation } from "react-i18next";

import { cssClassNames } from "shared/helpers/class-names/css-class-names";
import styles from "./About.module.scss";

const About = () => {
  const { t } = useTranslation("about");
  return (
    <div className={cssClassNames(styles.About, {}, [])}>
      <h2>{t("about")}</h2>
    </div>
  );
};

export default About;
