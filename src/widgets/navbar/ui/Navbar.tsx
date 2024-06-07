import { useTranslation } from "react-i18next";
import cls from "./Navbar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation(["translation"]);
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to="about"
          className={cls.mainLink}
        >
          {t("links.about")}
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/">
          {t("links.main")}
        </AppLink>
      </div>
    </div>
  );
};
