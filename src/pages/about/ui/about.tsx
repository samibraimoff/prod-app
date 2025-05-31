import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();
  return <h2>{t('pages.about.title')}</h2>;
}

export default About;
