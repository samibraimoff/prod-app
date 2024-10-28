import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/classnames';
import { Button, ButtonTheme } from 'shared/ui';

export const LanguageSwitcher = () => {
    const { t, i18n } = useTranslation();
    const onTranslate = () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={onTranslate}
            className={classNames("", {}, [])}
        >
            {t('language')}
        </Button>
    );
};
