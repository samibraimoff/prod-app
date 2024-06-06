import { ButtonHTMLAttributes, FC } from "react";
import cls from "./Button.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

export enum ButtonTheme {
  CLEAR = "clear",
  PRIMARY = "primary",
  SECONDARY = "secondary",
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
      className={classNames(cls.btn, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
