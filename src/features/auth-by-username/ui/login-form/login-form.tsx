import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/components/dynamic-module-loader/dynamic-module-loader";
import { cssClassNames } from "shared/helpers/class-names/css-class-names";
import {
  Button,
  ButtonTheme,
  Input,
  Tags,
  Text,
  TextTheme,
} from "shared/ui-kit";

import { getLoginError } from "../../model/selectors/get-login-error/get-login-error";
import { getLoginIsLoading } from "../../model/selectors/get-login-is-loading/get-login-is-loading";
import { getLoginPassword } from "../../model/selectors/get-login-password/get-login-password";
import { getLoginUsername } from "../../model/selectors/get-login-username/get-login-username";
import { loginByUsername } from "../../model/services/login-by-username/login-by-username";
import { loginActions, loginReducer } from "../../model/slice/login-slice";
import styles from "./login-form.module.scss";

interface LoginFormProps {
  className?: string;
}

const initialReducer: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = (props: LoginFormProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );
  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(loginByUsername({ username, password }));
    },
    [dispatch, username, password]
  );

  return (
    <DynamicModuleLoader reducers={initialReducer} removeAfterUnmount>
      <form className={cssClassNames(styles.loginForm, {}, [className])}>
        <Text tag={Tags.LEGEND} title={t("loginForm.title")} />
        {error && (
          <>
            <Text
              title={t("loginForm.error")}
              className={styles.error}
              theme={TextTheme.ERROR}
              tag={Tags.HEADING_THREE}
            />
            <Text
              paragraph={error}
              className={styles.error}
              theme={TextTheme.ERROR}
              tag={Tags.PARAGRAPH}
            />
          </>
        )}
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
          onClick={onLoginClick}
          disabled={isLoading}
        >
          {t("loginForm.signIn")}
        </Button>
      </form>
    </DynamicModuleLoader>
  );
};

export default LoginForm;
