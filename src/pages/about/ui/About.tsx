import { useTranslation } from "react-i18next";

import { cssClassNames } from "shared/helpers/class-names/css-class-names";

const About = () => {
  const { t } = useTranslation("about");
  return (
    <div className={cssClassNames("", {}, [])}>
      <h2>{t("about")}</h2>
    </div>
  );
};

export default About;
