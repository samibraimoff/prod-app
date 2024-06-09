import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation(['about', 'translation']);

  return (
    <div>
      <p>{t('aboutPage')}</p>
    </div>
  );
};

export default About;
