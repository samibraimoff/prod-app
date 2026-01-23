import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { cssClassNames } from "shared/helpers/class-names/css-class-names";
import { Button, ButtonSize, ButtonTheme, Input, Text } from "shared/ui-kit";

import { getProfileData } from "../model/selectors/get-profile-data/get-profile-data";
import { getProfileError } from "../model/selectors/get-profile-error/get-profile-error";
import { getProfileIsLoading } from "../model/selectors/get-profile-is-loading/get-profile-is-loading";
import styles from "./profile-card.module.scss";

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const { className } = props;
  const { t } = useTranslation("profile");

  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

  if (error) {
    return <h2>{t("errorMessage")}</h2>;
  }

  if (isLoading) {
    return <h2>{t("isLoading")}</h2>;
  }

  return (
    <div className={cssClassNames(styles.profileCard, {}, [className])}>
      <div className={styles.header}>
        <Text title={t("profile")} />
        <Button theme={ButtonTheme.PRIMARY} size={ButtonSize.M}>
          {t("editProfile")}
        </Button>
      </div>
      <div className={styles.body}>
        <Input
          label={t("firstName")}
          value={data?.firstname}
          className={styles.input}
          onChange={() => ({})}
        />
        <Input
          label={t("lastName")}
          value={data?.lastname}
          className={styles.input}
          onChange={() => ({})}
        />
      </div>
      <div className={styles.bottom}>
        <Button>{t("saveProfile")}</Button>
      </div>
    </div>
  );
};
