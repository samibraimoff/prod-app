import { useTranslation } from 'react-i18next';
import styles from './Main.module.scss';

const Main = () => {
  const { t } = useTranslation(['main', 'translation']);

  return (
    <div>
      <p>{t('mainPage')}</p>
    </div>
  );
};

export default Main;
