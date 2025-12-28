import { useTheme, Theme } from "app/providers/theme";
import { cssClassNames } from "shared/helpers/class-names/css-class-names";
import { Button, ButtonTheme } from "shared/ui-kit/button/button";
import DarkTheme from "shared/assets/icons/dark.svg";
import LightTheme from "shared/assets/icons/light.svg";
import styles from "./theme-switcher.module.scss";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const { className } = props;
  const { toggleTheme, theme } = useTheme();

  return (
    <Button
      className={cssClassNames(styles.themeSwitcher, {}, [className])}
      onClick={toggleTheme}
      theme={ButtonTheme.CLEAR}
      data-testid="theme-switcher"
    >
      {theme === Theme.DARK ? (
        <DarkTheme
          data-testid="dark-theme-icon"
          width={24}
          height={24}
          className={styles.icons}
        />
      ) : (
        <LightTheme
          data-testid="light-theme-icon"
          width={24}
          height={24}
          className={styles.icons}
        />
      )}
    </Button>
  );
};
