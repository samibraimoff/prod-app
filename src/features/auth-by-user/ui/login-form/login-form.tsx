import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/class-names/class-names';
import { Button } from 'shared/ui';

import classes from './login-form.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = (props: LoginFormProps) => {
  const { className } = props;
  const { t } = useTranslation();
  return (
    <div className={classNames(classes.loginForm, {}, [className])}>
      <input type="text" placeholder="Name" />
      <input type="password" placeholder="Password" />
      <Button>{t('features.singIn')}</Button>
    </div>
  );
};
