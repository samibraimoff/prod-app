import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';

import classes from './not_found.module.scss';

export const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <div className={classNames(classes['not-found'], {}, [])}>
      <h2 className={classes.title}>{t('pages.page_not_found_title')}</h2>
      <p className={classes.desciption}>{t('pages.page_not_found_description')}</p>
    </div>
  );
};
