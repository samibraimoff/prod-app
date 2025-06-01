import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import { Button, ButtonTheme, Input } from 'shared/ui';

import classes from './login-form.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = (props: LoginFormProps) => {
  const { className } = props;
  const { t } = useTranslation();
  return (
    <div className={classNames(classes.loginForm, {}, [className])}>
      <Input autofocus type="text" placeholder={t('widgets.navbar.enterUsername')} className={classes.input} />
      <Input type="password" placeholder={t('widgets.navbar.enterPassword')} className={classes.input} />
      <Button theme={ButtonTheme.CLEAR} className={classes.loginBtn}>{t('features.singIn')}</Button>
    </div>
  );
};
