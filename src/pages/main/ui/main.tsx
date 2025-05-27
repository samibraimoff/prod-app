import { useTranslation } from 'react-i18next';

function Main() {
  const { t } = useTranslation();
  return (
    <div>
      <h2>{t('main.title')}</h2>
    </div>
  );
}

export default Main;
