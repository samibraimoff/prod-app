import { FC } from "react";
import { useTheme, Theme } from "app/providers/theme";
import { classNames } from "shared/lib/helpers/classnames";
import LightIcon from "shared/assets/icons/day.svg";
import DarkIcon from "shared/assets/icons/night.svg";
import { Button, ButtonTheme } from "shared/ui";
import styles from "./theme-switcher.module.scss";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
  const { className } = props;
  const { toggleTheme, theme } = useTheme();
  return (
    <Button
      onClick={toggleTheme}
      theme={ButtonTheme.CLEAR}
      className={classNames(styles.themeSwitcher, {}, [className])}
    >
      {theme === Theme.DARK ? (
        <LightIcon width={32} height={32} className={styles.icons} />
      ) : (
        <DarkIcon width={32} height={32} className={styles.icons} />
      )}
    </Button>
  );
};
