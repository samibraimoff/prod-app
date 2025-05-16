import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/class-names/class-names';
import classes from './button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINED = 'outlined',
  PRIMARY = 'primary'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className, children, theme, ...rest
  } = props;

  return (
    <button
      type="button"
      className={classNames(classes.button, {}, [className, classes[theme]])}
      {...rest}
    >
      {children}
    </button>
  );
};
