import { useTranslation } from 'react-i18next';

const Main = () => {
  const { t } = useTranslation(['main', 'translation']);

  return (
    <div>
      <p>{t('mainPage')}</p>
    </div>
  );
};

export default Main;
