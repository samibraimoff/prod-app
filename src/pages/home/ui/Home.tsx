import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation("main");
  return (
    <>
      <h2>{t("home")}</h2>
    </>
  );
};

export default Home;
