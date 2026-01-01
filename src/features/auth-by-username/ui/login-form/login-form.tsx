import { useState } from "react";
import { useTranslation } from "react-i18next";
import { cssClassNames } from "shared/helpers/class-names/css-class-names";
import { Button, ButtonTheme, Input } from "shared/ui-kit";

import styles from "./login-form.module.scss";

interface LoginFormProps {
  className?: string;
}

export const LoginForm = (props: LoginFormProps) => {
  const { className } = props;
  const { t } = useTranslation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onChangeUsername = (value: string) => {
    setUsername(value);
  };
  const onChangePassword = (value: string) => {
    setPassword(value);
  };
  
  return (
    <div className={cssClassNames(styles.loginForm, {}, [className])}>
      <h2>{t("loginForm.title")}</h2>
      <Input
        label={t("loginForm.username")}
        type={"text"}
        placeholder={"Login"}
        value={username}
        onChange={onChangeUsername}
      />
      <Input
        label={t("loginForm.password")}
        type={"password"}
        placeholder={"Password"}
        value={password}
        onChange={onChangePassword}
      />
      <Button theme={ButtonTheme.PRIMARY} className={styles.button}>
        {t("loginForm.signIn")}
      </Button>
    </div>
  );
};