import { type ButtonHTMLAttributes, type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  onClick: () => void;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme = ButtonTheme.PRIMARY,
    onClick,
    ...otherProps
  } = props;
  return (
    <button
      onClick={onClick}
      type='button'
      className={classNames(cls.btn, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
