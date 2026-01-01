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
    <form className={cssClassNames(styles.loginForm, {}, [className])}>
      <legend>{t("loginForm.title")}</legend>
      <Input
        label={t("loginForm.username")}
        type={"text"}
        // eslint-disable-next-line i18next/no-literal-string
        placeholder={"Login"}
        value={username}
        onChange={onChangeUsername}
        autoFocus
      />
      <Input
        label={t("loginForm.password")}
        type={"password"}
        // eslint-disable-next-line i18next/no-literal-string
        placeholder={"Password"}
        value={password}
        onChange={onChangePassword}
      />
      <Button
        type="submit"
        theme={ButtonTheme.PRIMARY}
        className={styles.button}
      >
        {t("loginForm.signIn")}
      </Button>
    </form>
  );
};
