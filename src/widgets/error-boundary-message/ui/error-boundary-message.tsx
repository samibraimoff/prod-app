import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';

import classes from './error-boundary-message.module.scss';

export const ErrorBoundaryMessage = () => {
  const { t } = useTranslation();
  return (
    <div className={classNames(classes.container, {}, [])}>
      <p className={classNames(classes.message, {}, [])}>{t('errorMessage')}</p>
    </div>
  );
};
