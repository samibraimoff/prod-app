import { profileReducer } from "entities/profile";
import { useTranslation } from "react-i18next";
import { DynamicModuleLoader, ReducersList } from "shared/components/dynamic-module-loader/dynamic-module-loader";
import { cssClassNames } from "shared/helpers/class-names/css-class-names";

import styles from "./Profile.module.scss";

const reducers: ReducersList = {
  profile: profileReducer
};

const Profile = () => {
  const { t } = useTranslation("profile");
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={cssClassNames(styles.Profile, {}, [])}>
        <h2>{t("profile")}</h2>
      </div>
    </DynamicModuleLoader>
  );
};

export default Profile;
