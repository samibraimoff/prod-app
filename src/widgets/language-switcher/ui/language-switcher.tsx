import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui';
import { classNames } from 'shared/lib/class-names/class-names';
import classes from './language-switcher.module.scss';

interface LanguageSwitcherProps {
  className?: string;
}

export function LanguageSwitcher(props: LanguageSwitcherProps) {
  const { className } = props;
  const { t, i18n } = useTranslation();
  const changeLang = () => (i18n.language === 'en-US'
    ? i18n.changeLanguage('ru-RU')
    : i18n.changeLanguage('en-US'));

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={changeLang}
      className={classNames(classes['language-switcher'], {}, [className])}
    >
      {t('language')}
    </Button>
  );
}
