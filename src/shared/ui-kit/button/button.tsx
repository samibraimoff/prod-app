import { ButtonHTMLAttributes, memo, ReactNode } from "react";
import {
  cssClassNames,
  Mods,
} from "shared/helpers/class-names/css-class-names";

import styles from "./button.module.scss";

export enum ButtonTheme {
  PRIMARY = "primary",
  CLEAR = "clear",
  OUTLINE = "outline",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "backgroundInverted",
}

export enum ButtonSize {
  S = "size_s",
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  children?: ReactNode;
}

const Button = memo((props: ButtonProps) => {
  const {
    className,
    theme = ButtonTheme.PRIMARY,
    square,
    size = ButtonSize.M,
    disabled,
    children,
    ...rest
  } = props;

  const mods: Mods = {
    [styles.square]: square,
    [styles[size]]: true,
    [styles.disabled]: disabled,
  };

  return (
    <button
      type="submit"
      className={cssClassNames(styles.button, mods, [className, styles[theme]])}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";
export { Button };
