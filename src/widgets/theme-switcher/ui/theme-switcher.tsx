import { Button, ButtonTheme } from 'shared/ui';
import { useTheme, Theme } from 'app/providers/theme';
import { classNames } from 'shared/lib/class-names/class-names';
import LightIcon from 'shared/assets/icons/light.svg';
import DarkIcon from 'shared/assets/icons/dark.svg';
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
            className={classNames(classes.themeSwitcher, {}, [className])}
        >
            {theme === Theme.LIGHT ? (
                <DarkIcon width={24} height={24} />
            ) : (
                <LightIcon width={24} height={24} />
            )}
        </Button>
    );
}
