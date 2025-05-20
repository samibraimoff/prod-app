import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/class-names/class-names';

import classes from './not_found.module.scss';

export const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <div className={classNames(classes['not-found'], {}, [])}>
      <h2 className={classes.title}>{t('page_not_found_title')}</h2>
      <p className={classes.desciption}>{t('page_not_found_description')}</p>
    </div>
  );
};
