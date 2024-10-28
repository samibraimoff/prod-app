import { useTranslation } from 'react-i18next';

function MainPage() {
    const { t } = useTranslation('main');
    return <h1>{t('main')}</h1>;
}

export default MainPage;
