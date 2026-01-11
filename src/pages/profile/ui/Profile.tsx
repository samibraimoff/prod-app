import { useTranslation } from "react-i18next";
import { cssClassNames } from "shared/helpers/class-names/css-class-names";

import styles from "./Profile.module.scss";

const Profile = () => {
  const { t } = useTranslation("profile");
  return (
    <div className={cssClassNames(styles.Profile, {}, [])}>
      <h2>{t("profile")}</h2>
    </div>
  );
};

export default Profile;
