import styles from "./About.module.scss";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t, i18n } = useTranslation(["about", "translation"]);

  return (
    <div>
      <p>{t("aboutPage")}</p>
    </div>
  );
};

export default About;
