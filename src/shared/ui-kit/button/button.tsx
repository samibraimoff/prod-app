import { cssClassNames } from "shared/helpers/class-names/css-class-names";
import styles from "./button.module.scss";
import { ButtonHTMLAttributes, FC } from "react";

export enum ThemeButton {
  PRIMARY = "primary",
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, theme, children, ...rest } = props;

  return (
    <button
      type="submit"
      className={cssClassNames(styles.button, {}, [className, styles[theme]])}
      {...rest}
    >
      {children}
    </button>
  );
};
