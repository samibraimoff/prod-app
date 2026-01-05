import { ButtonHTMLAttributes, FC } from "react";
import { cssClassNames } from "shared/helpers/class-names/css-class-names";

import styles from "./button.module.scss";

export enum ButtonTheme {
  PRIMARY = "primary",
  CLEAR = "clear",
  OUTLINE = "outline",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "backgroundInverted",
}

export enum ButtonSize {
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
}

const Button: FC<ButtonProps> = (props) => {
  const { className, theme, square, size, disabled, children, ...rest } = props;

  const mods: Record<string, boolean> = {
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
};

Button.displayName = "Button";
export { Button };
