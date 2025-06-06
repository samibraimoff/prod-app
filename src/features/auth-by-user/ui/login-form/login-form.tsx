import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib';
import {
  Button, ButtonTheme, Input, Text, TextTheme,
} from 'shared/ui';

import { getLoginFormState } from '../../model/selectors/get-login-form-state/get-login-form-state';
import { loginByUsername } from '../../model/services/login-by-username/login-by-username';
import { loginActions } from '../../model/slice/login-slice';
import classes from './login-form.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo((props: LoginFormProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    username, password, isLoading, error,
  } = useSelector(getLoginFormState);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onClickLogin = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <div className={classNames(classes.loginForm, {}, [className])}>
      <Text title={t('features.loginForm')} />
      {error && <Text theme={TextTheme.ERROR} title={error} />}
      <Input
        autofocus
        type="text"
        placeholder={t('widgets.navbar.enterUsername')}
        className={classes.input}
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        type="password"
        placeholder={t('widgets.navbar.enterPassword')}
        className={classes.input}
        onChange={onChangePassword}
        value={password}
      />
      <Button
        theme={ButtonTheme.OUTLINED}
        className={classes.loginBtn}
        onClick={onClickLogin}
        disabled={isLoading}
      >
        {t('features.signIn')}
      </Button>
    </div>
  );
});
