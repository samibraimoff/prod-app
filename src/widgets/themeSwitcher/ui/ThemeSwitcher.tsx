import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme, Theme } from 'app/providers/theme';
import DarkIcon from 'shared/assets/icons/dark.svg';
import LightIcon from 'shared/assets/icons/light.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { toggleTheme, theme } = useTheme();

  return (
    <div className={classNames('', {}, [className])}>
      <Button theme={ButtonTheme.CLEAR} onClick={toggleTheme}>
        {theme === Theme.DARK ? <LightIcon /> : <DarkIcon />}
      </Button>
    </div>
  );
};
