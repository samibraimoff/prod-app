import { useTranslation } from 'react-i18next';
import styles from './About.module.scss';

const About = () => {
  const { t } = useTranslation(['about', 'translation']);

  return (
    <div>
      <p>{t('aboutPage')}</p>
    </div>
  );
};

export default About;
