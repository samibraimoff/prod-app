import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation('translation');
  const onToggleLang = async () =>
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  return (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={onToggleLang}
      className={classNames('', {}, [className])}
    >
      {t('lang')}
    </Button>
  );
};
