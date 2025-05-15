import { useTranslation } from 'react-i18next';

function Main() {
  const { t } = useTranslation();
  return <h2>{t('main.title')}</h2>;
}

export default Main;
