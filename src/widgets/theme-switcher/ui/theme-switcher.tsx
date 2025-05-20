import { Theme, useTheme } from 'app/providers/theme';
import DarkIcon from 'shared/assets/icons/dark.svg';
import LightIcon from 'shared/assets/icons/light.svg';
import { classNames } from 'shared/lib/class-names/class-names';
import { Button, ButtonTheme } from 'shared/ui';

import classes from './theme-switcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export function ThemeSwitcher(props: ThemeSwitcherProps) {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={toggleTheme}
      className={classNames(classes['theme-switcher'], {}, [className])}
    >
      {theme === Theme.LIGHT ? (
        <DarkIcon width={24} height={24} />
      ) : (
        <LightIcon width={24} height={24} />
      )}
    </Button>
  );
}
