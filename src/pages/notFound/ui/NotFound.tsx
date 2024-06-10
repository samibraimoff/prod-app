import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import cls from './NotFound.module.scss';

interface NotFoundProps {
  className?: string;
}

export const NotFound = ({ className }: NotFoundProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.notFound, {}, [className])}>
      <h1>{t('notFound')}</h1>
      <AppLink className={cls.link} to='/'>
        {t('returnToMain')}
      </AppLink>
    </div>
  );
};
