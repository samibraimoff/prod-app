import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

export const PageError = () => {
  const { t } = useTranslation();
  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={classNames(cls.PageError, {}, [])}>
      {t('somethingWentWrong')}
      <Button theme={ButtonTheme.PRIMARY} onClick={reloadPage}>
        {t('reload')}
      </Button>
    </div>
  );
};
