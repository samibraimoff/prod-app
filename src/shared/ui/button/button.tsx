import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/helpers/classnames";
import styles from "./button.module.scss";

export enum ButtonTheme {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  onClick?: () => void;
  theme?: ButtonTheme;
}
export const Button: FC<ButtonProps> = (props) => {
  const { children, className, onClick, theme, ...others } = props;
  return (
    <button
      onClick={onClick}
      {...others}
      className={classNames(styles.button, {}, [className, styles[theme]])}
    >
      {children}
    </button>
  );
};
