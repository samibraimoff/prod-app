import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/class-names/class-names';

import classes from './button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINED = 'outlined',
  PRIMARY = 'primary',
  BACKGROUND = 'background'
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className, children, theme, square, size, ...rest
  } = props;

  const mods: Record<string, boolean> = {
    [classes.square]: square,
    [classes[size]]: true,
  };

  return (
    <button
      type="button"
      className={classNames(classes.button, mods, [className, classes[theme]])}
      {...rest}
    >
      {children}
    </button>
  );
};
