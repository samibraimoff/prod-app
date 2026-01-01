import { InputHTMLAttributes, memo } from "react";
import { cssClassNames } from "shared/helpers/class-names/css-class-names";
import styles from "./input.module.scss";

type InputHTMLProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">

interface InputProps extends InputHTMLProps {
  className?: string;
  placeholder?: string;
  type?: string;
  label?: string;
  value?: string;
  onChange: (value: string) => void;
}

const Input = memo((props: InputProps) => {
  const { className, placeholder = "", type = "text", label, onChange, ...otherProps } = props;
  const classes = cssClassNames(styles.input, {}, [className]);
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };
  return (<label className={styles.input}>
    {label && label}
    <input
      className={classes}
      placeholder={placeholder}
      type={type}
      onChange={onChangeHandler}
      {...otherProps}
    />
  </label>
  );
});

Input.displayName = "Input";
export { Input };